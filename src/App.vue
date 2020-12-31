<template>
  <div id="app">
    <Hero></Hero>
    <BikeParameters @calculate="calculate"></BikeParameters>
    <Results ref="results" :bikeParameters="bikeParameters"></Results>
    <Footer></Footer>
  </div>
</template>

<script>

import Hero from "@/components/section/Hero";
import BikeParameters from "@/components/section/BikeParameters";
import Results from "@/components/section/Results";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {Footer, Results, BikeParameters, Hero },
  data() {
    return {
      bikeParameters: {bikes: []}
    }
  },
  methods: {
    calculate(data) {
      this.bikeParameters = data;
      this.$refs.results.$el.scrollIntoView();
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
