<template>
  <div class="insights">
    <Message :color="currentBike.color" :message-type="''">
      <template slot="header">
        <span class="icon">
          <i class="fas fa-info-circle"></i>
        </span>
        <span>Insights (Bike {{this.activeBikeIndex+1}})</span>
      </template>

      <p class="mb-2">
        Your minimum gear ratio is <b>{{minRatio}}</b>.
        Your highest gear ratio is <b>{{maxRatio}}</b>.
        Your gear range is <b>{{gearRange}}</b>%
      </p>

      <p><i>To learn more about gear ratios, visit the <router-link to="/learn">Learn</router-link> section of this site.</i></p>
    </Message>
  </div>
</template>

<script>
import CalculationInsights from "@/components/calculation/base/CalculationInsights";

export default {
  name: "GearRatioInsights",
  mixins: [CalculationInsights],
  computed: {
    minRatio() {
      // To find the smallest ratio, we divide the smallest chainring by the max cassette cog
      let smallestChainring = this.currentBike.chainrings[0];

      return (smallestChainring / this.currentBike.cassetteMax).toFixed(2);
    },
    maxRatio() {
      // To find the largest ratio, we divide the largest chainring by the min cassette cog
      let largestChainring = this.currentBike.chainrings[this.currentBike.chainrings.length - 1];

      return (largestChainring / this.currentBike.cassetteMin).toFixed(2);
    },
    gearRange() {
      return Math.round((this.maxRatio / this.minRatio) * 100);
    },
  },
  methods: {
    computeGearRatio(chainring, cog) {
      return (chainring / cog).toFixed(2);
    }
  }
}
</script>

<style scoped lang="scss">
.insights {
  margin-top: 1rem;
}
</style>
