<template>
    <div>
      <BikeParameters @calculate="calculate"></BikeParameters>
      <transition name="fade">
        <component :is="calculationType.results" :bikeParameters="bikeParameters"></component>
      </transition>
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

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
