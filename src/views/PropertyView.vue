<template>
  <HeaderSection>
    <div class="md:flex flex-row">
      <div class="basis-1/2 mt-10 p-20">
        <span class="flex items-center p-2 background-gradient">
          <svg
            fill="#B16642"
            class="h-6 w-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
          <span class="ml-2 text-base font-semibold text-secondary"
            >properties</span
          >
        </span>
        <div class="pt-9">
          <h2 class="text-6xl text-primary font-bold">Browse properties</h2>
        </div>
      </div>
      <div class="basis-1/2 flex justify-center">
        <img
          class="w-full"
          src="../assets/media/property.svg"
          alt="Property Image"
        />
      </div>
    </div>
  </HeaderSection>

  <div class="relative py-12 mt-12 bg-[#F5F1EF] z-[1]">
    <TitleSection
      title="Properties for sale in your favorite area"
      text="Why Choose"
      number="02"
    />
    <img
      class="absolute top-[900px] left-0 w-full h-32 z-0"
      src="../assets/media/Pattern.png"
      alt="Pattern"
    />
    <div class="relative z-[1]">
      <div class="md:flex flex-wrap m-3">
        <div v-for="(item, index) in pic" :key="index" class="md:w-1/2 p-2">
          <CardSection :src="item.img" :title="item.title" class="w-full" />
        </div>
      </div>
    </div>
  </div>
  <TitleSection
    title="Discover The Neighborhoods"
    text="Neighborhoods"
    number="06"
  >
  </TitleSection>
  <GallerySection />
  <br /><br />
  <FooterSection />
</template>

<script setup>
import HeaderSection from "../components/header/HeaderSection.vue";
import CardSection from "../components/CardSection.vue";
import GallerySection from "../components/GallerySection.vue";
import FooterSection from "../components/footer/FooterSection.vue";
import TitleSection from "@/components/TitleSection.vue";

// Image data
const pic = [
  { img: "3.png", title: "Comfortable Apartment" },
  { img: "4.png", title: "Home in Downtown, Los Angeles" },
  { img: "5.png", title: "Comfortable Apartment" },
  { img: "Image2.png", title: "Home in Downtown, Los Angeles" },
  { img: "6.png", title: "Comfortable Apartment" },
  { img: "6.png", title: "Home in Downtown, Los Angeles" },
];
</script>
