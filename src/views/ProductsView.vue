<template>
    <div class="px-24 py-24 flex items-stretch justify-center gap-4">
        <router-link :to="getRouterLink(category)" v-for="(category, index) in categories" :key="index">
        <div  class="bg-white py-4 px-8 max-w-lg flex-grow">
            <img :src="category.imgUrl" class="-translate-y-1/2 mx-auto">
            <div class="text-5xl mb-4">{{ category.name }}</div>
            <div>{{ category.desc }}</div>
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
    methods : {
        getRouterLink(category) {
            return "/products/product-details/" + category.name.toLowerCase();
        }
    }
}
</script>

<style scoped>

</style>
