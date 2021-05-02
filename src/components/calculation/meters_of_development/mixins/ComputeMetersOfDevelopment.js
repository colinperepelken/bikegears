import CalculationHelpers from "@/components/calculation/mixins/CalculationHelpers";

export default {
    mixins: [CalculationHelpers],
    methods: {
        computeMetersOfDevelopment(chainring, cog, rimSize, tireSize) {
            return ((this.mmToInches(this.computeWheelDiameter(rimSize, tireSize)) * (chainring / cog)) * (0.0254 * Math.PI));
        },
        computeWheelDiameter(rimSize, tireSize) {
            return rimSize + (tireSize * 2);
        }
    }
}
