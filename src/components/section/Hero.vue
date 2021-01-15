<template>
  <section class="hero is-info is-medium is-bold">

    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a href="/" class="navbar-item">
              <h1 class="title is-4">Bike Gears</h1>
            </a>

            <!-- Burger menu only shown on touch devices -->
            <a role="button" :class="{'navbar-burger': true, 'is-active': showMobileMenu}" aria-label="menu"
               aria-expanded="false" @click="showMobileMenu = ! showMobileMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div :class="{'navbar-menu': true, 'is-active': showMobileMenu}">

            <div class="navbar-end">
              <router-link to="/" :class="{'navbar-item': true, 'is-active': isActivePath('/')}">Calculator
              </router-link>
              <router-link to="/learn" :class="{'navbar-item': true, 'is-active': isActivePath('/learn')}">Learn
              </router-link>

              <div class="navbar-item has-dropdown is-invisible-desktop" id="nav-bike-menu" v-if="bikes.length > 1">

                <a class="navbar-link">
                  Compare bikes
                </a>

                <div class="navbar-dropdown">
                  <a :key="index" v-for="(bike, index) in bikes" :class="{'navbar-item': true, 'is-active': index === activeBikeIndex}" @click="changeBike(index)">
                    <span class="icon mr-2" :style="getBikeButtonStyle(index)"><i class="fas fa-circle"></i></span>
                    <span>Bike {{ index + 1 }}</span>
                  </a>
                </div>
              </div>

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
import BikeButtonHelper from "@/mixins/BikeButtonHelper";

export default {
  name: "Hero",
  mixins: [BikeButtonHelper],
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
      showMobileMenu: false,
      currentType: CALCULATION_TYPES[0].id,
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
//@import '~bulma/sass/utilities/all';

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

    .navbar-burger {
      color: white;
    }
  }

  .navbar-menu {
    a.navbar-item.is-active {
      background-color: rgba(20, 20, 20, .7);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      transition: background-color .3s ease;
    }

    a.navbar-item:not(.is-active) {
      background-color: transparent;
    }

    &.is-active {
      position: absolute;
      width: 100%;
      text-align: left;
      background-color: rgba(20, 20, 20, .93);
      background-image: unset;
    }

    .has-dropdown > .navbar-link:first-child {
      text-transform: uppercase;
      font-weight: bold;
      font-size: .8rem;
      border-top: 1px solid grey;
    }

    #nav-bike-menu {
      margin-top: 1rem;

      .navbar-item {
        border-radius: unset;
        background-color: unset;
      }

      .navbar-item.is-active {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
}
</style>
