<template>
  <div class="fixed bottom-2 right-2 flex items-center gap-2">
    <button 
      v-if="!isRunning" 
      @click="startTimer"
      class="bg-[#00AAA4] text-white px-2 py-1 rounded hover:bg-[#008884]"
    >
      Start Timer
    </button>
    <div :class="`bg-white/80 px-2 py-1 rounded ${countdownDuration < 60 ? 'text-red-500' : ''} ${isRunning && countdownDuration < 60 ? 'animate-pulse' : ''}`">
      {{ Math.floor(countdownDuration / 60) }}:{{ (countdownDuration % 60).toString().padStart(2, '0') }}
    </div>
  </div>
</template>

<script setup>
import { useTimer } from '../utils/useTimer'

const { countdownDuration, isRunning, startTimer } = useTimer()
</script>
