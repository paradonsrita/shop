<template>
  <v-main>
    <v-container fluid>

    
  <header>
    <h1>Shop</h1>
  </header>
  <section class="employee-content">
    <div class="container">
    <button class="btn btn-primary" @click="typeManage('necklace')">สร้อยคอ</button>

    <button class="btn btn-primary" @click="typeManage('ring')">แหวน</button>
    <button class="btn btn-primary" @click="typeManage('bangle')">กำไล</button>
  </div>
  <!--
    <AsD/>   -->
    <h2>ข้อมูลสินค้า</h2>
    
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
  button{
    width: 25vw;
    height: 5vw;
    margin: 10px;
    font-size: 1.4rem;
    text-shadow: #000 0.15em 0.15em 0.15em;
  }


</style>