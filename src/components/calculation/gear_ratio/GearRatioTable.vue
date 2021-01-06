<template>
  <div class="box">
    <h2 class="title is-4">Table Data</h2>
    <div :class="{columns: true, 'is-centered': bikes.length === 1}">
      <div class="column is-full-mobile is-half-tablet" :style="{'border-color': bike.color}" v-for="(bike, index) in bikes" :key="index">
        <div class="table-container">
          <h3 class="title is-5" :style="{color: bike.color}">Bike {{index+1}}</h3>
          <table class="table is-narrow is-striped is-hoverable is-bordered">
            <thead>
            <tr>
              <th><span class="icon"><i class="fas fa-arrow-circle-down"></i></span> Cassette cog</th>
              <th v-for="(chainring, index) in bike.chainrings" :key="index">{{chainring}} tooth chainring</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(cog, index) in bike.cassetteCogs" :key="index">
              <th>{{cog}}</th>
              <td v-for="(chainring, index) in bike.chainrings" :key="index">{{computeGearRatio(chainring, cog)}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GearRatioTable",
  props: {
    bikes: {
      type: Array,
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
table {
  width: 100%;

  thead > tr > th:first-child {
    background-color: #ededed;
  }
}

.table-container {
  position: relative;
  max-height: 70rem;
  overflow-y: auto;
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
