<script setup>
import { useResturantsStore } from '~/stores/resturants';

const store = useResturantsStore();
var restaurant = computed(() => store.resturants[store.randomResturant-1]);
</script>

<template>
    <div>
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex flex-col">
                <RestaurantCard v-if="restaurant" :restaurant="restaurant" />
            </div>
        </div>
        <BottomNavbar />
    </div>
</template>