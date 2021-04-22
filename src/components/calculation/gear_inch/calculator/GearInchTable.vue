<template>
  <BaseTableData :compute-function="this.computeGearInches"></BaseTableData>
</template>

<script>
import BaseTableData from "@/components/calculation/BaseTableData";
import ComputeGearInches from "@/components/calculation/gear_inch/mixins/ComputeGearInches";
export default {
  name: "GearInchTable",
  components: {BaseTableData},
  mixins: [ComputeGearInches]
}
</script>

<style scoped>

</style>
