<template>
  <HeaderSection>
    <div class="md:flex md:flex-row">
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
          <h2 class="text-6xl text-primary font-bold">About Our Real Estate</h2>
          <br />
        </div>
      </div>
      <div class="">
        <img class="basis-50 h-full" src="../assets/media/about.svg" alt="" />
      </div>
    </div>
  </HeaderSection>
  <AboutSection1></AboutSection1>
  <AboutSection2></AboutSection2>
  <Section6Section></Section6Section>
  <AboutSection3></AboutSection3>
  <Section7Counter class="bg-[#FFBB50]"></Section7Counter>
  <br />
  <TitleSection
    title="Our Property Team"
    text="Experts"
    number="06"
  ></TitleSection>
  <AboutSection4></AboutSection4>

  <div class="">
    <div class="logo-section">
      <h3 class="mx-auto text-primary text-center text-3xl font-bold">
        More than 50+ Brands Trusted World Wide
      </h3>
      <br /><br />
      <img src="../assets//media/logo.svg" alt="" />

      <br />
      <div class="mx-auto flex flex-col items-center text-center">
        <div
          class="p-4 cursor-pointer flex items-center rounded text-primary bg-white"
        >
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
  <FooterSection></FooterSection>
</template>
<script setup>
import HeaderSection from "../components/header/HeaderSection";
import Section6Section from "../components/Section6Section.vue";
import Section7Counter from "@/components/Section7Counter.vue";
import FooterSection from "@/components/footer/FooterSection.vue";
import AboutSection1 from "@/components/AboutSection1.vue";
import AboutSection2 from "@/components/AboutSection2.vue";
import AboutSection3 from "@/components/AboutSection3.vue";
import AboutSection4 from "@/components/AboutSection4.vue";
import TitleSection from "@/components/TitleSection.vue";
</script>
