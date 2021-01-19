<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Copyright &#169; {{ currentYear }} <a href="https://colin.perepelken.ca">Colin Perepelken</a>
      </p>
      <small><i>Made in Canada</i> <span class="icon has-text-danger"><i class="fab fa-canadian-maple-leaf"></i></span></small>
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
}
</script>

<style scoped lang="scss">
.footer {
  margin-top: 2rem;
  padding-bottom: 4rem;

  .icon {
    margin-right: .4rem;
  }
}
</style>
