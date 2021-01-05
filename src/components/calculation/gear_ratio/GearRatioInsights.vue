<template>
  <div class="insights">
    <Message :color="currentBike.color" :message-type="''">
      <template slot="header">
        <span class="icon">
          <i class="fas fa-info-circle"></i>
        </span>
        <span>Insights (Bike #{{this.activeBikeIndex+1}})</span>
      </template>


      <p class="mb-2" v-html="message"></p>

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
      let smallestChainring = this.currentBike.chainrings[0].value;

      return (smallestChainring / this.currentBike.cassetteMax).toFixed(2);
    },
    maxRatio() {
      // To find the largest ratio, we divide the largest chainring by the min cassette cog
      let largestChainring = this.currentBike.chainrings[this.currentBike.chainrings.length - 1].value;

      return (largestChainring / this.currentBike.cassetteMin).toFixed(2);
    },
    message() {

      let message = "";

      if (this.minRatio < 1) {
        message += `Your minimum gear ratio is <b>${this.minRatio}</b> which will enable you to climb very steep hills. `;
      } else {
        message += `Your minimum gear ratio is <b>${this.minRatio}</b>. `;
      }

      message += `Your highest (hardest) gear ratio is <b>${this.maxRatio}</b>. `

      return message;
    }
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
