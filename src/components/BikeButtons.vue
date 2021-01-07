<template>
  <aside class="menu">
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
        color: this.bikes[index].color,
        // opacity: (index === this.activeBikeIndex) ? 1 : .5,
      }
    },
  }
}
</script>

<style scoped lang="scss">
#bike-buttons {
  width: 15rem;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 1rem;
  left: 1rem;
  display: block;
  margin-top: 1rem;
  z-index: 2;
  border-right: 1px solid #ededed;
  padding-right: 1rem;

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
</style>
