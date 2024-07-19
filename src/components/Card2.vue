<template>
    <!-- card 2 with props src -->
    <div class="m-3">
        <div class="card    	 card2-background p-5 shadow m-2 text-start ">
            <div class="p-5">

                <img :src="src" alt="">

                <h5 class="text-black text-xl mt-7">Budget Friendly</h5>
                <p class="text-sm mt-2">Distinctively re-engineer revolutionary meta-services and premium At vero eos et
                    accusamus
                    et
                    iusto odio
                    dignissimos ducimus qui blanditiis</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps(['src']);
</script>