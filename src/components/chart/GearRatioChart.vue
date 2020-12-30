<template>
  <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"
      :styles="styles"
  ></line-chart>
</template>

<script>
import LineChart from "@/components/chart/base/LineChart";

export default {
  name: "GearRatioChart",
  components: {LineChart},
  props: ['bikeParameters'],
  computed: {
    loaded() {
      return this.bikeParameters !== undefined
    },
    chartdata() {
      return {
        labels: this.bikeParameters.cassetteCogs,
        datasets: this.bikeParameters.chainrings.map(chainring => {
          return {
            label: chainring + ' tooth chainring',
            borderColor: '#3298dc', // TODO this should be different for each dataset
            pointBackgroundColor: "#00d1b2",
            pointBorderColor: "#474647",
            // hoverBackgroundColor: "#8ec63f",
            data: this.bikeParameters.cassetteCogs.map(cog => this.computeGearRatio(chainring, cog)),
            fill: false
          }
        })
      };
    }
  },
  data() {
    return {
      options: {
        legend: {
          display: true
        },
        bezierCurve: false,
        responsive: true,
        maintainAspectRatio: false,
      },
      styles: {
        height: "20rem",
        position: 'relative'
      }
    }
  },
  methods: {
    computeGearRatio(chainring, cog) {
      return (chainring / cog).toFixed(2);
    }
  },
}
</script>

<style scoped>

</style>
