<template>
  <div class="has-text-left">
    <h2 class="title is-4">What are gear inches?</h2>
    <Message>
      <p>This section is advanced and does not cover gearing basics. First read about <a @click="setCalculationType(calculationTypes.filter(type => type.id === 'gear_ratio')[0])">gear
        ratios</a> to ensure you understand
        the basics of gearing, and how the components on your bike interact.
      </p>
    </Message>

    <div class="section">
      <h3 class="title is-5">Introduction</h3>
      <article class="tile is-12 mb-3">
        <div class="content">
          <p>What are gear inches?</p>
        </div>
      </article>
    </div>

    <div class="section">
      <h3 class="title is-5">Gear inches v.s. Gear ratios</h3>
      <article class="tile is-12 mb-3">
        <div class="content">
          <p>What are gear inches?</p>
        </div>
      </article>
    </div>

    <div class="section">
      <h3 class="title is-5">Parts of a Bike Wheel</h3>
      <article class="tile is-12 mb-3">
        <div class="content">
          <p>Wheel vs Rim vs Tire</p>
        </div>
      </article>
    </div>

    <div class="section">
      <h3 class="title is-5">How does rim size affect gear inches?</h3>
      <article class="tile is-12 mb-3">
        <div class="content">
          <p>650b vs 700c etc...</p>
        </div>
      </article>
    </div>

    <div class="section">
      <h3 class="title is-5">How does wheel size affect gear inches?</h3>
      <article class="tile is-12 mb-3">
        <div class="content">
          <p>23mm tire vs 42mm tire etc...</p>
        </div>
      </article>
    </div>

  </div>
</template>

<script>
import Message from "@/components/Message";
import {mapMutations} from "vuex";
import {CALCULATION_TYPES} from "@/constants";

export default {
  name: "LearnGearInch",
  components: {Message},
  data() {
    return {
      calculationTypes: CALCULATION_TYPES
    }
  },
  methods: {
    ...mapMutations(['setCalculationType'])
  }
}
</script>

<style scoped>

</style>
