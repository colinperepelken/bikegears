<template>
  <div class="container has-text-left">
    <div class="box">
      <h2 class="title is-4">Bike Settings</h2>

      <div class="tabs is-centered" v-if="numBikes > 1">
        <ul>
          <li v-for="(bike, index) in bikes" :key="index" :class="{'is-active': index === activeBikeIndex}"><a
              @click="changeBike(index)">Bike #{{ index + 1 }}</a></li>
        </ul>
      </div>

      <GearRatioForm></GearRatioForm>

      <div class="container has-text-centered">
        <button @click="calculate" class="button is-primary is-medium is-rounded">
          <span class="icon is-medium">
            <i class="fas fa-bicycle"></i>
          </span>
          <span>Calculate</span>
        </button>
        <button @click="addBike" class="button is-info is-medium is-rounded ml-5">
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
import _ from 'lodash';
import GearRatioForm from "@/components/form/GearRatioForm";
import {mapState} from 'vuex';

export default {
  name: "BikeParameters",
  components: {GearRatioForm},
  computed: {
    ...mapState(['bikes'])
  },
  data() {
    return {
      activeBikeIndex: 0,
      numBikes: 1
    };
  },
  methods: {
    addBike() {
      this.numBikes++;
    },
    removeBike() {

    },
    changeBike(index) {
      this.activeBikeIndex = index;
    },
    calculate() {
      this.$emit('calculate', {
        bikes: this.bikes.map(bike => {
          return {
            chainrings: bike.chainrings.map(chainring => chainring.value).sort(),
            cassetteCogs: _.range(bike.cassetteMin, bike.cassetteMax, 1),
          }
        })
      })
    }
  },
  mounted() {
    this.calculate();
  }
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 1rem;
}
</style>
