<template>
  <BaseInsights :compute-function="computeMetersOfDevelopment">
    <p class="mb-2">
      This bike has a lowest gear of <b>{{minValue}}</b> meters of development.
      Your highest gear is <b>{{maxValue}}</b> meters of development.
      Your gear range is <b>{{getGearRange(minValue, maxValue)}}</b>%
    </p>

    <p><i>To learn more about meters of development, visit the <router-link to="/learn">Learn</router-link> section.</i></p>
  </BaseInsights>
</template>

<script>
import BaseInsights from "@/components/calculation/BaseInsights";
import {mapGetters} from "vuex";
import ComputeMetersOfDevelopment
  from "@/components/calculation/meters_of_development/mixins/ComputeMetersOfDevelopment";

export default {
  name: "MetersOfDevelopmentInsights",
  components: {BaseInsights},
  mixins: [ComputeMetersOfDevelopment],
  computed: {
    ...mapGetters(['currentBike']),
    minValue() {
      let minChainring = this.currentBike.chainrings[0];
      return this.computeMetersOfDevelopment(minChainring, this.currentBike.cassetteMax, this.currentBike.rimSize, this.currentBike.tireSize);
    },
    maxValue() {
      let maxChainring = this.currentBike.chainrings[this.currentBike.chainrings.length - 1];
      return this.computeMetersOfDevelopment(maxChainring, this.currentBike.cassetteMin, this.currentBike.rimSize, this.currentBike.tireSize);
    }
  }
}
</script>

<style scoped>

</style>
