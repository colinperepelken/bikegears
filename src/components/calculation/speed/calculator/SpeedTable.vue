<template>
  <BaseTableData :compute-function="this.computeSpeed"></BaseTableData>
</template>

<script>
import BaseTableData from "@/components/calculation/BaseTableData";
import ComputeSpeed from "@/components/calculation/speed/mixins/ComputeSpeed";
export default {
  name: "SpeedTable",
  components: {BaseTableData},
  mixins: [ComputeSpeed]
}
</script>

<style scoped>

</style>
