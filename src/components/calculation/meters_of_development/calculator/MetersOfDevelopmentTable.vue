<template>
  <BaseTableData :compute-function="this.computeMetersOfDevelopment"></BaseTableData>
</template>

<script>
import BaseTableData from "@/components/calculation/BaseTableData";
import ComputeMetersOfDevelopment
  from "@/components/calculation/meters_of_development/mixins/ComputeMetersOfDevelopment";
export default {
  name: "MetersOfDevelopmentTable",
  components: {BaseTableData},
  mixins: [ComputeMetersOfDevelopment]
}
</script>

<style scoped>

</style>
