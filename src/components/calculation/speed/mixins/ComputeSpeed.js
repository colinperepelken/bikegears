import CalculationHelpers from "@/components/calculation/mixins/CalculationHelpers";
import ComputeGearInches from "@/components/calculation/gear_inch/mixins/ComputeGearInches";
import {SPEED_UNITS_IMPERIAL} from "@/constants";

export default {
    mixins: [CalculationHelpers, ComputeGearInches],
    data() {
        return {
            cadence: 90,
        }
    },
    methods: {
        computeSpeed(chainring, cog, rimSize, tireSize, units) {
            let speedImperial = this.computeGearInches(chainring, cog, rimSize, tireSize) * this.cadence * (Math.PI / 1056);

            if (units === SPEED_UNITS_IMPERIAL) {
                return speedImperial;
            }

            return speedImperial * 1.60934;
        },
        computeWheelDiameter(rimSize, tireSize) {
            return rimSize + (tireSize * 2);
        }
    }
}
