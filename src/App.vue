<template>
  <div id="app">
    <Hero></Hero>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>

import Hero from "@/components/section/Hero";
import Footer from "@/components/section/Footer";

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

/* Transition for router-view slide-fade */
/* See: https://vuejs.org/v2/guide/transitions.html */
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>
