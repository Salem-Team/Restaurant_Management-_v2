<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-12 mt-10">
    <article
      v-for="(item, index) in stats"
      :key="index"
      class="relative flex flex-col justify-end overflow- px-8 pb-8 pt-40"
    >
      <!-- <img src="../assets/media/2222.svg" alt="item.text" class="absolute  inset-0 h-full w-full object-cover"> -->
      <img
        :src="item.img"
        :alt="item.text"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"
      ></div>
      <h3 class="z-10 mt-3 text-2xl font-bold text-white">{{ item.text }}</h3>
      <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        City of love
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { text: "New York", img: "../assets/media/2222.svg" },
        { text: "Atlanta", img: "../assets/media/3333.svg" },
        {
          text: "Singapore",
          img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
        },
        {
          text: "Paris",
          img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
        },
      ],
    };
  },
};
</script>
