<template>
  <div>
    <Message :color="currentBike.color" :message-type="''">
      <template slot="header">
        <span class="icon">
          <i class="fas fa-info-circle"></i>
        </span>
        <span>Insights ({{currentBike.name}})</span>
      </template>

      <slot>
        <p class="mb-2">
          Your minimum {{computationName}} is <b>{{minValue}}</b>.
          Your highest {{computationName}} is <b>{{maxValue}}</b>.
          Your gear range is <b>{{getGearRange(minValue, maxValue)}}</b>%
        </p>

        <p><i>To learn more, visit the <router-link to="/learn">Learn</router-link> section.</i></p>
      </slot>
    </Message>
  </div>
</template>

<script>
import CalculationInsights from "@/components/calculation/mixins/base/CalculationInsights";
import ComputeGearRatio from "@/components/calculation/gear_ratio/mixins/ComputeGearRatio";
import CalculationHelpers from "@/components/calculation/mixins/CalculationHelpers";
import {mapGetters} from "vuex";

export default {
  name: "BaseInsights",
  mixins: [CalculationInsights, ComputeGearRatio, CalculationHelpers],
  props: ['computeFunction', 'computationName'],
  computed: {
    ...mapGetters(['currentBike']),
    minValue() {
      let minChainring = this.currentBike.chainrings[0];
      return this.computeFunction(minChainring, this.currentBike.cassetteMax, this.currentBike.rimSize, this.currentBike.tireSize).toFixed(2);
    },
    maxValue() {
      let maxChainring = this.currentBike.chainrings[this.currentBike.chainrings.length - 1];
      return this.computeFunction(maxChainring, this.currentBike.cassetteMin, this.currentBike.rimSize, this.currentBike.tireSize).toFixed(2);
    },
  },
}
</script>

<style scoped lang="scss">

</style>
