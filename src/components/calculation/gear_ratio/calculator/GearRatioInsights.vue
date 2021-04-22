<template>
  <BaseInsights :compute-function="this.computeGearRatio" computation-name="gear ratio"></BaseInsights>
</template>

<script>
import ComputeGearRatio from "@/components/calculation/gear_ratio/mixins/ComputeGearRatio";
import BaseInsights from "@/components/calculation/BaseInsights";

export default {
  name: "GearRatioInsights",
  components: {BaseInsights},
  mixins: [ComputeGearRatio]
}
</script>

<style scoped lang="scss">

</style>
