<template>
  <BaseScatterChart label-x="Gear inches" :compute-function="this.computeGearInches"></BaseScatterChart>
</template>

<script>
import BaseScatterChart from "@/components/calculation/BaseScatterChart";
import ComputeGearInches from "@/components/calculation/gear_inch/mixins/ComputeGearInches";

export default {
  name: "GearInchChart",
  components: {BaseScatterChart},
  mixins: [ComputeGearInches]
}
</script>

<style scoped>

</style>
