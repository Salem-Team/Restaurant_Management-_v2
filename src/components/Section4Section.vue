<template>
  <!-- section 4 with laptop image -->
  <div class="bg-gray-100">
    <div class="p-3 md:flex">
      <span class="text-center mt-7">
        <TitleSection
          class="md:text-start pl-9"
          title="42+ years of helping you find the right Propertys"
          text="About Us"
          number="04"
        >
        </TitleSection>
        <p class="text-sm p-9 text-secondary md:text-start">
          Distinctively re-engineer revolutionary meta-services and premium At
          vero eos et accusamus et iusto Dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <div>
          <button class="bg-amber-400 text-primary p-3 text-sm rounded">
            Learn More
          </button>
        </div>
        <br />
      </span>
      <span class="basic-50">
        <img class="h-full" src="../assets/media/labtop.png" alt="" />
      </span>
    </div>
  </div>
</template>
<script setup>
import TitleSection from "../components/TitleSection";
</script>
