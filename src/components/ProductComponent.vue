<template>
    <li>
      <img :src="picture" ref="imageURL"/> 
    <h1> {{ name }} </h1>
    <button @click="showData(id)">{{ isvisible ? "hit" : "show" }}</button>&nbsp;
    



    <div v-show="isvisible">
      <div class="boxShow">
        <hr>

        <hr>
        <h4>{{ detail }}</h4>
        <hr>
        <h2>ราคา: {{ price }} บาท</h2>
      </div>
    </div>
  </li>
  </template>
  
  <script>

  export default {
      name:"ProductComponent",
 
      methods: {
        showData(id) {
          this.$emit("showEMP", id)
        },
      },

      props:{
        id:{
          type:Number
        },
        name: {
            type:String,
            required:true
        },
        detail:{
            type:String,
        },
        type:{
          type:String,
          required:true
        },
        price:{
          type:Number,
          required:true
        },
        picture:{
          type:String,
          required:true

        },
        color:{
          type:String,
          required:true
        },
        isvisible:{
          type:Boolean
        }
      }
  }
  </script>
  
  <style scoped>
  
    li{
      margin:1rem;
      font-size: 0.75rem;
      font-weight: bold;
      background: #8ddba4;
      padding: 0.5rem;
      color: #1f1f1f;
      border-radius: 25px;

      box-shadow:2px 4px 1px #aaa;
    
    }
    button{
      font:inherit;
      cursor: pointer;
      border:1px solid #ff0077;
      background-image: linear-gradient(180deg, red, yellow);
      color: rgb(9, 9, 9);
      padding: 0.05rem 1rem;
      box-shadow:1px 1px 2px rgba(0, 0, 0, 0.26)
    }
    .boxShow{
      margin: 15px;
    }
    img{
      margin: 10px;
      width: 100px;
      height: 100px;
    }
    .boxShow h4{
      text-align: left;
    }
  </style>
