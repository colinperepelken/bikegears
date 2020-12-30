<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <span class="icon">
          <a :href="githubUrl"><i class="fab fa-github"></i></a>
        </span>
        <strong>Bike Gearing Calculator</strong> by <a href="https://colin.perepelken.ca">Colin Perepelken</a> &#169;
        {{ currentYear }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  data() {
    return {
      githubUrl: "https://github.com/colinperepelken/bike-calculator"
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  margin-top: 2rem;
  padding-bottom: 4rem;

  .icon {
    margin-right: 1rem;
  }
}
</style>
