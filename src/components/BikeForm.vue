<template>
  <div>
    <b-form-select v-model="maxChainring" :options="chainringOptions"></b-form-select>
    <b-form-select v-model="maxChainring" :options="chainringOptions"></b-form-select>
  </div>
</template>

<script>
export default {
  name: "BikeForm",
  data() {
    return {
      maxChainring: null,
      chainringOptions: [
        { value: null, text: "Select max chainring" },
      ],
    };
  },
};
</script>