export default {
    methods: {
        getGearRange(minRatio, maxRatio) {
            return Math.round((maxRatio / minRatio) * 100);
        }
    }
}
