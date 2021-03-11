<template>
  <div class="field">
    <input v-model="darkMode" id="dark-mode-switch" type="checkbox" name="switchRoundedDefault"
           class="switch is-rounded is-small" checked="checked">
    <label for="dark-mode-switch">
            <span v-show="darkMode" class="icon">
              <i class="fas fa-moon"></i>
            </span>
      <span v-show="! darkMode" class="icon">
              <i class="fas fa-sun"></i>
            </span>
    </label>
  </div>
</template>

<script>
import Theme from "@/mixins/Theme";

export default {
name: "DarkModeSwitch",
  mixins: [Theme]
}
</script>

<style scoped>

</style>
