<template>
  <div class="container has-text-left">
    <div class="box">
      <h2 class="title is-4">Bike Settings</h2>

      <component :is="calculationType.form" v-for="(bike, index) in bikes" :bike="bike"
                 :active="index === activeBikeIndex" :key="index" @bikeChanged="updateBike"></component>

      <div class="container has-text-centered">
        <button :disabled="this.bikes.length >= this.maxBikes" @click="addBike"
                class="button is-info is-medium is-rounded">
        <span class="icon is-medium">
          <i class="fas fa-plus"></i>
        </span>
          <span>Compare</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
  name: "BikeParameters",
  computed: {
    ...mapState(['activeBikeIndex', 'calculationType', 'availableBikeColors', 'bikes']),
  },
  data() {
    return {
      maxBikes: 5
    }
  },
  methods: {
    ...mapMutations(['addBike', 'updateBike', 'setBikeColor']),
  },
  mounted() {

    // Ensure the initial bike colour is set when this is mounted for the first time
    if (this.bikes[0].color === undefined) {
      this.setBikeColor(0);
    }

  },
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/utilities/all';

.container {
  margin-top: 1rem;
}

</style>
