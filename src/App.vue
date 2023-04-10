<template>
    <div id="app">
        <Navbar/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {Footer, Navbar}
}


</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  background-color: #F7F7F7;
}
</style>
