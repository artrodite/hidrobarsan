<template>
    <div class="px-24 py-24 flex items-stretch justify-center gap-4">
        <router-link v-for="(category, index) in categories" :key="index" :to="getRouterLink(category)"
                     class="flex flex-col justify-between product-card bg-white py-4 px-8 max-w-lg flex-grow">
            <img :src="category.imgUrl" class="-translate-y-1/3 mx-auto transition-all">

            <div class="-mt-2">
                <div class="text-5xl mb-4">{{ category.name }}</div>
                <div class="flex items-end">
                    <div>{{ category.desc }}</div>
                    <span class="text-7xl icon transition-all" :style="{animationDelay: 0.3 * index + 's'}"> > </span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import categories from "../datas/categories.json";

export default {
    name: "ProductsView",
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        this.categories = categories.categories;
    },
    methods: {
        getRouterLink(category) {
            return "/urunlerimiz/" + category.name.toLowerCase();
        }
    }
}
</script>

<style lang="scss" scoped>

.icon {
  animation: swing 2s ease-in-out infinite;
}

</style>
