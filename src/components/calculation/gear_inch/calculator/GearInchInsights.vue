<template>
  <BaseInsights :compute-function="this.computeGearInches" computation-name="gear inches"></BaseInsights>
</template>

<script>
import ComputeGearInches from "@/components/calculation/gear_inch/mixins/ComputeGearInches";
import BaseInsights from "@/components/calculation/BaseInsights";

export default {
  name: "GearInchInsights",
  components: {BaseInsights},
  mixins: [ComputeGearInches],
}
</script>

<style scoped>

</style>
