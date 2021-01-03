import Vue from 'vue';
import Vuex from 'vuex';
import {BIKE_COLORS, CALCULATION_TYPES} from "@/constants";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        calculationType: CALCULATION_TYPES[0],
        bikes: [],
        availableBikeColours: BIKE_COLORS
    }
});
