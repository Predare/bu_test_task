<script setup>
const route = useRoute();

import { useResturantsStore } from '~/stores/resturants';

const store = useResturantsStore();

const randomButtonClass = computed(() => {
    if (route.path === '/') {
        return 'btn btn-secondary w-full rounded-none'
    } else {
        return 'btn btn-secondary w-1/2 rounded-none'
    }
});
</script>

<template>
    <div v-if="route.path !== '/'" class="w-full flex justify-center sticky z-10 bottom-0">
        <NuxtLink class="btn btn-primary w-1/2 rounded-none" to="/">
            Каталог
        </NuxtLink>
        <button :class="randomButtonClass" @click="store.$patch({randomResturant: Math.ceil(Math.random() * (store.count <= 0 ? 1 : store.count))})">
            Мне повезёт!
        </button>
    </div>
    <div v-else class="w-full flex justify-center sticky z-10 bottom-0">
        <NuxtLink :class="randomButtonClass" to="/random">
            Мне повезёт!
        </NuxtLink>
    </div>
</template>