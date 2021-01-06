<template>
  <div>
    <transition name="fade">
      <div v-if="bikes.length > 1" class="has-text-left" id="bike-buttons">
        <button @click="changeBike(index)" :style="getBikeButtonStyle(index)" :class="getBikeButtonClass(index)"
                :key="index" v-for="(bike, index) in bikes">
          <span>Bike {{ index + 1 }}</span>
          <span @click.stop="removeBike(index)" class="icon is-small remove-bike-btn"><i class="fas fa-times"
                                                                                         aria-hidden="true"></i></span>
        </button>
      </div>
    </transition>


    <div class="container has-text-left">
      <div class="box">
        <h2 class="title is-4">Bike Settings</h2>

        <component :is="calculationType.form" v-for="(bike, index) in bikes" :bike="bike"
                   :active="index === activeBikeIndex" :key="index" @bikeChanged="updateBike"></component>

        <div class="container has-text-centered">
          <button @click="calculate" class="button is-primary is-medium is-rounded">
          <span class="icon is-medium">
            <i class="fas fa-bicycle"></i>
          </span>
            <span>Calculate</span>
          </button>
          <button :disabled="this.bikes.length >= this.maxBikes" @click="addBike"
                  class="button is-info is-medium is-rounded ml-5">
          <span class="icon is-medium">
            <i class="fas fa-plus"></i>
          </span>
            <span>Compare</span>
          </button>
        </div>

      </div>
    </div>
  </div>
  <!--    <transition name="fade">-->
  <!--      <div class="tabs is-centered is-toggle is-fullwidth" v-if="bikes.length > 1">-->
  <!--        <ul>-->
  <!--          <li v-for="(bike, index) in bikes" :key="index" :class="{'is-active': index === activeBikeIndex}">-->
  <!--            <a @click="changeBike(index)" :style="getBikeButtonStyle(index)">-->
  <!--              <span>Bike #{{index + 1}}</span>-->
  <!--              <span @click.stop="removeBike(index)" class="icon is-small remove-bike-btn"><i class="fas fa-times" aria-hidden="true"></i></span>-->
  <!--            </a>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </div>-->
  <!--    </transition>-->


</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
  name: "BikeParameters",
  computed: {
    ...mapState(['activeBikeIndex', 'calculationType', 'availableBikeColors', 'bikes', 'bikesChanged']),
  },
  data() {
    return {
      maxBikes: 5
    }
  },
  methods: {
    ...mapMutations(['removeBike', 'addBike', 'updateBike', 'changeBike', 'setBikeColor']),
    calculate() {
      this.$emit('calculate', {
        bikes: this.bikes
      });
    },
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
  },
  mounted() {

    // Ensure the initial bike colour is set when this is mounted for the first time
    if (this.bikes[0].color === undefined) {
      this.setBikeColor(0);
    }

    this.calculate();
  },
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 1rem;
}

.remove-bike-btn {
  position: absolute;
  right: .8rem;
}

#bike-buttons {
  position: fixed;
  left: 0;
  width: 15rem;
  z-index: 2;
  border: none;
  box-shadow: none;
  background: transparent;


  .button {
    left: 0;
    width: 11rem;
    border-radius: 0 5px 5px 0;
    transition: opacity .5s ease, width .2s ease;

    &:not(:first-child) {
      margin-top: .3rem;
    }

    &.is-active {
      border: none;
      width: 12rem;
    }

    & > span:not(.icon) {
      padding-right: 1.2rem;
    }

    & > span.icon {
      font-size: 1rem;
    }

  }
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
