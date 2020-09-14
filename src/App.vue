<template>
  <div id="app">
    <Header></Header>
    <MainPanel></MainPanel>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPanel from "./components/MainPanel";

export default {
  name: "App",
  title: "App title",
  components: { Header, Footer, MainPanel },
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
  background: url('assets/patrick-hendry-qDBbM9Erwo4-unsplash.jpg');
  background-size: cover;
}
</style>
