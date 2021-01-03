<template>
  <div class="container">
    <div class="box">
      <component :is="calculationType.learn"></component>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Learn",
  computed: mapState(['calculationType'])
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 1rem;
}
</style>
