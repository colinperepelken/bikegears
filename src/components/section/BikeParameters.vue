<template>
  <div class="container has-text-left">
    <div class="box">
      <h2 class="title is-4">Bike Settings</h2>

      <div class="tabs is-centered is-toggle is-fullwidth" v-if="bikes.length > 1">
        <ul>
          <li v-for="(bike, index) in bikes" :key="index" :class="{'is-active': index === activeIndex}">
            <a @click="changeBike(index)" :style="getTabStyle(index)">
              <span>Bike #{{index + 1}}</span>
              <span @click.stop="removeBike(index)" class="icon is-small remove-bike-btn"><i class="fas fa-times" aria-hidden="true"></i></span>
            </a>
          </li>
        </ul>
      </div>

      <GearRatioForm v-for="(bike, index) in bikes" :bike="bike" :active="index === activeIndex" :key="index" @bikeChanged="updateBike"></GearRatioForm>

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
import GearRatioForm from "@/components/form/GearRatioForm";
import {BIKE_COLORS} from "@/constants";

export default {
  name: "BikeParameters",
  components: {GearRatioForm},
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
      activeIndex: 0,
      availableBikeColors: BIKE_COLORS,
      maxBikes: 5
    }
  },
  methods: {
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
    updateBike(payload) {
      this.bikes[this.activeIndex] = {...this.bikes[this.activeIndex], ...payload};
    },
    addBike() {
      this.bikes.push({
        ...this.bikes.slice(-1)[0]
      });
      this.activeIndex = this.bikes.length - 1;
      this.bikes[this.activeIndex].color = this.availableBikeColors.pop();
    },
    removeBike(index) {
      if (this.bikes[index - 1] !== undefined) {
        this.activeIndex = index - 1;
      } else {
        this.activeIndex = 0;
      }
      this.availableBikeColors.push(this.bikes[index].color);
      this.bikes.splice(index, 1);
    },
    changeBike(index) {
      this.activeIndex = index;
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
