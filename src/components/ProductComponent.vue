<template>
  <li>
    <img :src="picture" class="card-img-top" ref="imageURL"/> 
    <div class="card-body">
  <h4 class="card-title"> {{ name }} </h4>
</div>
  <button type="button" @click="showData(id)" class="buy-button" >{{ isvisible ? "hit" : "show" }}</button>&nbsp;
  



  <div v-show="isvisible">
    <div class="box">
    <div class="boxShow">
      <img :src="picture" class="img-thumbnail" ref="imageURL"/> 


      
      <hr>
      <h4 class="card-text">สี: {{ color }}</h4>
      <hr>
      <p class="card-text">{{ detail }}</p>
      <hr>
      <div class="flex">
      <h2>ราคา: {{ price }} บาท</h2>
      <div>
        <button type="button" class="cancel-button" @click="showData(id)">cancel</button>
      <button type="button" class="buy-button" >Buy</button>
    </div>
    </div>
    </div>
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
    background: #dbe598;
    padding: 0.5rem;
    color: #1f1f1f;
    border-radius: 25px;
    border-style: inset;
    border-color: #fa5;
    box-shadow:2px 4px 1px #aaa;
  
  }
  /*button{
    font:inherit;
    cursor: pointer;
    border:1px solid #ff0077;
    background-image: linear-gradient(180deg, red, yellow);
    color: rgb(9, 9, 9);
    padding: 0.05rem 1rem;
    box-shadow:1px 1px 2px rgba(0, 0, 0, 0.26)
  }*/
  .box{
    height: 100%;
    width: 100%;

    position: fixed;
    top: 0%;
    left: 0%;
  }
  .boxShow{
    margin: 15px;
    position: fixed;
    left: 40.5%;
    top:8%;
    width: 57vw;
    padding: 1rem;
    color: #fff;
    text-shadow: #000 0.1em 0.1em 0.1em;
    border-radius: 15px;
    background : linear-gradient(to bottom right, #faa, #aaa);
    border-style: inset;
    border-color: #af4;

  }
  img{
    margin: 10px;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    border-style: inset;
    border-color: #ff5;

  }
  .boxShow img{
    width: 150px;
    height: 150px;
  }
  .boxShow p{
    font-size: large;
    text-align: left;
  }
  
  .boxShow .flex{
    display: flex;
    justify-content: space-between;
}
button{
  margin-right: 20px;
  border-radius: 7px;
  height: 50px;
  width: 120px;
  font-size: large;
  color:#00f;
  text-shadow: #fff 0.05em 0.1em 0.1em;
  font-family: fantasy;
}
.buy-button{
  background : linear-gradient(to bottom right, #bff, #7f7);
  border-color: #0af;
}
.cancel-button{
  background: #ffc;
  
  border-color: #fa5;
}
</style>