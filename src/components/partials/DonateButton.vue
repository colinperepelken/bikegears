<template>
  <a class="button is-info is-small" :href="donateUrl" target="_blank">
    <span class="icon mr-2">
      <i class="fas fa-coffee"></i>
    </span>
    <span>Buy me a coffee</span>
  </a>
</template>

<script>
import {DONATE_URL} from "@/constants";

export default {
  name: "DonateButton",
  data() {
    return {
      donateUrl: DONATE_URL
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-image: linear-gradient(59deg, rgb(5, 102, 141), rgb(10, 61, 106));
  border: none;
  border-radius: 6px;
  font-size: .75rem;
}
</style>
