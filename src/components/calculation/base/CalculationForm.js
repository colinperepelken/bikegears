export default {
    props: ['bike', 'active'],
    data() {
      return {
          bikeData: {}
      }
    },
    methods: {
        updateBike() {
            this.$emit('bikeChanged', this.bikeData);
        },
    }
}
