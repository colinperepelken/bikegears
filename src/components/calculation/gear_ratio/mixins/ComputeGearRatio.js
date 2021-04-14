export default {
    methods: {
        computeGearRatio(chainring, cog) {
            return (chainring / cog).toFixed(2);
        }
    }
}
