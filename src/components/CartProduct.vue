<template>
   <!-- <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in cartProduct"
        :key="item.id"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table> -->


    <h4 > {{ id }}</h4>
  
  
  
   
  </template>
  
  <script >
  
  export default {
      name:"CartProduct",
  
      methods: {
        buyProduct(id){
          console.log("buy ID " + id)
          this.$emit("incart", id)

        }
      },
  
     
  }
  </script>
  
  <style scoped>
    li{
      text-align: center;
      align-content: center;
      align-items: center;
    }
    h4{
      text-align: center;
      margin: auto;
      align-content: center;
      align-items: center;
    }
  </style>