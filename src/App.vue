<template>
  <div id="app">
    <Hero @calculationChanged="calculationChanged"></Hero>
    <BikeParameters @calculate="calculate" :calculationType="calculationType"></BikeParameters>
    <component :is="calculationType.results" :bikeParameters="bikeParameters"></component>
    <Footer></Footer>
  </div>
</template>

<script>

import Hero from "@/components/section/Hero";
import Footer from "@/components/Footer";
import {CALCULATION_TYPES} from "@/constants";
import BikeParameters from "@/components/section/BikeParameters";

export default {
  name: "App",
  components: {BikeParameters, Footer, Hero },
  data() {
    return {
      bikeParameters: {bikes: []},
      calculationType: CALCULATION_TYPES[0]
    }
  },
  methods: {
    calculate(data) {
      this.bikeParameters = data;
    },
    calculationChanged(typeId) {
      this.calculationType = CALCULATION_TYPES.filter(type => type.id === typeId)[0];
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html, body {
  height: 100%;
  background-size: cover;
}
</style>
