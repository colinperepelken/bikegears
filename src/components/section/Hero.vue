<template>
  <section class="hero is-info is-medium is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a href="/" class="navbar-item">
              <h1 class="title is-4">Bike Gearing Calculator</h1>
            </a>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <router-link to="/" :class="{'navbar-item': true, 'is-active': isActivePath('/')}">Calculator</router-link>
              <router-link to="/learn" :class="{'navbar-item': true, 'is-active': isActivePath('/learn')}">Learn</router-link>
              <span class="navbar-item">
<!--              <a class="button is-success is-inverted">-->
<!--                <span class="icon">-->
<!--                  <i class="fas fa-coffee"></i>-->
<!--                </span>-->
<!--                <span>Donate</span>-->
<!--              </a>-->
            </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="select is-large is-rounded is-primary">
          <select v-model="currentType" @change="calculationChanged">
            <option :key="option.value" v-for="option in calculationOptions" :value="option.value">{{option.text}}</option>
            <option disabled>More coming soon...</option>
          </select>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import {CALCULATION_TYPES} from "@/constants";

export default {
  name: "Hero",
  computed: {
    calculationOptions() {
      return CALCULATION_TYPES.map(type => {
        return {
          value: type.id,
          text: type.name
        }
      });
    }
  },
  data() {
    return {
      currentType: CALCULATION_TYPES[0].id
    }
  },
  mounted() {
    this.calculationChanged();
  },
  methods: {
    calculationChanged() {
      this.$emit('calculationChanged', this.currentType);
    },
    isActivePath(path) {
      return this.$route.path === path;
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  text-transform: uppercase;
}
</style>
