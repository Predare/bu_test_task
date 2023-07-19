import {defineStore} from 'pinia';

export const useResturantsStore = defineStore('resturants', {
    state: () => ({
        resturants: [],
        randomResturant: 1,
    }),
    getters: {
        count (state) {
            return state.resturants.length;
        },
        
    },
    actions: {
        setRestaurants(resturants) {
            this.resturants = resturants
        }
    },
})