
//import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core';

export const useUsarStore = defineStore('user', () => {
  const theme = useLocalStorage('theme','light');
 // const user = useLocalStorage('user', {})
  function clickTheme() {
    console.log(theme)
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }/*
  function login(id) {
    const response = await fetch('https://www.melivecode.com/api/users/' + id)
    const result = await response.json()
    console.log(result.user)
    user.value = result.user
  }*/
  return {theme, clickTheme}
})