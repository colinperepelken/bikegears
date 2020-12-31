<template>
  <scatter-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"
      :styles="styles"
  ></scatter-chart>
</template>

<script>
import ScatterChart from "@/components/chart/base/ScatterChart";
import _ from 'lodash';

export default {
  name: "GearRatioChart",
  components: {ScatterChart},
  props: {
    bikeParameters: {
      type: Object,
    }
  },
  computed: {
    loaded() {
      return ! _.isEmpty(this.bikeParameters);
    },
    chartdata() {
      if (this.loaded) {
        return {
          datasets: this.bikeParameters.bikes.map(bike => {
            return bike.chainrings.map(chainring => {
              return {
                label: chainring + ' tooth chainring',
                borderColor: bike.color,
                pointBackgroundColor: bike.color,
                // pointBorderColor: "#474647",
                // hoverBackgroundColor: "#8ec63f",
                data: bike.cassetteCogs.map(cog => {
                  return {
                    x: this.computeGearRatio(chainring, cog),
                    y: cog
                  }
                }),
                fill: false,
                showLine: true
              }
            })
          }).flat()
        };
      }

      return {};
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
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Cassette cog'
            },
            stacked: true,
            ticks: {
              min: 5,
              max: 60,
              reverse: true
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Gear ratio'
            }
          }]
        }
      },
      styles: {
        height: "20rem",
        position: 'relative'
      }
    }
  },
  methods: {
    computeGearRatio(chainring, cog) {
      return parseFloat((chainring / cog).toFixed(2));
    }
  },
}
</script>

<style scoped>

</style>
