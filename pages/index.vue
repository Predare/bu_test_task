<script setup>

import { useResturantsStore } from '~/stores/resturants';

const store = useResturantsStore();
var { data: resturants } = await useFetch('https://bandaumnikov.ru/api/test/site/get-index', {
    onResponse({ request, response }) {
        store.setRestaurants(response._data['data']);
    }
});


</script>

<template>
    <div>
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex flex-col gap-10">
                <RestaurantCard v-for="restaurant in resturants['data']" :key="restaurant.id" :restaurant="restaurant" />
            </div>
        </div>
        <BottomNavbar />
        
    </div>
</template>