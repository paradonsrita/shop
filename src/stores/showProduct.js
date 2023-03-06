/*
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('showProduct', {
  
  function showProduct(){

  }
  return {showProduct}
}) */

/*import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
*/
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterV1', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
    console.log(count.value)
  }
  
  function showProduct(show){
    console.log(show)
  }

  return { count, doubleCount, increment, showProduct}
})