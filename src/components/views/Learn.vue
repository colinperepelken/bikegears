<template>
  <div class="container">
    <div class="box">
      <component :is="calculationType.learn"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "Learn",
  props: ['calculationType']
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 1rem;
}
</style>
