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

<style scoped>

</style>
