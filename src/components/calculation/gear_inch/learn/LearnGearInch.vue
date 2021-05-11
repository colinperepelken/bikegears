<template>
  <div class="has-text-left">
    <h2 class="title is-4">What are gear inches?</h2>
    <Message>
      Under construction!
    </Message>
  </div>
</template>

<script>
import Message from "@/components/partials/Message";
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
