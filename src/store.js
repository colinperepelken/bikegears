import Vue from 'vue';
import Vuex from 'vuex';
import {BIKE_COLORS, CALCULATION_TYPES, DEFAULT_BIKE_SETTINGS} from "@/constants";
import _ from 'lodash';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        calculationType: CALCULATION_TYPES[0],
        bikes: [
            _.cloneDeep(DEFAULT_BIKE_SETTINGS)
        ],
        activeBikeIndex: 0,
        availableBikeColors: BIKE_COLORS,
        darkMode: false
    },
    mutations: {
        setCalculationType(state, type) {
            state.calculationType = type;
        },
        addBike(state) {
            let bike = _.cloneDeep(state.bikes[state.activeBikeIndex]);
            bike.name = DEFAULT_BIKE_SETTINGS.name;
            Vue.set(state.bikes, state.bikes.length, bike);
            state.activeBikeIndex = state.bikes.length - 1;
            state.bikes[state.activeBikeIndex].color = state.availableBikeColors.pop();
        },
        removeBike(state, index) {
            if (state.bikes[index - 1] !== undefined) {
                state.activeBikeIndex = index - 1;
            } else {
                state.activeBikeIndex = 0;
            }
            state.availableBikeColors.push(state.bikes[index].color);
            state.bikes.splice(index, 1);
        },
        updateBike(state, bike) {
            Vue.set(state.bikes, state.activeBikeIndex, {...state.bikes[state.activeBikeIndex], ...bike});
        },
        changeBike(state, index) {
            state.activeBikeIndex = index;
        },
        setBikeColor(state, index) {
            state.bikes[index].color = state.availableBikeColors.pop();
        },
        setDarkMode(state, value) {
            state.darkMode = value;
        }
    },
    getters: {
        currentBike: state => {
            return state.bikes[state.activeBikeIndex];
        }
    }
});
