<template>
  <div class="box calculator-section">
    <h2 class="title is-4">Results</h2>
    <scatter-chart
        v-if="loaded"
        :chartdata="chartdata"
        :options="options"
        :styles="styles"
    ></scatter-chart>
  </div>
</template>

<script>
import ScatterChart from "@/components/chart/ScatterChart";
import {hex2rgba} from "@/helpers";
import _ from 'lodash';
import {mapState} from "vuex";

export default {
  name: "GearRatioChart",
  components: {ScatterChart},
  computed: {
    ...mapState(['bikes', 'activeBikeIndex', 'darkMode']),
    loaded() {
      return !_.isEmpty(this.bikes);
    },
    chartdata() {
      if (this.loaded) {
        return {
          datasets: this.bikes.map((bike, index) => {
            return bike.chainrings.map(chainring => {
              return {
                label: chainring + ' tooth chainring',
                borderColor: hex2rgba(bike.color, 1),
                pointBackgroundColor: hex2rgba(bike.color, 1),
                data: _.range(bike.cassetteMin, bike.cassetteMax + 1, 1).map(cog => {
                  return {
                    x: this.computeGearRatio(chainring, cog),
                    y: cog
                  }
                }),
                fill: false,
                showLine: true,
                order: (index === this.activeBikeIndex) ? 0 : 1
              }
            })
          }).flat()
        };
      }

      return {};
    },
    options() {
      return {
        legend: {
          display: true,
          labels: {
            fontColor: this.darkMode ? '#cdcdcd' : '#404040'
          }
        },
        bezierCurve: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Cassette cog',
              fontColor: this.darkMode ? 'white' : 'black'
            },
            stacked: true,
            ticks: {
              min: 5,
              max: 60,
              reverse: true,
              fontColor: this.darkMode ? 'white' : 'black'
            },
            gridLines: {
              color: this.darkMode ? '#555555' : '#efefef'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Gear ratio',
              fontColor: this.darkMode ? 'white' : 'black'
            },
            ticks: {
              fontColor: this.darkMode ? 'white' : 'black'
            },
            gridLines: {
              color: this.darkMode ? '#555555' : '#efefef'
            }
          }]
        }
      }
    }
  },
  data() {
    return {
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
