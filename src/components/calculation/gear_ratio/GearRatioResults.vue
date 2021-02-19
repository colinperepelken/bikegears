<template>
  <div class="container has-text-left">
    <div class="box">
      <h2 class="title is-4">Results</h2>

      <GearRatioChart></GearRatioChart>
      <GearRatioInsights></GearRatioInsights>
    </div>
    <GearRatioTable></GearRatioTable>
  </div>
</template>

<script>
import GearRatioChart from "@/components/calculation/gear_ratio/GearRatioChart";
import GearRatioTable from "@/components/calculation/gear_ratio/GearRatioTable";
import GearRatioInsights from "@/components/calculation/gear_ratio/GearRatioInsights";

export default {
  name: "GearRatioResults",
  components: {GearRatioInsights, GearRatioTable, GearRatioChart},
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 1rem;
}
</style>
