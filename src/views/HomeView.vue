<template>
  <header>
    <h1>Shop</h1>
  </header>
  <section class="employee-content">
    <h2>ข้อมูลสินค้า</h2>
    
    <ListProduct />
  
  </section>
</template>

<script>
import ListProduct from '../components/ListProduct.vue'

export default {
  name: 'HomeView',
  components: {
    ListProduct
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
}
.employee-content {
  box-shadow: 0 2px 8px black;
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}
.employee-content h2 {
  font-size: 1.25rem;
  border-bottom: 4px solid #ccc;
  font-weight: bold;
  color: purple;
  margin: 0 0 0.5rem 0;
}


</style>