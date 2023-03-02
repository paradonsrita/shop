<script setup>
import { RouterLink, RouterView } from 'vue-router'

//import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useUsarStore } from './stores/user';
const { theme } = storeToRefs(useUsarStore());
const { clickTheme } = useUsarStore()

</script>
<script>
  export default {
    data(){
      return{
        iconProfile: false
      }
    },
    methods: {
      showProfile() {
        this.iconProfile = !this.iconProfile;
        console.log(this.iconProfile);
      }
    }
  }
</script>
<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-btn href="/">
      <v-app-bar-title>My shop</v-app-bar-title>
    </v-btn>
      <v-btn>
      <RouterLink to="/">Home</RouterLink>
    </v-btn>
      <v-spacer></v-spacer>
      <v-btn href="/about">
        About
        
      </v-btn>
      
      <v-btn @click="clickTheme"
        :prepend-icon="theme === 'light'
         ? 'mdi-weather-sunny' : 'mdi-weather-night'">
        Click me
      </v-btn>
      
      
      

      <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ props }">
        <v-btn icon
          color="secondary"
          class="ma-2"
          v-bind="props"
        >
        <v-avatar>
          <v-img 
            src="https://m.media-amazon.com/images/I/51T9B5HKY4L._AC_UF894,1000_QL80_.jpg"
          />
        </v-avatar>

        </v-btn>
      </template>
      <v-list>
       <!-- <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>-->
        <v-list-item href="/login">
          <v-list-item-title v-text="'sign in'"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>


    
    </v-app-bar>
    <RouterView />
  </v-app>
  
</template>

