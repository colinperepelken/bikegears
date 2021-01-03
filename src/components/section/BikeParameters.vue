<template>
  <div class="container has-text-left">
    <div class="box">
      <h2 class="title is-4">Bike Settings</h2>

      <div class="tabs is-centered is-toggle is-fullwidth" v-if="bikes.length > 1">
        <ul>
          <li v-for="(bike, index) in bikes" :key="index" :class="{'is-active': index === activeBikeIndex}">
            <a @click="changeBike(index)" :style="getTabStyle(index)">
              <span>Bike #{{index + 1}}</span>
              <span @click.stop="removeBike(index)" class="icon is-small remove-bike-btn"><i class="fas fa-times" aria-hidden="true"></i></span>
            </a>
          </li>
        </ul>
      </div>

      <component :is="calculationType.form" v-for="(bike, index) in bikes" :bike="bike" :active="index === activeBikeIndex" :key="index" @bikeChanged="updateBike"></component>

      <div class="container has-text-centered">
        <button @click="calculate" class="button is-primary is-medium is-rounded">
          <span class="icon is-medium">
            <i class="fas fa-bicycle"></i>
          </span>
          <span>Calculate</span>
        </button>
        <button :disabled="this.bikes.length >= this.maxBikes" @click="addBike" class="button is-info is-medium is-rounded ml-5">
          <span class="icon is-medium">
            <i class="fas fa-plus"></i>
          </span>
          <span>Compare</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import {BIKE_COLORS} from "@/constants";
import {mapMutations, mapState} from 'vuex';

export default {
  name: "BikeParameters",
  computed: {
    ...mapState(['activeBikeIndex', 'calculationType'])
  },
  data() {
    return {
      // Default bike settings
      bikes: [{
        chainrings: [
          {value: 32},
          {value: 44},
        ],
        cassetteMin: 11,
        cassetteMax: 42,
      }],
      availableBikeColors: BIKE_COLORS,
      maxBikes: 5
    }
  },
  methods: {
    ...mapMutations(['removeBike', 'addBike', 'updateBike', 'changeBike']),
    calculate() {
      this.$emit('calculate', {
        bikes: this.bikes.map(bike => {
          return {
            chainrings: bike.chainrings.map(chainring => chainring.value).sort(),
            cassetteCogs: _.range(bike.cassetteMin, bike.cassetteMax, 1),
            color: bike.color
          };
        })
      });
    },
    getTabStyle(index) {
      return {
        backgroundColor: this.bikes[index].color,
      }
    }
  },
  mounted() {
    this.bikes[0].color = this.availableBikeColors.pop();
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

.tabs {
  li.is-active a {
    opacity: 100%;
    border-color: black;
    font-weight: bold;
  }

  li a {
    opacity: 50%;
    color: white;
  }
}
</style>
