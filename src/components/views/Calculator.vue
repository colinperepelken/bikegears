<template>
    <div>
      <BikeButtons></BikeButtons>
      <div>
        <BikeParameters></BikeParameters>
        <div class="results-container">
          <div class="container has-text-left">
            <component v-for="component in calculationType.results" :is="component" :key="component.name" class="calculator-section"></component>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BikeParameters from "@/components/section/BikeParameters";
import {mapState} from "vuex";
import Message from "@/components/Message";
import BikeButtons from "@/components/BikeButtons";

export default {
  name: "Calculator",
  components: {BikeButtons, Message, BikeParameters},
  computed: {
      ...mapState(['calculationType', 'bikes'])
  }
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/utilities/all';

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
  display: none;

  @include desktop {
    display: block;
  }
}

</style>
