<template>
    <div>
        <div class="px-24">
            <h1 class="text-6xl">Zincirli Kesiciler</h1>
        </div>
        <div class="px-24 py-24 grid items-stretch grid-cols-3 gap-16">

            <router-link v-for="(kesici, index) in zincirliKesiciler" :key="index" :to="getRouterLink(kesici)"
                         class="flex flex-col justify-between product-card bg-white py-4 px-8 max-w-lg flex-grow">
                <img :src="kesici.imgUrl" class="-translate-y-1/3 mx-auto transition-all">

                <div class="-mt-2">
                    <div class="text-5xl mb-2">{{ kesici.name }}</div>
                    <div class="mb-4"> {{kesici.type}} </div>
                    <div class="flex items-end">
                        <div>{{ kesici.desc }}</div>
                        <span :style="{animationDelay: 0.3 * index + 's'}"
                              class="text-7xl icon transition-all"> > </span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import zincirliKesiciler from "@/datas/zincirliKesiciler.json";

export default {
    name: "KesicilerView",
    data() {
        return {
            zincirliKesiciler: []
        }
    },
    mounted() {
        this.zincirliKesiciler = zincirliKesiciler.zincirliKesiciler;
    },
    methods: {
        getRouterLink(kesici) {
            return "/urunlerimiz/kesiciler/zincirli/" + kesici.id
        }
    }
}
</script>

<style scoped>

.icon {
    animation: swing 2s ease-in-out infinite;
}
</style>
