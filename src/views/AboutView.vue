<template>
  <v-main>
    <v-container fluid>
      <div class="row">
        <div class="col-md-5">
          <ul>
            <li v-for="(product, index) in product" :key="index">

              <!--  <img src="product.picture" class="card-img-top" ref="imageURL"/>  -->
              <div class="card-body">
                <h4 class="card-title">{{ product.name }}</h4>
              </div>
              <button type="button" class="buy-button" @click="addToBasket(product.id)">
                {{ product.isvisible ? 'hit' : 'show' }}</button
              >&nbsp;

              <div v-show="product.isvisible">
                <div class="box">
                  <div class="boxShow">

                    <hr />
                    <h4 class="card-text">สี: {{ product.color }}</h4>
                    <hr />
                    <p class="card-text">{{ product.detail }}</p>
                    <hr />
                    <div class="flex">
                      <h2>ราคา: {{ product.price }} บาท</h2>
                      <div>
                        <button type="button" class="cancel-button">
                          cancel
                        </button>
                        <button type="button" class="buy-button">Buy</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </v-container>
  </v-main>
</template>




<script setup>
import { ref } from "vue";

import product from '../json/product.json'
import { useCart } from "../stores/useCart";

const enrollment = useEnrollment();

const productBasket = useEnrollment();
const productInfo = productBasket.getState;



function showPro(id){
  console.log(id)
  id = !id
  
}
function addToBasket(id) {
  const data = id
  
      enrollment.storeState(data);


    console.log(productBasket)
    console.log(data)
    console.log(enrollment.getState)
    alert("ลงทะเบียนแล้ว โปรดไปที่หน้า วิชาที่ฉันลงทะเบียน");

  
}


</script> 




<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
  background: #dbe598;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
  border-style: inset;
  border-color: #fa5;
  box-shadow: 2px 4px 1px #aaa;
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
.box {
  height: 100%;
  width: 100%;

  position: fixed;
  top: 0%;
  left: 0%;
}
.boxShow {
  margin: 15px;
  position: fixed;
  left: 20.5%;
  top: 8%;
  width: 57vw;
  padding: 1rem;
  color: #fff;
  text-shadow: #000 0.1em 0.1em 0.1em;
  border-radius: 15px;
  background: linear-gradient(to bottom right, #faa, #aaa);
  border-style: inset;
  border-color: #af4;
}
img {
  margin: 10px;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border-style: inset;
  border-color: #ff5;
}
.boxShow img {
  width: 150px;
  height: 150px;
}
.boxShow p {
  font-size: large;
  text-align: left;
}

.boxShow .flex {
  display: flex;
  justify-content: space-between;
}
button {
  margin-right: 20px;
  border-radius: 7px;
  height: 50px;
  width: 120px;
  font-size: large;
  color: #00f;
  text-shadow: #fff 0.05em 0.1em 0.1em;
  font-family: fantasy;
}
.buy-button {
  background: linear-gradient(to bottom right, #bff, #7f7);
  border-color: #0af;
  text-align: center;
}
.cancel-button {
  background: #ffc;

  border-color: #fa5;
}
</style>

