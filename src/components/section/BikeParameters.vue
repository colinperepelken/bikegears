<template>
  <div class="container has-text-left bike-parameters">
    <div>
      <h2 class="title is-4">Bike Settings</h2>
      <div class="columns is-centered is-variable is-5 has-text-centered mb-1" :key="activeBikeIndex"
           @change="updateBike(currentBike)">

        <div class="column box">
          <div class="field">
            <label class="label">Bike name</label>
            <div class="control">
              <input @change="validateName" v-model="currentBike.name" class="input" type="text" placeholder="Bike name"
                     id="bike-name">
            </div>
          </div>
        </div>

        <div class="column box" v-if="isFieldEnabled(bikeFields.FIELD_CHAINRINGS)">
          <div class="field">
            <label class="label">Chainrings</label>
            <div class="control chainring-control" v-for="(chainring, index) in chainrings" :key="index">
              <div class="select">
                <select @change.stop="updateChainring" v-model="chainring.value">
                  <option v-for="(option, index) in chainringOptions" :key="index" :value="option">{{ option }} tooth
                  </option>
                </select>
              </div>
              <a v-if="currentBike.chainrings.length > 1" class="remove-chainring-btn has-text-danger-dark"
                 @click="removeChainring">
                <span class="icon is-small">
                <i class="fas fa-times"></i>
              </span>
              </a>

            </div>
            <button @click="addChainring" :disabled="currentBike.chainrings.length >= maxNumChainrings"
                    class="button is-small is-default is-rounded" id="add-chainring">
              <span class="icon is-small">
                <i class="fas fa-plus"></i>
              </span>
              <span>Add</span>
            </button>
          </div>
        </div>

        <div class="column box" v-if="isFieldEnabled(bikeFields.FIELD_CASSETTE)" @change.stop="updateCassette">
          <!--          <img src="../../assets/cassette.png">-->
          <div class="field">
            <label class="label">Min. Cassette Cog</label>
            <div class="control">
              <div class="select">
                <select v-model="cassetteMin">
                  <option v-for="(cog, index) in cassetteOptions" :key="index" :value="cog">{{ cog }} tooth</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Max. Cassette Cog</label>
            <div class="control">
              <div :class="{select: true, 'is-danger': ! validateCassette()}">
                <select v-model="cassetteMax">
                  <option v-for="(cog, index) in cassetteOptions" :key="index" :value="cog">{{ cog }} tooth</option>
                </select>
              </div>
              <p v-if="! validateCassette()" class="help is-danger">Max cassette cog must be greater than or equal to the min cassette cog</p>
            </div>
          </div>
        </div>

        <div class="column box" v-if="isFieldEnabled(bikeFields.FIELD_RIM) || isFieldEnabled(bikeFields.FIELD_WHEEL)">

          <div class="field" v-if="isFieldEnabled(bikeFields.FIELD_RIM)">
            <label class="label">Rim size</label>
            <div class="control">
              <div class="select">
                <select v-model="currentBike.rimSize">
                  <option v-for="(rim, index) in rimOptions" :key="index" :value="rim.bsd">{{ rim.name }}</option>
                </select>
              </div>
            </div>
          </div>

          <div v-if="isFieldEnabled(bikeFields.FIELD_WHEEL)" @change.stop="updateTireSize">
            <label class="label">Tire size</label>
            <div class="field has-addons has-addons-centered">
              <div class="control">
                <input :class="{input: true, 'is-danger': ! validateTireSize()}" type="text" placeholder="Tire size" v-model="tireSize" id="tire-size">
                <p v-if="! validateTireSize()" class="help is-danger">Invalid tire size</p>
              </div>
              <div class="control">
                <span class="select">
                  <select v-model="tireUnits">
                    <option>mm</option>
                    <option>inches</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="column box" v-if="isFieldEnabled(bikeFields.FIELD_UNITS)">

          <div class="field">
            <label class="label">Units</label>
            <div class="control">
              <label class="radio">
                <input type="radio" :value="speedUnitsMetric" v-model="currentBike.speedUnits">
                {{speedUnitsMetric}}
              </label>
              <label class="radio">
                <input type="radio" :value="speedUnitsImperial" v-model="currentBike.speedUnits">
                {{speedUnitsImperial}}
              </label>
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
import {BIKE_FIELDS, DEFAULT_BIKE_SETTINGS, RIM_SIZES, SPEED_UNITS_IMPERIAL, SPEED_UNITS_METRIC} from "@/constants";

export default {
  name: "BikeParameters",
  data() {
    return {
      maxNumChainrings: 3,
      bikeFields: {},
      rimOptions: RIM_SIZES,
      tireUnits: 'mm',
      speedUnitsMetric: SPEED_UNITS_METRIC,
      speedUnitsImperial: SPEED_UNITS_IMPERIAL,
      tireSize: DEFAULT_BIKE_SETTINGS.tireSize,
      cassetteMin: DEFAULT_BIKE_SETTINGS.cassetteMin,
      cassetteMax: DEFAULT_BIKE_SETTINGS.cassetteMax
    }
  },
  computed: {
    ...mapState(['activeBikeIndex', 'calculationType', 'availableBikeColors', 'bikes']),
    ...mapGetters(['currentBike']),
    cassetteOptions() {
      return _.range(5, 60, 1);
    },
    chainringOptions() {
      return _.range(5, 60, 1);
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
      this.currentBike.chainrings.push(34);
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
    },
    validateName() {
      if (this.currentBike.name.length === 0) {
        this.currentBike.name = 'Bike';
      }
    },
    validateTireSize() {
      if (isNaN(this.tireSize)) {
        return false;
      }

      if (this.tireUnits === 'inches') {
        return this.tireSize >= 0.1 && this.tireSize <= 10;
      }

      return this.tireSize >= 10 && this.tireSize <= 200;
    },
    validateCassette() {
      return this.cassetteMax >= this.cassetteMin;
    },
    /**
     * We need to do this rather than just updating the bike because
     * we need to convert from inches to mm if applicable
     */
    updateTireSize() {
      if (this.validateTireSize()) {
        if (this.tireUnits === 'inches') {
          this.currentBike.tireSize = this.tireSize * 25.4; // Convert inches to mm
        } else {
          this.currentBike.tireSize = this.tireSize;
        }

        this.updateBike(this.currentBike);
      }
    },
    /**
     * Validate these fields before updating
     */
    updateCassette() {
      if (this.validateCassette()) {
        this.currentBike.cassetteMin = this.cassetteMin;
        this.currentBike.cassetteMax = this.cassetteMax;
        this.updateBike(this.currentBike);
      }
    }
  },
  beforeMount() {
    this.bikeFields = BIKE_FIELDS;
  },
  watch: {
    activeBikeIndex() {
      this.tireSize = this.currentBike.tireSize;
      this.cassetteMin = this.currentBike.cassetteMin;
      this.cassetteMax = this.currentBike.cassetteMax;
    }
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

.column.box {

  margin-left: 1rem;
  margin-right: 1rem;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #ededed;
  }

  &:not(:last-child) {
    margin-bottom: 0;
  }
}

#bike-name {
  max-width: 12rem;
}

#tire-size {
  max-width: 4rem;
}
</style>
