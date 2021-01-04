import _ from "lodash";

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
    },
    mounted() {
        this.bikeData = _.cloneDeep(this.bike); // Must use cloneDeep to prevent 'chainrings' property being referenced
    }
}
