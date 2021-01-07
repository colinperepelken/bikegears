<template>
  <transition name="fade">
    <div v-if="bikes.length > 1" class="has-text-left" id="bike-buttons">
      <button @click="changeBike(index)" :style="getBikeButtonStyle(index)" :class="getBikeButtonClass(index)"
              :key="index" v-for="(bike, index) in bikes">
        <span v-if="index === activeBikeIndex" class="icon selected-icon"><i class="fas fa-angle-right"></i></span>
        <span>Bike {{ index + 1 }}</span>
        <span @click.stop="removeBike(index)" class="icon is-small remove-bike-btn"><i class="fas fa-times"
                                                                                       aria-hidden="true"></i></span>
      </button>
    </div>
  </transition>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "BikeButtons",
  computed: {
    ...mapState(['bikes', 'activeBikeIndex'])
  },
  methods: {
    ...mapMutations(['removeBike', 'addBike', 'updateBike', 'changeBike', 'setBikeColor']),
    getBikeButtonStyle(index) {
      return {
        backgroundColor: this.bikes[index].color,
        opacity: (index === this.activeBikeIndex) ? 1 : .5,
      }
    },
    getBikeButtonClass(index) {
      return {
        button: true, 'has-text-white': true, 'is-large': true,
        'is-active': index === this.activeBikeIndex
      };
    }
  }
}
</script>

<style scoped lang="scss">
#bike-buttons {
  width: 15rem;
  z-index: 2;
  border: none;
  box-shadow: none;
  background: transparent;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 1rem;
  display: block;
  margin-top: 1rem;

  .button {
    left: 0;
    width: 11rem;
    border-radius: 0 10px 10px 0;
    transition: opacity .5s ease, width .2s ease;

    &:not(:first-child) {
      margin-top: .3rem;
    }

    &.is-active {
      border: none;
      width: 12rem;
    }

    & > .selected-icon {
      font-size: 2rem;
    }

    & > span:not(.icon) {
      padding-right: 1.2rem;
    }

    & > span.remove-bike-btn {
      font-size: .9rem;
    }

  }
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
