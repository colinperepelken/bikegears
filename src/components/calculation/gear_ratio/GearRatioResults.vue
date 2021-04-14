<template>
  <div class="container has-text-left">
    <GearRatioChart></GearRatioChart>
    <GearRatioInsights></GearRatioInsights>
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

</style>
