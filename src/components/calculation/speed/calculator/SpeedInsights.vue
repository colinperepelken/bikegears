<template>
  <BaseInsights :compute-function="computeSpeed">
    <p class="mb-2">
      While pedalling at a cadence of 90rpm, you can travel as slow as <b>{{minValue}}</b> {{currentBike.speedUnits}}.
      At the same cadence, you can go as fast as <b>{{maxValue}}</b> {{currentBike.speedUnits}} in your highest gear.
      Your gear range is <b>{{getGearRange(minValue, maxValue)}}</b>%.
    </p>

    <p><i>To learn more about calculating speed, visit the <router-link to="/learn">Learn</router-link> section.</i></p>
  </BaseInsights>
</template>

<script>
import BaseInsights from "@/components/calculation/BaseInsights";
import {mapGetters} from "vuex";
import ComputeSpeed from "@/components/calculation/speed/mixins/ComputeSpeed";

export default {
  name: "SpeedInsights",
  components: {BaseInsights},
  mixins: [ComputeSpeed],
  computed: {
    ...mapGetters(['currentBike']),
    minValue() {
      let minChainring = this.currentBike.chainrings[0];
      return this.computeSpeed(minChainring, this.currentBike.cassetteMax, this.currentBike.rimSize, this.currentBike.tireSize, this.currentBike.speedUnits).toFixed(2);
    },
    maxValue() {
      let maxChainring = this.currentBike.chainrings[this.currentBike.chainrings.length - 1];
      return this.computeSpeed(maxChainring, this.currentBike.cassetteMin, this.currentBike.rimSize, this.currentBike.tireSize, this.currentBike.speedUnits).toFixed(2);
    }
  }
}
</script>

<style scoped>

</style>
