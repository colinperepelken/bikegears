<template>
  <section class="hero is-info is-medium is-bold">

    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a href="/" class="navbar-item">
              <h1 class="title is-4">Bike Gears</h1>
            </a>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <router-link to="/" :class="{'navbar-item': true, 'is-active': isActivePath('/')}">Calculator
              </router-link>
              <router-link to="/learn" :class="{'navbar-item': true, 'is-active': isActivePath('/learn')}">Learn
              </router-link>
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
        <div class="select is-large is-rounded is-info">
          <select v-model="currentType" @change="calculationChanged">
            <option :disabled="option.disabled" :key="option.value" v-for="option in calculationOptions"
                    :value="option.value">{{ option.text }}
            </option>
          </select>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import {CALCULATION_TYPES} from "@/constants";
import {mapMutations} from 'vuex';

export default {
  name: "Hero",
  computed: {
    calculationOptions() {
      return CALCULATION_TYPES.map(type => {
        return {
          value: type.id,
          text: type.name,
          disabled: !type.enabled
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
    ...mapMutations(['setCalculationType']),
    calculationChanged() {
      this.setCalculationType(CALCULATION_TYPES.filter(type => type.id === this.currentType)[0]);
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

section.hero.is-info {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0.75)),
  url('../../assets/hero.jpg');
  background-size: cover;
  background-position-y: bottom;

  .navbar-brand {
    .navbar-item {
      background-color: transparent;
    }
  }

  .navbar-menu {
    a.navbar-item {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      transition: background-color .3s ease;

      &.is-active {
        background-color: rgba(20, 20, 20, .7);
      }
    }

    a.navbar-item:not(.is-active) {
      background-color: transparent;
    }
  }
}
</style>
