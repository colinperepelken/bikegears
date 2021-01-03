<template>
  <div id="app">
    <Hero @calculationChanged="calculationChanged"></Hero>
    <router-view :calculationType="calculationType"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Hero from "@/components/section/Hero";
import Footer from "@/components/Footer";
import {CALCULATION_TYPES} from "@/constants";

export default {
  name: "App",
  components: {Footer, Hero },
  data() {
    return {
      calculationType: CALCULATION_TYPES[0]
    }
  },
  methods: {
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
