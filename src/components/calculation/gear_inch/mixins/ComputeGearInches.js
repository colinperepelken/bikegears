import CalculationHelpers from "@/components/calculation/mixins/CalculationHelpers";

export default {
    mixins: [CalculationHelpers],
    methods: {
        computeGearInches(chainring, cog, rimSize, tireSize) {
            return (this.mmToInches(this.computeWheelDiameter(rimSize, tireSize)) * (chainring / cog)).toFixed(2);
        },
        computeWheelDiameter(rimSize, tireSize) {
            return rimSize + (tireSize * 2);
        }
    }
}
