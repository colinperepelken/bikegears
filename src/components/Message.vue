<template>
  <article :class="'message ' + messageType">
    <div v-if="this.$slots.header" class="message-header">
      <p>
        <slot name="header"></slot>
      </p>
      <button v-if="showClose" class="delete" aria-label="delete" @click="$emit('close')"></button>
    </div>
    <div class="message-body">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: "Message",
  props: {
    showClose: {
      type: Boolean,
      default: false
    },
    messageType: {
      type: String,
      default: "is-info"
    }
  }
}
</script>

<style scoped>

</style>
