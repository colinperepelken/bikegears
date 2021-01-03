<template>
  <div>
    <BikeParameters @calculate="calculate" :calculationType="calculationType"></BikeParameters>
    <component :is="calculationType.results" :bikeParameters="bikeParameters"></component>
  </div>
</template>

<script>
import BikeParameters from "@/components/section/BikeParameters";

export default {
  name: "Calculator",
  components: {BikeParameters},
  props: ['calculationType'],
  methods: {
    calculate(data) {
      this.bikeParameters = data;
    },
  },
  data() {
    return {
      bikeParameters: {bikes: []},
    }
  }
}
</script>

<style scoped>

</style>
