<template>
  <BaseScatterChart :label-x="'Speed (' + this.currentBike.speedUnits +')'" :compute-function="this.computeSpeed"></BaseScatterChart>
</template>

<script>
import BaseScatterChart from "@/components/calculation/BaseScatterChart";
import ComputeSpeed from "@/components/calculation/speed/mixins/ComputeSpeed";
import {mapGetters} from "vuex";

export default {
  name: "GearInchChart",
  components: {BaseScatterChart},
  mixins: [ComputeSpeed],
  computed: mapGetters(['currentBike'])
}
</script>

<style scoped>

</style>
