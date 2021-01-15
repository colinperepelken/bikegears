<template>
    <div class="columns">

      <div class="column bikes-column" v-if="bikes.length > 1">
        <BikeButtons></BikeButtons>
      </div>

      <div class="column main-column">
        <BikeParameters @calculate="calculate"></BikeParameters>
        <div class="results-container">
          <transition name="fade">
            <component :style="{opacity: bikesChanged ? 0.5 : 1, transition: 'opacity .3s linear'}" :is="calculationType.results" :bikeParameters="bikeParameters"></component>
          </transition>

          <transition name="fade">
            <Message id="bike-changed-message" v-if="bikesChanged" message-type="is-warning">
           <span class="icon mr-4">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
              Bike settings changed, click <a @click="calculate({bikes: bikes})">Calculate</a>
            </Message>
          </transition>
        </div>
      </div>
    </div>
</template>

<script>
import BikeParameters from "@/components/section/BikeParameters";
import {mapState} from "vuex";
import Message from "@/components/Message";
import _ from "lodash";
import BikeButtons from "@/components/BikeButtons";

export default {
  name: "Calculator",
  components: {BikeButtons, Message, BikeParameters},
  computed: {
      ...mapState(['calculationType', 'bikesChanged', 'bikes'])
  },
  methods: {
    calculate(data) {
      this.bikeParameters = {
        bikes: data.bikes.map(bike => {
          return {
            chainrings: bike.chainrings.map(chainring => chainring.value).sort(),
            cassetteCogs: _.range(bike.cassetteMin, bike.cassetteMax + 1, 1),
            color: bike.color
          };
        })
      };

      // Let the vuex store know that the calculate button has been pressed
      this.$store.commit('calculate');
    },
  },
  data() {
    return {
      bikeParameters: {bikes: []},
    }
  }
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/utilities/all';

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.results-container {
  position: relative;

  #bike-changed-message {
    position: absolute;
    top: 8rem;
    font-size: 1.4rem;
    left: 0;
    right: 0;
    width: 18rem;
    margin-left: auto;
    margin-right: auto;

    @include tablet {
      width: 45rem;
    }

    @include desktop {
      width: 48rem;
    }
  }
}

.bikes-column {
  max-width: fit-content;
}

</style>
