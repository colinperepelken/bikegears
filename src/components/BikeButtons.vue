<template>
  <transition name="fade">
    <aside id="bike-buttons" class="menu column">
      <p class="menu-label">
        Compare Bikes
      </p>
      <ul class="menu-list">
        <li :key="index" v-for="(bike, index) in bikes">
          <a :class="{'is-active': index === activeBikeIndex}" @click="changeBike(index)">
          <span class="icon-text">
            <span class="icon mr-2" :style="getBikeButtonStyle(index)"><i class="fas fa-circle"></i></span>
            <span>Bike {{ index + 1 }}</span>
            <span @click.stop="removeBike(index)" class="icon remove-bike-btn"><i class="fas fa-times"
                                                                                  aria-hidden="true"></i></span>
          </span>
          </a>
        </li>
      </ul>
    </aside>
  </transition>

</template>

<script>
import BikeButtonHelper from "@/mixins/BikeButtonHelper";

export default {
  name: "BikeButtons",
  mixins: [BikeButtonHelper],
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/utilities/all';

#bike-buttons {
  width: 15rem;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 1rem;
  margin-top: 1rem;
  display: none;

  @include desktop {
    display: block;
  }

  .icon-text > span {
    vertical-align: middle; /* In a future version of Bulma .icon-text will be implemented and this could be removed */
  }

  .remove-bike-btn {
    float: right;
    visibility: hidden;
  }

  a.is-active {
    background-color: rgba(0, 0, 0, .7);
    transition: background-color .4s linear;

    .remove-bike-btn {
      visibility: visible;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
