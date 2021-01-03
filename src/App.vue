<template>
  <div id="app">
    <Hero></Hero>
    <BikeParameters @calculate="calculate"></BikeParameters>
    <Results ref="results" :bikeParameters="bikeParameters"></Results>
    <div class="container mt-5">
      <Message>
        <template v-slot:header>
          <p>
            <span class="icon">
              <i class="fas fa-info-circle"></i>
            </span>
            <span>
              What are gear ratios?
            </span>
          </p>
        </template>
        The <strong>gear ratio</strong> is found by dividing the number of teeth on a chainring by the number of teeth on a cassette cog.
        Visit the <a href="#">LEARN</a> section of this site which explains how to determine what chainrings and cassette you have on your bike.
      </Message>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Hero from "@/components/section/Hero";
import BikeParameters from "@/components/section/BikeParameters";
import Results from "@/components/section/Results";
import Footer from "@/components/Footer";
import Message from "@/components/Message";
export default {
  name: "App",
  components: {Message, Footer, Results, BikeParameters, Hero },
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
