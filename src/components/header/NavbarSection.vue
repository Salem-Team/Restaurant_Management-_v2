<template>
  <!-- Navbar -->
  <div class="pl-12 pr-12 p-5">
    <nav class="bg-white border-gray-200">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <!-- Logo and Brand Name -->
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../../assets/media/Icon.png" class="h-8" alt="Logo" />
          <span
            class="self-center text-2xl text-primary font-semibold whitespace-nowrap"
          >
            ProperLand
          </span>
        </a>
        <!-- Menu Button for Mobile -->
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <!-- Navigation Links -->
        <div
          :class="menuClasses"
          id="navbar-default"
          class="bg-white w-full md:w-auto"
        >
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-white"
          >
            <li>
              <RouterLink
                to="/"
                class="block hover:bg-gray-100 py-2 px-3 text-black rounded md:bg-transparent md:text-black md:p-0"
                aria-current="page"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/about"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0"
              >
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/properties"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0"
              >
                Property
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/changeiog"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0"
              >
                Changeiog
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- Contact Button -->
        <button
          style="background-color: #3b3a5e"
          class="bg-background-color-button text-white w-200 h-70 rounded-lg p-4"
        >
          Contact
        </button>
      </div>
    </nav>
  </div>
  <!-- Navbar -->
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

// State to track menu visibility
const isMenuOpen = ref(false);

// Method to toggle menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Computed property for menu classes
const menuClasses = computed(() => {
  return {
    hidden: !isMenuOpen.value, // Hide menu if not open
    block: isMenuOpen.value, // Show menu if open
    "md:block": true, // Always show on medium screens and up
  };
});
</script>

<style scoped>
/* Additional Styling */
#navbar-default {
  transition: max-height 0.3s ease-in-out;
}

@media (max-width: 768px) {
  #navbar-default {
    max-height: 0;
    overflow: hidden;
    display: none;
  }

  #navbar-default.block {
    max-height: 1000px; /* Adjust according to your content */
    display: block;
  }
}
</style>
