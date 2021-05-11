<template>
  <div class="box">
    <h2 class="title is-4">Table Data <span v-if="bikes.length > 1" class="subtitle">(Scroll right to see all bikes <span class="icon"><i class="fas fa-arrow-right"></i></span>)</span></h2>
    <p>Lighter shades are easier (lower) gears, and darker shades are harder (higher) gears.</p>
    <div :class="{columns: true, 'is-centered': bikes.length === 1, 'is-mobile': true}">
      <div class="column is-full-mobile is-half-tablet" :style="{'border-color': bike.color}" v-for="(bike, index) in bikes" :key="index">
        <div class="table-container">
          <h3 class="title is-5" :style="{color: bike.color}">{{bike.name}}</h3>
          <table class="table is-narrow is-striped is-hoverable has-text-centered">
            <thead>
            <tr>
              <th><span class="icon"><i class="fas fa-arrow-circle-down"></i></span> Cassette cog</th>
              <th v-for="(chainring, index) in bike.chainrings" :key="index">{{chainring}} tooth chainring</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(cog, index) in cassetteCogs(bike.cassetteMin, bike.cassetteMax)" :key="index">
              <th>{{cog}}</th>
              <td class="table-value" v-for="(chainring, index) in bike.chainrings" :key="index">
                <span :style="getCellStyle(computeGearRatio(chainring, cog), bike.color)">
                   {{computeFunction(chainring, cog, bike.rimSize, bike.tireSize, bike.speedUnits).toFixed(2)}}
                </span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import _ from 'lodash';
import {hex2rgba} from "@/helpers";
import ComputeGearRatio from "@/components/calculation/gear_ratio/mixins/ComputeGearRatio";

export default {
  name: "BaseTableData",
  computed: {
    ...mapState(['bikes']),
  },
  props: ['computeFunction'],
  mixins: [ComputeGearRatio],
  methods: {
    cassetteCogs(cassetteMin, cassetteMax) {
      return _.range(cassetteMin, cassetteMax + 1, 1);
    },
    rgb(r, g, b) {
      return "rgb("+r+","+g+","+b+")";
    },
    getContrastYIQ(r, g, b){
      let yiq = ((r*299)+(g*587)+(b*114))/1000;
      return (yiq >= 128) ? 'black' : 'white';
    },
    getCellStyle(value, color) {
      color = hex2rgba(color, 1, true);

      let r = color.r / value;
      let g = color.g / value;
      let b = color.b /value;

      let background = this.rgb(r, g, b);

      return {
        'background-color': background,
        'color': this.getContrastYIQ(r, g, b)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  .subtitle {
    display: inline-flex;
    font-family: 'Montserrat', serif;
    font-size: 1rem;

    & > .icon {
      margin-left: .2rem;
    }
  }
}

[data-theme="light"] {
  table thead > tr > th:first-child {
    background-color: #ededed;
  }
}

table {
  width: 100%;

  thead {
    th {
      width: 7rem;
    }
  }
}

.table-container {
  position: relative;
  overflow-y: auto;
}

.table-value {

  span {
    padding: 5px;
    border-radius: 5px;
    min-width: 45px;
    display: inline-block;

    &:hover {
      opacity: .9;
    }
  }
}

.columns {
  margin-top: 1rem;
  overflow-x: auto;

  .column {
    margin-left: 1rem;
    margin-right: 1rem;
    border: 2px solid black;
    border-radius: 5px;
  }
}

</style>
