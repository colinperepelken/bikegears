<template>
  <BaseScatterChart label-x="Meters of development" :compute-function="this.computeMetersOfDevelopment"></BaseScatterChart>
</template>

<script>
import BaseScatterChart from "@/components/calculation/BaseScatterChart";
import ComputeMetersOfDevelopment
  from "@/components/calculation/meters_of_development/mixins/ComputeMetersOfDevelopment";

export default {
  name: "MetersOfDevelopmentChart",
  components: {BaseScatterChart},
  mixins: [ComputeMetersOfDevelopment]
}
</script>

<style scoped>

</style>
