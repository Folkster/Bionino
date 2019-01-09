<template>
<div id="app">
    <!-- HEADER -->
    <NavBar />
    <!-- MAIN VIEW -->
    <router-view />
    <!-- FOOTER -->
    <Footer />
</div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "app",
    components: {
        NavBar,
        Footer
    }
}
</script>

<style src="./style.css"></style>