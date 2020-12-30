<template>
  <section class="hero is-info is-medium is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-item">
              <h1 class="title is-4">Bike Gearing Calculator</h1>
            </span>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="select is-large is-rounded is-primary">
          <select>
            <option selected>Gear ratios</option>
            <option disabled>More coming soon...</option>
          </select>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
name: "Hero"
}
</script>

<style scoped lang="scss">
.title {
  text-transform: uppercase;
}
</style>
