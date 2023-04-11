<template>
    <div id="app">
        <Navbar/>

        <transition mode="out-in" name="fade">
            <router-view/>
        </transition>

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

.product-card:hover {
  img {
    transform: translateY(-33.3%) scale(1.1);
  }
}

@keyframes swing {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
