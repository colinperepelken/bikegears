import Message from "@/components/partials/Message";
import {mapGetters, mapState} from "vuex";

export default {
    components: {Message},
    computed: {
        ...mapState(['activeBikeIndex', 'bikes']),
    },
    methods: {
        ...mapGetters(['currentBike'])
    }
}
