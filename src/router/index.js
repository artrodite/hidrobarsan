import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from "@/views/ProductsView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/urunlerimiz',
        name: 'products',
        component: ProductsView
    },
    {
        path: '/urunlerimiz/:name',
        name: 'productDetail',
        component: ProductDetailsView
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
