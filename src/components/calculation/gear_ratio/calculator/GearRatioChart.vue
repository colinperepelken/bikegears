<template>
  <BaseScatterChart label-x="Gear ratio" :compute-function="this.computeGearRatio"></BaseScatterChart>
</template>

<script>
import BaseScatterChart from "@/components/calculation/BaseScatterChart";
import ComputeGearRatio from "@/components/calculation/gear_ratio/mixins/ComputeGearRatio";

export default {
  name: "GearInchChart",
  components: {BaseScatterChart},
  mixins: [ComputeGearRatio]
}
</script>

<style scoped>

</style>
