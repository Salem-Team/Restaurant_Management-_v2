<template>
  <div class="img-background">
    <!-- Start Header -->
    <NavbarSection />
    <slot></slot>
    <!-- End Header -->
  </div>
</template>

<script setup>
import NavbarSection from "../header/NavbarSection.vue";
</script>

<style scoped>
.img-background {
  background-image: url("../../assets/Background-1.jpg");
  background-size: cover; /* Ensures the background image covers the entire div */
  background-position: center; /* Centers the background image */
}
</style>
