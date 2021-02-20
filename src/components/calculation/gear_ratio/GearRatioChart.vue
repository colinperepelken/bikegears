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
import {hex2rgba} from "@/helpers";
import _ from 'lodash';
import {mapState} from "vuex";

export default {
  name: "GearRatioChart",
  components: {ScatterChart},
  computed: {
    ...mapState(['bikes', 'activeBikeIndex']),
    loaded() {
      return ! _.isEmpty(this.bikes);
    },
    chartdata() {
      if (this.loaded) {
        return {
          datasets: this.bikes.map((bike, index) => {
            return bike.chainrings.map(chainring => {
              return {
                label: chainring + ' tooth chainring',
                borderColor: hex2rgba(bike.color, .8),
                pointBackgroundColor: hex2rgba(bike.color, .8),
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
