<template>

    <div class="text-center p-3 ">
        <p class="text-primary mb-3"> <span class="text-amber-400">{{ number }}</span> {{ text }}</p>
        <h4 class="text-primary text-4xl">
            {{ title }}
        </h4>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    number: String,
    text: String,
    title: String
});
</script>
