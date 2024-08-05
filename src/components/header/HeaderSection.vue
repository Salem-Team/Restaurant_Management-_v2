<template>
  <div
    :class="
      props.background === 'true' ? 'img-backgroundLast' : 'img-background'
    "
    :style="backgroundStyle"
  >
    <!-- Start Header -->
    <NavbarSection />
    <slot></slot>
    <!-- End Header -->
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import NavbarSection from "../header/NavbarSection.vue";

// Define the props
const props = defineProps({
  background: {
    type: String,
    default: "", // Empty string means no custom background URL or use default class
  },
});

// Computed property for inline style
const backgroundStyle = computed(() => {
  return props.background && props.background !== "true"
    ? { backgroundImage: `url(${props.background})` }
    : {};
});
</script>

<style scoped>
.img-background {
  background-image: url("../../assets/Background-1.jpg");
  background-size: cover; /* Ensures the background image covers the entire div */
  background-position: center; /* Centers the background image */
}

.img-backgroundLast {
  background-image: url("../../assets/media/Banner.png");
  background-size: cover; /* Ensures the background image covers the entire div */
  background-position: center; /* Centers the background image */
  opacity: 0.8;
}
</style>
