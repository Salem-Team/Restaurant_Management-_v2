<template>
  <div class="md:flex md:flex-wrap justify-center text-center px-12 py-12">
    <div v-for="(item, index) in stats" :key="index" class="md:w-1/4 p-4">
      <h3 class="text-primary text-2xl font-bold">{{ item.value }}</h3>
      <p class="text-secondary text-sm">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { value: "56,180", description: "In property sales" },
        { value: "99%", description: "Customer satisfaction" },
        { value: "25K+", description: "In property sales" },
        { value: "56,180", description: "In property sales" },
      ],
    };
  },
};
</script>
