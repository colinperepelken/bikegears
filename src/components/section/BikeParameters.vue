<template>
  <div class="container has-text-left">
    <div class="box">
      <h2 class="title is-4">Bike Settings</h2>

      <div class="columns is-centered">
        <div class="column is-one-third-desktop">
<!--          <img src="../../assets/crankset.png">-->
          <div class="field">
            <label class="label">Chainrings</label>
            <div class="control chainring-control" v-for="(chainring, index) in chainrings" :key="index">
              <div class="select">
                <select v-model="chainring.value">
                  <option v-for="(option, index) in chainringOptions" :key="index" :value="option">{{ option }} tooth
                  </option>
                </select>
              </div>
              <a v-if="chainrings.length > 1" class="remove-chainring-btn has-text-danger-dark" @click="removeChainring">
                <span class="icon is-small">
                <i class="fas fa-times"></i>
              </span>
              </a>

            </div>
            <button @click="addChainring" :disabled="chainrings.length >= maxNumChainrings"
                    class="button is-small is-info" id="add-chainring">
              <span class="icon is-small">
                <i class="fas fa-plus"></i>
              </span>
              <span>Add Chainring</span>
            </button>
          </div>
        </div>
        <div class="column is-one-third-desktop">
<!--          <img src="../../assets/cassette.png">-->
          <div class="field">
            <label class="label">Min. Cassette Cog Tooth Count</label>
            <div class="control">
              <div class="select">
                <select v-model="cassetteMin">
                  <option v-for="(cog, index) in cassetteOptions" :key="index" :value="cog">{{ cog }} tooth</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Max. Cassette Cog Tooth Count</label>
            <div class="control">
              <div class="select">
                <select v-model="cassetteMax">
                  <option v-for="(cog, index) in cassetteOptions" :key="index" :value="cog">{{ cog }} tooth</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container has-text-centered">
        <button @click="calculate" class="button is-primary is-medium is-rounded">
          <span>Calculate</span>
          <span class="icon is-medium">
            <i class="fas fa-bicycle"></i>
          </span>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: "BikeParameters",
  computed: {
    cassetteOptions() {
      return _.range(5, 60, 1);
    },
    chainringOptions() {
      return _.range(5, 60, 1)
    }
  },
  data() {
    return {
      chainrings: [
        {value: 32},
        {value: 44}
      ],
      cassetteMin: 11,
      cassetteMax: 42,
      maxNumChainrings: 3
    }
  },
  methods: {
    addChainring() {
      this.chainrings.push({value: 36});
    },
    removeChainring(index) {
      this.chainrings.splice(index, 1);
    },
    calculate() {
      this.$emit('calculate', {
        chainrings: this.chainrings.map(chainring => chainring.value).sort(),
        cassetteCogs: _.range(this.cassetteMin, this.cassetteMax, 1),
      })
    }
  },
  mounted() {
    this.calculate();
  }
}
</script>

<style scoped lang="scss">
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
