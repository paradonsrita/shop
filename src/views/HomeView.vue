<template>
  <v-main>
    <v-container fluid>



    
  <header>
    <h1>Shop</h1>
  </header>
  <section class="employee-content">
    
  <!--
    <AsD/>   -->
    
    <ListProduct />
  
  </section>
</v-container>
  </v-main>

</template>

<script>
import ListProduct from '../components/ListProduct.vue'
//import AsD from '../components/AsD.vue'

export default {
  name: 'HomeView',
  components: {
    ListProduct,
  //  AsD
  },
  methods:{
    typeManage(type){
      console.log(type)
    },
  }
}
</script>



<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
header {
  margin: 3rem;
  box-shadow: 0 2px 8px black;
  border-radius: 10px;
  padding: 1rem;
  background-color: orange;
  color: green;
  text-align: center;
  text-shadow: #8f0 0.1em 0.1em 0.1em;
}
.employee-content {
  box-shadow: 0 2px 8px black;
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}
.employee-content h2 {
  font-size: 1.5rem;
  border-bottom: 4px solid #ccc;
  font-weight: bold;
  color: purple;
  margin: 0 0 0.5rem 0;
}


</style>