<template>
  <div class="h-full w-full flex flex-nowrap relative bg-white">
    <aside class="w-8 h-full bg-[#00AAA4]" />
    <main class="w-full bg-transparent flex flex-col text-black items-center justify-center">
      <slot />
    </main>
    <Banner />
  </div>
</template>

<script setup>
import Banner from '../components/Banner.vue';
</script>
