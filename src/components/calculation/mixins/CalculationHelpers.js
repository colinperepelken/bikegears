
export default {
    methods: {
        getGearRange(minRatio, maxRatio) {
            return Math.round((maxRatio / minRatio) * 100);
        },
        mmToInches(mm) {
            return mm * 0.0393700787;
        }
    }
}
