<template>
  <div class="container has-text-left">
    <div class="box">
      <h2 class="title is-4">Results</h2>

      <GearRatioChart :bikeParameters="bikeParameters"></GearRatioChart>
    </div>
    <GearRatioTable :bikes="bikeParameters.bikes"></GearRatioTable>
  </div>
</template>

<script>
import GearRatioChart from "@/components/chart/GearRatioChart";
import GearRatioTable from "@/components/table/GearRatioTable";

export default {
  name: "Results",
  components: {GearRatioTable, GearRatioChart},
  props: ['bikeParameters']
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 1rem;
}
</style>
