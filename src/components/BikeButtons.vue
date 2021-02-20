<template>
  <transition name="fade">
    <div class="tabs is-centered is-boxed mt-2" id="bike-buttons">
      <ul>
        <li :class="{'is-active': index === activeBikeIndex}" :key="index" v-for="(bike, index) in bikes">
          <a @click="changeBike(index)">
            <span class="icon-text">
              <span class="icon mr-2" :style="getBikeButtonStyle(index)"><i class="fas fa-circle"></i></span>
              <span>{{bike.name}}</span>
              <span v-if="bikes.length > 1" @click.stop="removeBike(index)" class="icon remove-bike-btn"><i class="fas fa-times" aria-hidden="true"></i></span>
          </span>
          </a>
        </li>
        <li v-if="bikes.length < maxBikes">
          <a @click="addBike">
            <span class="icon-text">
              <span class="icon">
                <i class="fas fa-plus"></i>
              </span>
            </span>
          </a>
        </li>
      </ul>
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
  data() {
    return {
      maxBikes: 5
    }
  },
  methods: {
    ...mapMutations(['removeBike', 'addBike', 'updateBike', 'changeBike', 'setBikeColor']),
    getBikeButtonStyle(index) {
      return {
        color: this.bikes[index].color,
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/utilities/all';

#bike-buttons {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: sticky;
  top: 0;
  padding-top: .4rem;
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
