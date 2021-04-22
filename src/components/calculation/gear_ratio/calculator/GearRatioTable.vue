<template>
  <BaseTableData :compute-function="this.computeGearRatio"></BaseTableData>
</template>

<script>
import ComputeGearRatio from "@/components/calculation/gear_ratio/mixins/ComputeGearRatio";
import BaseTableData from "@/components/calculation/BaseTableData";

export default {
  name: "GearRatioTable",
  components: {BaseTableData},
  mixins: [ComputeGearRatio],
}
</script>

<style scoped lang="scss">

</style>
