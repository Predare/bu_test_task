<script setup>
const props = defineProps(['restaurant']);
</script>

<template>
    <div class="card card-compact bg-base-100 shadow-xl min-w-fit max-w-xl" style="min-width: 20rem;">
        <figure v-if="restaurant.photo"><img :src="restaurant.photo" alt="restaurant" />
        </figure>
        <div class="card-body">
            <div class="flex flex-row justify-between items-center">
                <h2 class="text-2xl">{{ restaurant.name }} </h2>
                <div v-if="restaurant.landmark" class="tooltip tooltip-bottom text-left w-fit"
                    :data-tip="restaurant.landmark">
                    <div class="indicator">
                        <div class="indicator-item ps-1">
                            <Icon name="material-symbols:help" />
                        </div>
                        <div class="text-base font-bold text-right">
                            <Icon size="1.2rem" name="material-symbols:distance" />{{ restaurant.distance }} метров
                        </div>
                    </div>
                </div>
                <div class="w-fit" v-else-if="restaurant.distance">
                    <div class="text-base font-bold text-right">
                        <Icon size="1.2rem" name="material-symbols:distance" />{{ restaurant.distance }} метров
                    </div>
                </div>
            </div>
            <span class="text-base">{{ restaurant.address }}</span>
            <div class="tooltip tooltip-right text-left w-fit" data-tip="Стоимость бизнес-ланча">
                <div v-if="restaurant.business_lunch" class="text-lg font-bold">
                    <Icon class="mr-2" size="1.6rem" color="primary" name="material-symbols:emoji-food-beverage" />
                    {{ restaurant.price }} руб.
                </div>
            </div>
            <div class="tooltip tooltip-right text-left w-fit" data-tip="Не знаю что означает 'Time'">
                <div v-if="restaurant.time" class="text-lg font-bold">
                    Time: <span class="text-sm font-medium">{{ restaurant.time }}</span>
                </div>
            </div>
            <div class="card-actions justify-end mt-1">
                <div v-if="restaurant.cuisine" class="badge badge-primary">{{ restaurant.cuisine }}</div>
                <div v-if="restaurant.business_lunch" class="badge badge-secondary">Бизнес-ланч</div>
            </div>
        </div>
    </div>
</template>