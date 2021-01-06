import Message from "@/components/Message";
import {mapState} from "vuex";

export default {
    components: {Message},
    computed: {
        ...mapState(['bikes', 'activeBikeIndex', 'bikesChanged']),
        currentBike() {
            return this.bikes[this.activeBikeIndex];
        },
        message() {
            // Build your insight message here
            return "";
        }
    },
}
