import {mapMutations, mapState} from "vuex";

export default {
    computed: {
        ...mapState(['bikes', 'activeBikeIndex'])
    },
    methods: {
        ...mapMutations(['removeBike', 'addBike', 'updateBike', 'changeBike', 'setBikeColor']),
        getBikeButtonStyle(index) {
            return {
                color: this.bikes[index].color,
            }
        },
    }
}
