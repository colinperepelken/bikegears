<template>
  <div>
    <BikeParameters @calculate="calculate"></BikeParameters>
    <component :is="calculationType.results" :bikeParameters="bikeParameters"></component>
  </div>
</template>

<script>
import BikeParameters from "@/components/section/BikeParameters";
import {mapState} from "vuex";

export default {
  name: "Calculator",
  components: {BikeParameters},
  computed: {
      ...mapState(['calculationType'])
  },
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
