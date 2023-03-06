import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCart = defineStore("cart", () => {
  const cart = ref([]);


  const getState = computed(() => cart.value);
  function storeState(state) {
    console.log(getState)
    cart.value.push(state);
  }
  return { cart, getState, storeState };
});