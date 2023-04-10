<template>
    <nav class="navbar flex items-center justify-between py-12 px-24">
        <div class="w-40">
            <img alt="hidrobarsan-logo" src="../assets/logo.png">
        </div>
        <div class="flex gap-10">
            <router-link class="nav-item nav-link" to="/">Anasayfa</router-link>
            <router-link class="nav-item nav-link" to="/about">Hakkımızda</router-link>
            <router-link class="nav-item nav-link" to="/urunlerimiz">Ürünlerimiz</router-link>
            <router-link class="nav-item nav-link" to="/contact">İletişim</router-link>
            <div class="nav-item nav-link"><i class="fa fa-globe"/></div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>

</style>
