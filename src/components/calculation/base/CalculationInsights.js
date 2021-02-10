import Message from "@/components/Message";
import {mapGetters, mapState} from "vuex";

export default {
    components: {Message},
    computed: {
        ...mapState(['activeBikeIndex', 'bikesChanged', 'bikes']),
        ...mapGetters(['currentBike'])
    },
}
