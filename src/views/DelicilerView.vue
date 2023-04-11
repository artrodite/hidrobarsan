<template>
    <div>
        <div class="px-24">
            <h1 class="text-6xl">Deliciler</h1>
        </div>
        <div class="px-24 py-24 flex items-stretch justify-center gap-4">

            <router-link v-for="(delici, index) in deliciler" :key="index" :to="getRouterLink(delici)"
                         class="flex flex-col justify-between product-card bg-white py-4 px-8 max-w-lg flex-grow">
                <img :src="delici.imgUrl" class="-translate-y-1/3 mx-auto transition-all">

                <div class="-mt-2">
                    <div class="text-5xl mb-2">{{ delici.name }}</div>
                    <div class="mb-4"> {{delici.type}} </div>
                    <div class="flex items-end">
                        <div>{{ delici.desc }}</div>
                        <span :style="{animationDelay: 0.3 * index + 's'}"
                              class="text-7xl icon transition-all"> > </span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import deliciler from "@/datas/deliciler.json";

export default {
    name: "KesicilerView",
    data() {
        return {
            deliciler: []
        }
    },
    mounted() {
        this.deliciler = deliciler.deliciler;
    },
    methods: {
        getRouterLink(delici) {
            return "/urunlerimiz/deliciler/" + delici.id
        }
    }
}
</script>

<style scoped>
.icon {
    animation: swing 2s ease-in-out infinite;
}

</style>
