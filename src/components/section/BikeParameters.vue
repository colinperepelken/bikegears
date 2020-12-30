<template>
  <div class="container has-text-left">
    <div class="box">
      <h2 class="title is-4">Bike Settings</h2>

      <GearRatioForm @changed="updateBike"></GearRatioForm>

      <div class="container has-text-centered">
        <button @click="calculate" class="button is-primary is-medium is-rounded">
          <span>Calculate</span>
          <span class="icon is-medium">
            <i class="fas fa-bicycle"></i>
          </span>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import GearRatioForm from "@/components/form/GearRatioForm";

export default {
  name: "BikeParameters",
  components: {GearRatioForm},
  data() {
    return {
      bikes: []
    }
  },
  methods: {
    calculate() {
      this.$emit('calculate', {
        bikes: this.bikes.map(bike => {
          return {
            chainrings: bike.chainrings.map(chainring => chainring.value).sort(),
            cassetteCogs: _.range(bike.cassetteMin, bike.cassetteMax, 1),
          };
        })
      });
    },
    updateBike(properties) {
      this.bikes[0] = {...this.bikes[0], ...properties};
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
