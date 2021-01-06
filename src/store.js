import Vue from 'vue';
import Vuex from 'vuex';
import {BIKE_COLORS, CALCULATION_TYPES} from "@/constants";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        calculationType: CALCULATION_TYPES[0],
        bikes: [
            // Default bike settings
            {
                chainrings: [
                    {value: 32},
                    {value: 44},
                ],
                cassetteMin: 11,
                cassetteMax: 42,
            }
        ],
        activeBikeIndex: 0,
        availableBikeColors: BIKE_COLORS,
        bikesChanged: false
    },
    mutations: {
        setCalculationType(state, type) {
            state.calculationType = type;
        },
        addBike(state) {
            state.bikes.push({
                ...state.bikes.slice(-1)[0]
            });
            state.activeBikeIndex = state.bikes.length - 1;
            state.bikes[state.activeBikeIndex].color = state.availableBikeColors.pop();
            state.bikesChanged = true;
        },
        removeBike(state, index) {
            if (state.bikes[index - 1] !== undefined) {
                state.activeBikeIndex = index - 1;
            } else {
                state.activeBikeIndex = 0;
            }
            state.availableBikeColors.push(state.bikes[index].color);
            state.bikes.splice(index, 1);
            state.bikesChanged = true;
        },
        updateBike(state, bike) {
            state.bikes[state.activeBikeIndex] = {...state.bikes[state.activeBikeIndex], ...bike};
            state.bikesChanged = true;
        },
        changeBike(state, index) {
            state.activeBikeIndex = index;
        },
        setBikeColor(state, index) {
            state.bikes[index].color = state.availableBikeColors.pop();
        },
        calculate(state) {
            state.bikesChanged = false;
        }
    }
});
