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
import GearRatioChart from "@/components/calculation/gear_ratio/GearRatioChart";
import GearRatioTable from "@/components/calculation/gear_ratio/GearRatioTable";
import CalculationResults from "@/components/calculation/base/CalculationResults";

export default {
  name: "GearRatioResults",
  components: {GearRatioTable, GearRatioChart},
  mixins: [CalculationResults]
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 1rem;
}
</style>
