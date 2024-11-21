<template>
  <div class="h-full w-full flex flex-nowrap relative bg-white">
    <aside class="w-8 h-full bg-[#00AAA4]" />
    <main :class="$nav.currentPage === 1 ? 'w-full bg-transparent flex flex-col text-black items-center justify-center' : 'w-full bg-transparent flex flex-col flex-1 text-black ml-4'">
      <slot />
    </main>
    <Banner />
    <CountdownTimer />
  </div>
</template>

<script setup>
import Banner from '../components/Banner.vue';
import CountdownTimer from '../components/CountdownTimer.vue';
</script>
