<template>
  <transition name="fade">
    <div class="tabs is-centered mt-2" id="bike-buttons">
      <ul>
        <li :class="{'is-active': index === activeBikeIndex}" :key="index" v-for="(bike, index) in bikes">
          <a @click="changeBike(index)">
            <span class="icon-text">
            <span class="icon mr-2" :style="getBikeButtonStyle(index)"><i class="fas fa-circle"></i></span>
            <span>Bike {{ index + 1 }}</span>
            <span @click.stop="removeBike(index)" class="icon remove-bike-btn"><i class="fas fa-times"
                                                                                  aria-hidden="true"></i></span>
          </span>
          </a>
        </li>
      </ul>
    </div>
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
  width: 100%;

  @include desktop {
    width: 80%;
  }

  margin-left: auto;
  margin-right: auto;
  position: sticky;
  top: 0;
  z-index: 99;
  background: rgba(256, 256, 256, 1);
  font-size: 1.1rem;

  .icon-text > span {
    vertical-align: middle; /* In a future version of Bulma .icon-text will be implemented and this could be removed */
  }

  .remove-bike-btn {
    float: right;
    visibility: hidden;
  }

  li.is-active {

    .remove-bike-btn {
      visibility: visible;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
