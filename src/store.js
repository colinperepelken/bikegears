import Vue from 'vue';
import Vuex from 'vuex';
import {BIKE_COLORS, CALCULATION_TYPES} from "@/constants";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        calculationType: CALCULATION_TYPES[0],
        bikes: [],
        activeBikeIndex: 0,
        availableBikeColors: BIKE_COLORS
    },
    mutations: {
        setCalculationType(state, type) {
            state.calculationType = type;
        },
        addBike(state) {
            state.bikes.push({
                ...state.bikes.slice(-1)[0]
            });
            state.activeIndex = state.bikes.length - 1;
            state.bikes[state.activeIndex].color = state.availableBikeColors.pop();
        },
        removeBike(state, index) {
            if (state.bikes[index - 1] !== undefined) {
                state.activeIndex = index - 1;
            } else {
                state.activeIndex = 0;
            }
            state.availableBikeColors.push(state.bikes[index].color);
            state.bikes.splice(index, 1);
        },
        updateBike(state, bike) {
            state.bikes[state.activeIndex] = {...state.bikes[state.activeIndex], ...bike};
        },
        changeBike(state, index) {
            state.activeBikeIndex = index;
        }
    }
});
