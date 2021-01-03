<template>
  <div id="app">
    <Hero></Hero>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Hero from "@/components/section/Hero";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {Footer, Hero },
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
