<template>
  <div class="container has-text-left">
    <div class="box">
      <h2 class="title is-4">Bike Settings</h2>
      <div class="columns is-centered" :key="activeBikeIndex" @change="updateBike(currentBike)">

        <div class="column is-one-third-desktop" v-if="isFieldEnabled(bikeFields.FIELD_CHAINRINGS)">
          <div class="field">
            <label class="label">Chainrings</label>
            <div class="control chainring-control" v-for="(chainring, index) in chainrings" :key="index">
              <div class="select">
                <select @change.stop="updateChainring" v-model="chainring.value">
                  <option v-for="(option, index) in chainringOptions" :key="index" :value="option">{{ option }} tooth
                  </option>
                </select>
              </div>
              <a v-if="currentBike.chainrings.length > 1" class="remove-chainring-btn has-text-danger-dark" @click="removeChainring">
                <span class="icon is-small">
                <i class="fas fa-times"></i>
              </span>
              </a>

            </div>
            <button @click="addChainring" :disabled="currentBike.chainrings.length >= maxNumChainrings"
                    class="button is-small is-info" id="add-chainring">
              <span class="icon is-small">
                <i class="fas fa-plus"></i>
              </span>
              <span>Add Chainring</span>
            </button>
          </div>
        </div>

        <div class="column is-one-third-desktop" v-if="isFieldEnabled(bikeFields.FIELD_CASSETTE)">
          <!--          <img src="../../assets/cassette.png">-->
          <div class="field">
            <label class="label">Min. Cassette Cog Tooth Count</label>
            <div class="control">
              <div class="select">
                <select v-model="currentBike.cassetteMin">
                  <option v-for="(cog, index) in cassetteOptions" :key="index" :value="cog">{{ cog }} tooth</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Max. Cassette Cog Tooth Count</label>
            <div class="control">
              <div class="select">
                <select v-model="currentBike.cassetteMax">
                  <option v-for="(cog, index) in cassetteOptions" :key="index" :value="cog">{{ cog }} tooth</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex';
import _ from "lodash";
import {BIKE_FIELDS} from "@/constants";

export default {
  name: "BikeParameters",
  data() {
    return {
      maxNumChainrings: 3,
      bikeFields: {}
    }
  },
  computed: {
    ...mapState(['activeBikeIndex', 'calculationType', 'availableBikeColors', 'bikes']),
    ...mapGetters(['currentBike']),
    cassetteOptions() {
      return _.range(5, 60, 1);
    },
    chainringOptions() {
      return _.range(5, 60, 1)
    },
    chainrings() {
      return this.currentBike.chainrings.map(chainring => {
        return {value: chainring};
      });
    }
  },
  methods: {
    ...mapMutations(['updateBike', 'setBikeColor']),
    addChainring() {
      this.currentBike.chainrings.push(36);
      this.updateBike(this.currentBike);
    },
    removeChainring(index) {
      this.currentBike.chainrings.splice(index, 1);
      this.updateBike(this.currentBike);
    },
    updateChainring() {
      this.currentBike.chainrings = this.chainrings.map(chainring => chainring.value);
      this.updateBike(this.currentBike);
    },
    isFieldEnabled(fieldName) {
      return this.calculationType.fields.includes(fieldName);
    }
  },
  beforeMount() {
    this.bikeFields = BIKE_FIELDS;
  }
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/utilities/all';

.container {
  margin-top: 1rem;
}

#add-chainring {
  margin-top: .3rem;
}

.remove-chainring-btn {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  margin-left: .5rem;
}

.chainring-control.control {
  margin-bottom: .8rem;
}

.column {
  img {
    height: 3rem;
  }
}
</style>
