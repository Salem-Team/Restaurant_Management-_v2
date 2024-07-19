<template>
    <div class="  flex  m-2 flex-col  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div
            class="relative p-4 m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img src="../assets/media/5.png" alt="Card Image" />
            {{ props.src }}
            <img :src="src" alt="Card Image" />

        </div>

        <div class="p-6">
            <div class="flex items-center	justify-between">
                <span class="font-bold text-amber-400	 ">$3500/Mo</span>
                <button class="btn bg-amber-400 text-white p-1 text-sm rounded">For Sale</button>
            </div>


            <p class="block font-bold mt-3 font-sans text-xl antialiased  leading-relaxed text-gray-700">
                {{ title }}
            </p>
            <span class="text-xs text-gray-400 flex m-1 mt-2">
                <svg class="w-3 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="gray"
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>

                709 West Drive Chicago, IL 60606</span>
        </div>
        <div class="flex items-center justify-between  m-4">
            <p class="block font-sans rounded border  border-slate-200	  p-1 flex text-sm antialiased font-normal  ">
                <svg class="w-5 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32l0 256 224 0 0-160c0-17.7 14.3-32 32-32l224 0c53 0 96 43 96 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-224 0-32 0L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                </svg>

                | 10
            </p>
            <p class="block font-sans rounded border  border-gray-200	m-1  p-1 flex text-sm antialiased font-normal  ">
                <svg class="w-5 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3L32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 256 96 77.3zM32 352l0 16c0 28.4 12.4 54 32 71.6L64 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 256 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-40.4c19.6-17.6 32-43.1 32-71.6l0-16L32 352z" />
                </svg>

                | 10
            </p>

            <p class="block font-sans rounded border  border-gray-200	m-1  p-1 flex text-sm antialiased font-normal  ">
                <svg class="w-5 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                </svg>

                | 10
            </p>


            <p class="block font-sans rounded border  border-gray-200	  p-1 flex text-sm antialiased font-normal  ">
                <svg class="w-5 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z" />
                </svg>

                | 10
            </p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    src: String,
    title: String
});
</script>
