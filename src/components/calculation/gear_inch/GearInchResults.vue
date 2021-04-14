<template>
  <div class="columns is-centered">
    <div class="column is-half-desktop mt-3">
      <Message>
        <template slot="header">
          <span class="icon">
            <i class="fas fa-tools"></i>
          </span>
          <span>Under construction</span>
        </template>
        <p>Gear inches calculation is in development... Stay tuned!</p>
      </Message>
    </div>
  </div>
</template>

<script>

import Message from "@/components/Message";

export default {
  name: "GearInchResults",
  components: {Message},
}
</script>

<style scoped>

</style>
