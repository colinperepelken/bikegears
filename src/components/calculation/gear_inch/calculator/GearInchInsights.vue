<template>
  <BaseInsights :compute-function="computeGearInches">
    <p class="mb-2">
      This bike has a lowest gear of <b>{{minValue}}</b> gear inches.
      Your highest gear is <b>{{maxValue}}</b> gear inches.
      Your gear range is <b>{{getGearRange(minValue, maxValue)}}</b>%
    </p>

    <p><i>To learn more about gear inches, visit the <router-link to="/learn">Learn</router-link> section.</i></p>
  </BaseInsights>
</template>

<script>
import ComputeGearInches from "@/components/calculation/gear_inch/mixins/ComputeGearInches";
import BaseInsights from "@/components/calculation/BaseInsights";
import {mapGetters} from "vuex";

export default {
  name: "GearInchInsights",
  components: {BaseInsights},
  mixins: [ComputeGearInches],
  computed: {
    ...mapGetters(['currentBike']),
    minValue() {
      let minChainring = this.currentBike.chainrings[0];
      return this.computeGearInches(minChainring, this.currentBike.cassetteMax, this.currentBike.rimSize, this.currentBike.tireSize);
    },
    maxValue() {
      let maxChainring = this.currentBike.chainrings[this.currentBike.chainrings.length - 1];
      return this.computeGearInches(maxChainring, this.currentBike.cassetteMin, this.currentBike.rimSize, this.currentBike.tireSize);
    }
  }
}
</script>

<style scoped>

</style>
