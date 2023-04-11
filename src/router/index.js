import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from "@/views/ProductsView.vue";
import KesicilerView from "@/views/KesicilerView.vue";
import DelicilerView from "@/views/DelicilerView.vue";
import TelliKesiciler from "@/views/TelliKesiciler.vue";
import ZincirliKesiciler from "@/views/ZincirliKesiciler.vue";
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
        path: '/urunlerimiz/kesiciler',
        name: 'kesiciler',
        component: KesicilerView
    },
    {
        path: '/urunlerimiz/deliciler',
        name: 'deliciler',
        component: DelicilerView
    },
    {
        path: '/urunlerimiz/kesiciler/zincirli',
        name: 'zincirli-kesiciler',
        component: ZincirliKesiciler
    },
    {
        path: '/urunlerimiz/kesiciler/telli',
        name: 'telli-kesiciler',
        component: TelliKesiciler
    },
    {
        path: '/urunlerimiz/kesiciler/zincirli/:id',
        name: 'zincirli-kesici-detay',
        component: ProductDetailsView
    },
    {
        path: '/urunlerimiz/kesiciler/telli/:id',
        name: 'telli-kesici-detay',
        component: ProductDetailsView
    },
    {
        path: '/urunlerimiz/deliciler/:id',
        name: 'delici-detay',
        component: ProductDetailsView
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
