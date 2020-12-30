import Vue from 'vue';
import Vuex from 'vuex';
import {ADD_BIKE, REMOVE_BIKE, UPDATE_BIKE} from "@/mutation-types";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bikes: [
            {
                chainrings: [{value: 32}, {value: 44}],
                cassetteMin: 11,
                cassetteMax: 42
            }
        ],
        activeBikeIndex: 0
    },
    mutations: {
        [ADD_BIKE] (state) {
            state.bikes.push(state.bikes.slice(-1)[0]);
        },
        [REMOVE_BIKE] (state) {
            state.bikes.splice(-1, 1);
        },
        [UPDATE_BIKE] (state, bikeIndex, data) {
            state.bikes[bikeIndex] = {...state.bikes[bikeIndex], ...data};
        },
    },
    actions: {},
    getters: {
        currentBike: state => {
            return state.bikes[state.activeBikeIndex];
        }
    }
})
