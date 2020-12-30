<template>
  <div class="container">
    <div class="table-container" v-for="(bike, index) in bikeParameters.bikes" :key="index">
      <table class="table is-striped is-hoverable">
        <thead>
        <tr>
          <th></th>
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


</template>

<script>
export default {
  name: "GearRatioTable",
  props: ['bikeParameters'],
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
}

.table-container {
  position: relative;;
}

.container {
  margin-top: 1rem;
}
</style>
