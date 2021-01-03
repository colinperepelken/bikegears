<template>
  <div v-if="active">
    <h1>This is the gear inches form</h1>
  </div>
</template>

<script>
import CalculationForm from "@/components/calculation/base/CalculationForm";

export default {
  name: "GearInchForm",
  mixins: [CalculationForm]
}
</script>

<style scoped>

</style>
