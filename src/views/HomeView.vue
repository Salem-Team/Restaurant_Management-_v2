<template>
  <div class="">
    <!-- Start Header -->
    <HeaderSection>
      <div class="md:flex flex-row">
        <div class="basis-50 mt-10 p-20">
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
              >Real Estate Agency</span
            >
          </span>
          <div class="pt-9">
            <h2 class="text-6xl text-primary font-bold">
              Find the perfect place to Live with your family
            </h2>
            <br />
            <p class="text-secondary">
              Distinctively re-engineer revolutionary meta-services and premium
              architectures. Intrinsically incubate.
            </p>
          </div>

          <span class="mt-6 flex items-center">
            <div class="p-4 flex items-center rounded text-primary bg-white">
              Explore Property
              <svg
                class="w-4 ml-4 bg-amber-500 rounded-full py-1 px-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="white"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </div>
          </span>
        </div>
        <div class="">
          <img class="basis-50" src="../assets/media/Image.png" alt="" />
        </div>
      </div>
    </HeaderSection>
    <!-- End Header -->
  </div>

  <!-- Start first section -->
  <div class="m-6 p-3">
    <a
      href="#"
      class="flex flex-col items-center bg-gray-100 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div class="p-12">
        <span class="text-amber-500">01</span>
        <span class="text-base font-semibold text-primary">
          PROPERLAND INTRO</span
        >

        <h2 class="text-2xl pt-4 text-primary font-bold">
          Buying & Selling Property In An Easy Way
        </h2>
        <p class="text-secondary pt-2">
          Distinctively re-engineer revolutionary meta-services and premium At
          vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi.
        </p>
        <br />

        <span class="md:flex">
          <span class="basis-1/3 flex text-center p-1">
            <svg
              fill="gray"
              class="w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
              /></svg
            >Only pay when you publish</span
          >

          <h5 class="basis-1/3 text-center flex p-1">
            <svg
              fill="gray"
              class="w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
              />
            </svg>
            Unlimited featured use
          </h5>
          <h5 class="basis-1/3 text-center flex p-1">
            <svg
              fill="gray"
              class="w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
              />
            </svg>
            24/7 support
          </h5>
        </span>
      </div>

      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
        src="../assets/media/Photo.jpg"
        alt=""
      />
    </a>
  </div>
  <!-- End first section -->

  <!-- Start Second section -->
  <div class="relative py-12 mt-12 bg-[#F5F1EF] z-[1]">
    <TitleSection
      title="Properties for sale in your favorite area"
      text="Why Choose"
      number="02"
    ></TitleSection>
    <img
      class="absolute top-[900px] left-0 w-full h-32 z-0"
      src="../assets/media/Pattern.png"
      alt=""
    />
    <div class="relative z-[1]">
      <div class="md:flex flex-wrap m-3">
        <div v-for="(item, index) in pic" :key="index" class="md:w-1/2 p-2">
          <CardSection :src="item.img" :title="item.title" class="basic-50" />
        </div>
      </div>
    </div>
  </div>
  <!-- End Second section -->

  <br /><br />
  <!-- Start Third section -->
  <TitleSection
    title="Why Choose Our PropertiesOf Real Estate Industries"
    text="Why Choose"
    number="03"
  ></TitleSection>

  <div class="md:flex p-7">
    <div v-for="item in pic2" :key="item.img">
      <Card2Section :src="item.img" />
    </div>
  </div>
  <br /><br />
  <br /><br />

  <!-- End Third section -->

  <!-- Start Fourth section -->
  <Section4Section />
  <!-- End Fourth section -->
  <br /><br />
  <br /><br />
  <!-- Start Fifth section -->
  <TitleSection title="See How Can Help" text="Services" number="05">
  </TitleSection>
  <!-- End Third section -->

  <!-- Start Fifth section -->
  <!-- <TitleSection title="See How Can Help" text="Services" number="05"></TitleSection> -->
  <div class="md:grid md:grid-cols-3 content-center">
    <div class="text-center p-2 m-10">
      <img class="mx-auto" src="../assets/media/10.png" alt="" />
      <h3 class="text-primary font-bold">Rent a Home</h3>
      <p>
        High level overviews. Approaches overall value proposition. Organically
        grow the holistic world view of disruptive.
      </p>
    </div>

    <div class="text-center p-2 m-12">
      <img class="mx-auto" src="../assets/media/10.png" alt="" />
      <h3 class="text-primary font-bold">Rent a Home</h3>
      <p>
        High level overviews. Approaches overall value proposition. Organically
        grow the holistic world view of disruptive.
      </p>
    </div>

    <div class="text-center p-2 m-12">
      <img class="mx-auto" src="../assets/media/10.png" alt="" />
      <h3 class="text-primary font-bold">Rent a Home</h3>
      <p>
        High level overviews. Approaches overall value proposition. Organically
        grow the holistic world view of disruptive.
      </p>
    </div>

    <div class="text-center p-2 m-12">
      <img class="mx-auto" src="../assets/media/10.png" alt="" />
      <h3 class="text-primary font-bold">Rent a Home</h3>
      <p>
        High level overviews. Approaches overall value proposition. Organically
        grow the holistic world view of disruptive.
      </p>
    </div>

    <div class="text-center p-2 m-12">
      <img class="mx-auto" src="../assets/media/10.png" alt="" />
      <h3 class="text-primary font-bold">Rent a Home</h3>
      <p>
        High level overviews. Approaches overall value proposition. Organically
        grow the holistic world view of disruptive.
      </p>
    </div>
  </div>
  <!-- End Fifth section -->
  <div>
    <Section6Section></Section6Section>
  </div>
  <div>
    <Section7Counter></Section7Counter>
  </div>
  <div>
    <TitleSection
      title="Discover The Neighborhoods"
      text="Neighborhoods"
      number="06"
    >
    </TitleSection>
    <GallerySection></GallerySection>
    <br /><br />
    <div class="m-12">
      <div class="logo-section">
        <h3 class="mx-auto text-primary text-center text-3xl font-bold">
          More than 50+ Brands Trusted World Wide
        </h3>
        <br /><br />
        <img src="../assets//media/logo.svg" alt="" />

        <br />
        <div class="mx-auto flex flex-col items-center text-center">
          <div class="p-4 flex items-center rounded text-primary bg-white">
            Explore Property
            <svg
              class="w-4 ml-4 bg-amber-500 rounded-full py-1 px-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="white"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br />

  <div class="logo-section mx-auto flex flex-col items-center text-center">
    <img src="../assets/media/blog1.svg" alt="" />
    <br />
    <div class="text-center">
      <p class="text-secondary">November 05, 2021 | Architecture</p>
      <h4 class="text-primary">
        Here’s how to decorate your new home from scratch
      </h4>
    </div>
    <br /><br />
    <img src="../assets/media/blog2.svg" alt="" />
    <br />
    <div class="text-center">
      <p class="text-secondary">December 14, 2021 | Market Manager</p>
      <h4 class="text-primary">
        Home buying basics: How many Kitchans and bedrooms?
      </h4>
      <br />
    </div>
    <div
      class="p-4 flex items-center text-center rounded text-primary bg-white"
    >
      See All Articles
      <svg
        class="w-4 ml-4 bg-blue-800 rounded-full py-1 px-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="white"
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        />
      </svg>
    </div>
  </div>

  <div>
    <FooterSection> </FooterSection>
  </div>
</template>

<script>
import TitleSection from "@/components/TitleSection.vue";
import CardSection from "@/components/CardSection.vue";
import Card2Section from "@/components/Card2Section.vue";
import Section4Section from "@/components/Section4Section.vue";
import Section6Section from "@/components/Section6Section.vue";
import Section7Counter from "@/components/Section7Counter.vue";
import GallerySection from "@/components/GallerySection.vue";
import FooterSection from "@/components/footer/FooterSection.vue";
import HeaderSection from "@/components/header/HeaderSection.vue";

export default {
  components: {
    TitleSection,
    CardSection,
    Card2Section,
    Section4Section,
    Section6Section,
    Section7Counter,
    GallerySection,
    FooterSection,
    HeaderSection,
  },
  data() {
    return {
      pic: [
        { img: "3.png", title: "Comefortable Appartment" },
        {
          img: "4.png",
          title: "Home in Downtown, Los Angeles",
        },
        { img: "5.png", title: "Comefortable Appartment" },
        {
          img: "Image2.png",
          title: "Home in Downtown, Los Angeles",
        },
        { img: "6.png", title: "Comefortable Appartment" },
        {
          img: "6.png",
          title: "Home in Downtown, Los Angeles",
        },
      ],
      pic2: [{ img: "8.png" }, { img: "9.png" }, { img: "home.png" }],
    };
  },
};
</script>

<style></style>
