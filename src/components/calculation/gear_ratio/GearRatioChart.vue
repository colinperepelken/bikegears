<template>
  <scatter-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"
      :styles="styles"
  ></scatter-chart>
</template>

<script>
import ScatterChart from "@/components/chart/ScatterChart";
import _ from 'lodash';
import {mapState} from "vuex";

export default {
  name: "GearRatioChart",
  components: {ScatterChart},
  computed: {
    ...mapState(['bikes']),
    loaded() {
      return ! _.isEmpty(this.bikes);
    },
    chartdata() {
      if (this.loaded) {
        return {
          datasets: this.bikes.map(bike => {
            return bike.chainrings.map(chainring => {
              return {
                label: chainring.value + ' tooth chainring',
                borderColor: bike.color,
                pointBackgroundColor: bike.color,
                // pointBorderColor: "#474647",
                // hoverBackgroundColor: "#8ec63f",
                data: _.range(bike.cassetteMin, bike.cassetteMax + 1, 1).map(cog => {
                  return {
                    x: this.computeGearRatio(chainring.value, cog),
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
