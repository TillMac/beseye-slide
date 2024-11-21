import { ref } from 'vue'

// 使用 module-level 變數來確保狀態在所有組件間共享
const defaultCountdownDuration = 10 * 60 // 10 minutes
const countdownDuration = ref(defaultCountdownDuration) // 10 minutes
const isRunning = ref(false)
let timer = null

export function useTimer() {
  const startTimer = () => {
    if (isRunning.value) return
    isRunning.value = true
    timer = setInterval(() => {
      if (countdownDuration.value > 0) {
        countdownDuration.value--
      } else {
        clearInterval(timer)
        isRunning.value = false;
        countdownDuration.value = defaultCountdownDuration;
      }
    }, 1000)
  }

  return {
    countdownDuration,
    isRunning,
    startTimer
  }
}