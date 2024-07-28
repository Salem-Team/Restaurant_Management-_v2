<template>
  <div class="md:flex p-10">
    <div class="md:w-1/2">
      <img class="h-[600px] w-full" src="../assets/media/about1.svg" alt="" />
    </div>
    <div class="md:w-1/2 p-5">
      <TitleSection
        class="text-start"
        title="Buying & Selling Property
In An Easy Way"
        text="VIntro Video"
        number="01"
      >
      </TitleSection>
      <p class="text-xs pl-3 text-secondary">
        Distinctively re-engineer revolutionary meta-services and premium At
        vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias excepturi.
      </p>
      <br />
      <br />
      <div class="text-xs">
        <div class="flex">
          <img src="../assets/media/Icon1.svg" alt="" />
          <div>
            <h3 class="font-bold text-xl text-black">Our Vision</h3>
            <p class="p-2">
              Distinctively re-engineer revolutionary meta-services and premium
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </p>
          </div>
        </div>

        <div class="flex">
          <img src="../assets/media/Icon2.svg" alt="" />
          <div>
            <h3 class="font-bold text-xl text-black">Our Mission</h3>
            <p class="p-2">
              Distinctively re-engineer revolutionary meta-services and premium
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <br />
  <TitleSection class="" title="Our Main Focus" text="PROCESS" number="02">
  </TitleSection>
</template>
<script setup>
import TitleSection from "../components/TitleSection.vue";
</script>
