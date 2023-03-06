<template>
  <div class="container">
    <div class="row">
      <div class="cart-content">
        <header>
          <h1>Cart</h1>
        </header>
        <!--  <div class="col-md-5">
          {{ cartProduct }}
           <ul>
          <CartProduct
        v-for="(item, index) in cartProduct"
        :id="item.id"
        :key="index"
      
      />
    </ul>
    -->

        <!-- ตะกร้า -->
        <table class="table">
          <thead>
            <tr>
              <th>ชื่อ</th>
              <th>ราคา</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart, index) in cart" :key="index">
              <td>{{ cart.name }}</td>
              <td>{{ cart.price }}</td>
              <td class="table-width"><button @click="removeFormCart(cart)">ลบ</button></td>
            </tr>
            <tr>
              <td>ยอดรวม</td>
              <td>{{ totalPrice }}</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <button @click="buyProduct()">สั่งซื้อ</button>
      </div>
    </div>
  </div>

  <!-- รายการสินค้า -->
  <header>
    <h1>Product</h1>
  </header>
 <!-- <div class="container">
    <div class="typeButton">
      <button class="btn btn-primary" @click="typeManage('necklace')">สร้อยคอ</button>

      <button class="btn btn-primary" @click="typeManage('ring')">แหวน</button>
      <button class="btn btn-primary" @click="typeManage('bangle')">กำไล</button>
    </div>
  </div> -->

  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(product, index) in product" :key="index">
        <div class="li">
          <img :src="product.picture" class="card-img-top" ref="imageURL" />
          <div class="card-body">
            <h4 class="card-title">{{ product.name }}</h4>
            <hr />
            <h4 class="card-title">ราคา : {{ product.price }}</h4>
            <hr />
          </div>
          <button type="button" @click="showData(product)" class="buy-button">
            {{ product.isvisible ? 'hit' : 'show' }}</button
          >&nbsp;

          <!-- หน้ารายละเอียดสินค้า -->
          <div v-show="product.isvisible">
            <div class="box">
              <div class="boxShow">
                <img :src="product.picture" class="img-thumbnail" ref="imageURL" />

                <hr />
                <h4 class="card-text">สี: {{ product.color }}</h4>
                <hr />
                <p class="card-text">{{ product.detail }}</p>
                <hr />
                <div class="flex">
                  <h2>ราคา: {{ product.price }} บาท</h2>
                  <div>
                    <button type="button" class="cancel-button" @click="showData(product)">
                      cancel
                    </button>
                    <button type="button" class="buy-button" @click="toCart(product)">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






        



        <!--       <ul>
        <ProductComponent
      v-for="(item, index) in product"
      :id="item.id"
      :key="index"
      :name="item.name"
      :detail="item.detail"
      :type="item.type"
      :price="item.price"
      :picture="item.picture"
      :color="item.color"
      :isvisible="item.isvisible"
      @showEMP="togggleShow" 
      @incart="incart"
    /> 

  </ul> -->
      </div>
    </div>
  </div>


          <!-- เช็คบิล -->
  <div class="container">
    <div v-show="this.checkBill" >
      <div class="box">
              <div class="boxShow">
                <h4>ยอดรวม = {{ this.totalPrice }}</h4>
                <hr>
                <h4>ใส่ที่อยู่</h4>
                <input type="text" required="true"/>
                <hr>
                <h4>เลขบัญชีของท่าน(4 ตัวท้าย)</h4>
                <input type="text" required/>
                <hr>
                <input type="submit" @click="buyConfirm()"/>
              </div>
      </div>
    </div>
  </div>
</template>

<script>
/*  import product from "../stores/product.json";
import { ref } from "vue";

import ProductComponent from './ProductComponent.vue'
import CartProduct from './CartProduct.vue'
const cartProduct = ref([2]);

*/

export default {
  name: 'ListProduct',

  components: {
    // ProductComponent,
    //CartProduct
  },
  methods: {
    showData(product) {
      product.isvisible = !product.isvisible
      /*  console.log("asd")
      this.product = this.product.map((item)=>{
        if(item.id === id){
          return {...item,isvisible:!item.isvisible}
        }
        return item
      }) */
    },
    toCart(product) {
      this.cart.push(product)
      console.log(this.cart)
      product.isvisible = !product.isvisible
      this.totalPrice += product.price
      alert('สินค้าเข้าไปในตะกร้าแล้ว')
    },
    removeFormCart(product) {
      this.totalPrice -= product.price

      this.cart.pop(product)
    },
    buyProduct() {
      if (this.cart.length == 0) {
        alert('โปรดเพิ่มสินค้าลงตะกร้าก่อนสั่งซื้อ')
      } else {
        alert('สั่งซื้อเรียบร้อย')
       /* this.cart.forEach(element => {
          this.totalPrice += element.price
        }); */
        while (this.cart.length != 0) {

          this.cart.pop()
        }
        this.checkBill = true
      }
    },
    buyConfirm() {
      console.log("asd")
      this.checkBill = false
    }
  },
  data() {
    return {
      checkBill: false,
      totalPrice: 0,
      product: [
        {
          id: 1,
          name: 'ÉTINCELLE DE CARTIER',
          detail:
            ' น้ำหนักรวม 0.64 กะรัต จำหน่ายเป็นคู่ ความกว้างของแหวนแต่ละวง 1.52 มม. ความหนา 1.35 มม. (สำหรับขนาด 52)โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณี และขนาด อาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม',
          type: 'แหวน',
          price: 3400,
          picture:
            'https://scontent.xx.fbcdn.net/v/t1.15752-9/334014367_517851297063574_2190696322604112583_n.jpg?stp=dst-jpg_p403x403&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHC29kb_2lp4oDlMvZzOKICA8hI7NdxurEDyEjs13G6sWh2uYggU4NxpARIHv72fUF6QxQq3HxEmprpfmBDetB8&_nc_ohc=qPat-FxJtboAX_X05lz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRuv7rM0jD8ZrsWszTAElAyWb0VvL09AK43GVODA2u9fw&oe=6423CC23',
          color: 'rose gold',
          isvisible: false
        },

        {
          id: 2,
          name: 'ETINCELLE DE CARTIER',
          detail:'แหวนเอแตงแซลล์ เดอ คาร์เทียร์ (Etincelle de Cartier) ไวท์โกลด์ 750/1000 ประดับเพชรเจียระไนทรงบริลเลียนท์ 24 เม็ดน้ำหนักรวม 0.35 กะรัต ความกว้าง 1.52 มม. ความหนา 1.35 มม. ความกว้างของลวดลาย 5.8 มม. ความหนาของลวดลาย3.52 มม. ความยาวของลวดลาย 8.49 มม. (สำหรับขนาด 52)',
            
          type: 'แหวน',
          price: 3000,
          picture: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/334917699_215191654403179_2351641022054126236_n.jpg?stp=dst-jpg_p403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFJWrfTje6znbBdY0r8gaX5sq8rSuHTYG-yrytK4dNgb7-lbRoHAMb0XcnAA252rK0BebUy61tTpsP6YLqqTy53&_nc_ohc=aOOtKaJzCn0AX_KwbFW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR96ywJt4gbzj7k2kITYy3rSIhjb-hWtOmVEJa8W9Si9w&oe=642CFD07',

          color: 'white gold',
          isvisible: false
        },
        {
          id: 3,
          name: 'ETINCELLE DE CARTIER',
          detail:'แหวนเอแตงแซลล์ เดอ คาร์เทียร์ (Étincelle de Cartier) โรสโกลด์ 750/1000 ประดับเพชรเม็ดกลางทรงลูกแพร์ น้ำหนักรวม 0.16 กะรัต และเพชรเจียระไนทรงบริลเลียนท์ 22 เม็ด น้ำหนักรวม 0.10 กะรัต ความกว้าง 1.52 มม. ความหนา 1.35 มม.',
          type: 'แหวน',
          price: 4000,
          picture: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/334890650_1723590204704209_4384264108430523346_n.jpg?stp=dst-jpg_p403x403&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFBxewcnGqLt03OEvESDe2yQSjRje3qQN5BKNGN7epA3nslEieXMlJiWjfqxR9B8DN2RjLXXcwmqh3SQsK34rp0&_nc_ohc=3SY_rI9tRioAX9QB6iZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRklo4aBlSw7HYjEqtC01jt1I8tAaiS3A2Bl3Trjvlhyg&oe=642D0124',
          color: 'rose gold',
          isvisible: false
        },
        {
          id: 4,
          name: 'ETINCELLE DE CARTIER',
          detail:'แหวนเอแตงแซลล์ เดอ คาร์เทียร์ (Étincelle de Cartier) โรสโกลด์ 750/1000 ประดับเพชรเจียระไนทรงบริลเลียนท์ 18 เม็ด น้ำหนักรวม 0.63 กะรัต (สำหรับขนาด 52)',
          type: 'แหวน',
          price: 5500,
          picture: 'https://cdn.fbsbx.com/v/t59.2708-21/334858841_718346603416020_126738421198828063_n.gif?_nc_cat=110&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeEX5IyEQhKhKXB59nXq_cnKy6OC_ytrHZ_Lo4L_K2sdn1ieOimVUAc6vWaa8K6rKjDoY2n1-Sa0mc6dBi1SthpQ&_nc_ohc=e6o6OjGbX4MAX8F-lOX&_nc_ht=cdn.fbsbx.com&oh=03_AdS-5T7mFoRC7xYH8vjbWFgmyXbHf3e9GGcmGjwUYvISHw&oe=6407156B',
          color: 'rose gold',
          isvisible: false
        },
        {
          id: 5,
          name: 'ETINCELLE DE CARTIER',
          detail: 'แหวนเอแตงแซลล์ เดอ คาร์เทียร์ (Étincelle de Cartier) เยลโลว์โกลด์ 750/1000 ประดับอัญมณีเจียระไนทรงพริ้นเซส น้ำหนักรวม 0.16 กะรัตพร้อมฝังเพชรเจียระไนทรงบริลเลียนท์ ความกว้าง 1.52 มม. ความหนา 1.35 มม.โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณี และขนาด อาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม',
          type: 'แหวน',
          price: 6000,
          picture: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/334905415_582750133911035_3280931269612034450_n.jpg?stp=dst-jpg_p403x403&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeEbu4vK2_-ygxkHU2ekdDPtyFPJfN9OKu_IU8l8304q76U_iRN__DTHvpH1EUYgKsaRNUZPNZKQvCdfkEQluqiL&_nc_ohc=UDEgTcIJtkoAX-Fbfdq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTuyQtG03Iiw8vhUPVwz9F9_J16GHWfsE4MTs9x0fFCqA&oe=642D0D2B',
          color: 'yellow gold',
          isvisible: false
        },
        {
          id: 6,
          name: 'ETINCELLE DE CARTIER',
          detail: 'แหวนเอแตงแซลล์ เดอ คาร์เทียร์ (Étincelle de Cartier) ไวท์โกลด์ 750/1000 ประดับเพชรเจียระไนทรงบริลเลียนท์ 69 เม็ดน้ำหนักรวม 1.33 กะรัต (สำหรับขนาด 52)โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณี และขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม',
          type: 'แหวน',
          price: 3300,
          picture: 'https://cdn.fbsbx.com/v/t59.2708-21/333506738_110279278612487_6335435177053453477_n.gif?_nc_cat=100&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeG7CIVbhvZiFzkXpxAh_s9DvCwbD4_jc2y8LBsPj-NzbP5ESglr4D6dwN6aJqKGqxAKhd9XY8K2RJ4KTfpcMfDi&_nc_ohc=kxwBek31_fwAX_0Tr4W&_nc_ht=cdn.fbsbx.com&oh=03_AdSFGlS_bMUSgLs2rXm0OY5fRyfHwdjgORJe2J3u6MOBLA&oe=64073EC3',
          color: 'white gold',
          isvisible: false
        },
        {
          id: 7,
          name: "CARTIER D'AMOUR",
          detail: "สร้อยคอคาร์เทียร์ ดามูร์ (Cartier d'Amour) โรสโกลด์ 750/1000 ประดับเพชรเจียระไนทรงบริลเลียนท์หนึ่งเม็ด น้ำหนัก 0.04 กะรัต เส้นผ่านศูนย์กลางของลวดลาย 3.79 มม. ความยาวโซ่ 380 ถึง 410 มม.โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณี และขนาด อาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม",
          type: 'สร้อย',
          price: 2000,
          picture: 'https://cdn.fbsbx.com/v/t59.2708-21/334225136_223753990223377_2278921895750460197_n.gif?_nc_cat=110&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeFX7b9aU2k0k3uqttDYVx0iYgsx-5U_xhdiCzH7lT_GFwNbQgbCH8Vc6IWaoV1HiW0LJCiqPsFBtwyhFWKWt5jP&_nc_ohc=Ko2eyIP_IAMAX-mbXzP&_nc_ht=cdn.fbsbx.com&oh=03_AdRVb0aq6rmbeZo8QgJ8CMckAsc5dyhAyYcD7QerRiI96Q&oe=64077667',
          color: 'rose gold',
          isvisible: false
        },
        {
          id: 8,
          name: "CARTIER D'AMOUR",
          detail: "สร้อยคอ Cartier d'Amour โรสโกลด์ 750/1000 ประดับแซฟไฟร์สีชมพู เส้นผ่านศูนย์กลางของลวดลาย 5.03 มม. ความยาวโซ่ 380 ถึง 410 มม.โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณี และขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม",
          type: 'สร้อย',
          price: 3300,
          picture: 'https://cdn.fbsbx.com/v/t59.2708-21/333080095_1277349423189916_6509127443942763084_n.gif?_nc_cat=108&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeEHPvFPFUaHPgzf6u1dcPGhKNa-nKJI-HUo1r6cokj4deDo0yyn3isZls3IrXiyIFkeZcED7LiFCiPbJMs_hhXx&_nc_ohc=Cqg34BiQ-YQAX91uGCU&_nc_ht=cdn.fbsbx.com&oh=03_AdTwK5GZNHgDNey6SZOrD2Z0JsQ6HA7iiMdEPzkmqW7HlA&oe=6407374F',
          color: 'rose gold',
          isvisible: false
        },
        {
          id: 9,
          name: "CARTIER D'AMOUR",
          detail: 'สร้อยคอซี เดอ คาร์เทียร์ (C de Cartier) โรสโกลด์ 750/1000 ประดับเพชรเจียระไนทรงบริลเลียนท์ มีให้เลือกสรรตั้งแต่ 0.18 ถึง 0.34 กะรัต 0.50 ถึง 0.79 กะรัต และ 1.00 ถึง 1.99 กะรัตโปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณีและขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม',
          type: 'สร้อย',
          price: 5000,
          picture: "https://cdn.fbsbx.com/v/t59.2708-21/334623340_730450002051251_2958514449139815311_n.gif?_nc_cat=107&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeG3sAYqr8kupdTTsJqzazppEkLSV-98UcMSQtJX73xRw53hC__TWBSJMzAdrswszB_tZmrenh_S2lpgw8lJ5IpB&_nc_ohc=wiYsJgRr3nQAX9BQ415&_nc_ht=cdn.fbsbx.com&oh=03_AdQ880gk7fWhVUjVVHZnVM3wfq9QJWRskYRUGnnj4je7ww&oe=64075E66",
          color: 'rose gold',
          isvisible: false
        },
        {
          id: 10,
          name: "1895",
          detail: 'สร้อยคอ 1895 แพลทินัม 950/1000 ประดับเพชรเจียระไนทรงบริลเลียนท์ตรงกลาง มีให้เลือกสรรตั้งแต่ 2.00 ถึง 4.99 กะรัต โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณี และขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม',
          type: 'สร้อย',
          price: 2800,
          picture: "https://scontent.xx.fbcdn.net/v/t1.15752-9/334879517_201131522538491_8498163923393477009_n.jpg?stp=dst-jpg_p403x403&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFmdtIJkuN_PSDP1YtfiLku-rxcZDVyQtz6vFxkNXJC3I307zjejZWpM_MjjhiCS3EVJsaRARqDRL7ZRhgkaE68&_nc_ohc=y0EeUsNi_QQAX-pIK3l&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSvkdBtzVdLvuTcdPWeox_bovlBY_8oMRT-EJ0CXLbKqA&oe=642D09E7",
          color: 'platinum',
          isvisible: false
        },
        {
          id: 11,
          name: "C DE CARTIER",
          detail: 'สร้อยคอซี เดอ คาร์เทียร์ (C de Cartier) โรสโกลด์ 750/1000 ประดับไข่มุกเลี้ยงอะโกยา โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณีและขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม',
          type: 'สร้อย',
          price: 4000,
          picture: "https://cdn.fbsbx.com/v/t59.2708-21/333080095_1277349423189916_6509127443942763084_n.gif?_nc_cat=108&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeEHPvFPFUaHPgzf6u1dcPGhKNa-nKJI-HUo1r6cokj4deDo0yyn3isZls3IrXiyIFkeZcED7LiFCiPbJMs_hhXx&_nc_ohc=Cqg34BiQ-YQAX91uGCU&_nc_ht=cdn.fbsbx.com&oh=03_AdTwK5GZNHgDNey6SZOrD2Z0JsQ6HA7iiMdEPzkmqW7HlA&oe=6407374F",
          color: 'rose gold',
          isvisible: false
        },
        {
          id: 12,
          name: "ETINCELLE DE CARTIER",
          detail: 'สร้อยคอเอแตงแซลล์ เดอ คาร์เทียร์ (Etincelle de Cartier) ไวท์โกลด์ 750/1000 ประดับเพชรเจียระไนทรงบริลเลียนท์ 6 เม็ด น้ำหนักรวม 0.26 กะรัต โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณี และขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม',
          type: 'สร้อย',
          price: 3500,
          picture: "https://cdn.fbsbx.com/v/t59.2708-21/333945321_926493382115675_6004629505287452823_n.gif?_nc_cat=100&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeFrkdexOuqKW954zjtsDb7utFLUEltYtY60UtQSW1i1jmP3u7FHPUITf0xhl6z0XZyKWERGVxOnQlQQ31GeYd8N&_nc_ohc=UptePBaAbHAAX_oXyqc&_nc_ht=cdn.fbsbx.com&oh=03_AdSwZXWpPzFxigyq-Eb-jlKIKCy3yMXL7oHF8Kx5JAKH3g&oe=6407827B",
          color: 'white gold',
          isvisible: false
        },
        {
          id: 13,
          name: " CARTIER D'AMOUR (ขนาดเล็กพิเศษ)",
          detail: "กำไลข้อมือคาร์เทียร์ ดามูร์ (Cartier d'Amour) โรสโกลด์ 750/1000 ประดับเพชรเจียระไนทรงบริลเลียนท์ น้ำหนักรวม 0.04 กะรัต ความหนา 1.78 มม. เส้นผ่านศูนย์กลางของลวดลาย 3.79 มม. ความยาว 165 มม. ถึง 185 มม. (สำหรับขนาด 17)โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณีและขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม",
          type: 'กำไล',
          price: 7000,
          picture: "https://cdn.fbsbx.com/v/t59.2708-21/333725882_161455776729160_507205275757562063_n.gif?_nc_cat=101&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeHTlqUfaraOuf1LC2LIrLhQhl4q_DDe8myGXir8MN7ybFM8X6hEmh4QNEg4wC4gwZJ_XS2IRiQxmPP_B-q5UfU-&_nc_ohc=s0ReVweLP_sAX9o0hau&_nc_oc=AQkmiy_OMTUoz6cebFE-3YlewyapnQV66_8_c7Gg83XtmUVfj3KqFXkE3xSM9OSiBayCNMfvrSC8Wuno0CWwVmzT&_nc_ht=cdn.fbsbx.com&oh=03_AdRljktMXRXWxqg81eEOjuT0u4omCMN22mBJM-7_dMXPVA&oe=64075D47",
          color: 'rose gold',
          isvisible: false
        },
        {
          id: 14,
          name: "LOVE",
          detail: "กำไลข้อมือ LOVE เยลโลว์โกลด์ 750/1000 ความกว้าง 2.55 มม. เส้นผ่านศูนย์กลางภายใน 9.7 มม.โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณีและขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม",
          type: 'กำไล',
          price: 6000,
          picture: "https://cdn.fbsbx.com/v/t59.2708-21/333857001_889125362375784_7353738460858294615_n.gif?_nc_cat=101&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeGeBg-oxN3Z2ibQUiPPKf3JUiaAlkAy76RSJoCWQDLvpF4-95s6dXJPr7DNDE3-KChY4Y0p9XMY9aGLTalfElcP&_nc_ohc=AwKv_WWAdh4AX-IjJwi&_nc_ht=cdn.fbsbx.com&oh=03_AdQxKOGf1Utt7dAYgBB2qC5GnxjKn_oMw7t0yps8LeI1hQ&oe=6406FF1F",
          color: 'yellow gold',
          isvisible: false
        },
        {
          id: 15,
          name: "PANTHÈRE DE CARTIER",
          detail: "กำไลข้อมือปองแตร์ เดอ คาร์เทียร์ (Panthère de Cartier) เยลโลว์โกลด์ 750/1000 ประดับออนิกซ์ และซาโวไรท์ โกเมน 2 เม็ด(สำหรับขนาด 17) โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณีและขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม",
          type: 'กำไล',
          price: 8000,
          picture: "https://cdn.fbsbx.com/v/t59.2708-21/333654073_206994602002144_2860600186812148926_n.gif?_nc_cat=108&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeHQ2DkhHIR3QG5JNxHDZe8FVjXXqPbtwLZWNdeo9u3AtljmwPfBPrGOAd_Q3P5Nd5l_BYyH8eXaIlK4JDQwMo-A&_nc_ohc=Tyw3D_tF6BYAX-mCVlP&_nc_ht=cdn.fbsbx.com&oh=03_AdTiKGHunhSjKhg8cl-tjF4-PsP4pVsYHDqfnst8q3guVQ&oe=64070179",
          color: 'yellow gold',
          isvisible: false
        },
        {
          id: 16,
          name: "SANTOS DE CARTIER",
          detail: "กำไลข้อมือโซ่ซานโตส-ดูมงต์ (Santos-Dumont) เยลโลว์โกลด์ 750/1000 ความหนา 2 มม. ความยาว 192 มม. ถึง 205 มม. (สำหรับขนาด 17) โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณีและขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม",
          type: 'กำไล',
          price: 3400,
          picture: "https://cdn.fbsbx.com/v/t59.2708-21/333892269_894875008235867_3731023098635725651_n.gif?_nc_cat=101&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeEON3ANiIOTPqZTPyqvkq71PjXmVitY0lU-NeZWK1jSVQUUSTGKs4z-yF7osZ3Bn8X5DGAuXDvHWj-89hRiFSQz&_nc_ohc=iCplG9UNBgQAX-5cN65&_nc_ht=cdn.fbsbx.com&oh=03_AdQv-QHlm5g3n0RGnfdJ7VhihrLw6jswIImAszTVZxtaqQ&oe=64077CAE",
          color: 'yellow gold',
          isvisible: false
        },
        {
          id: 17,
          name: "JUSTE UN CLOU",
          detail: "กำไลข้อมือจุสต์ เอิง คลู (Juste un Clou) โรสโกลด์ 750/1000 ประดับเพชรเจียระไนทรงบริลเลียนท์ 624 เม็ด น ้าหนักรวม 3.61 กะรัต ความกว้าง 7 มม. (สำหรับขนาด 17)โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณีและขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม",
          type: 'กำไล',
          price: 5200,
          picture: "https://cdn.fbsbx.com/v/t59.2708-21/333930125_214604554417975_2843341801637767243_n.gif?_nc_cat=111&ccb=1-7&_nc_sid=041f46&_nc_eui2=AeEkOtloqKrE6an7rmLh0ppBOhnwDN6x4Y46GfAM3rHhjtqFwFaqE77ObnMQZsRVwDlq9h207YpsOo2byfhatxQ2&_nc_ohc=avALiQNMDAEAX_lXeI6&_nc_ht=cdn.fbsbx.com&oh=03_AdQJxjsvgTzWQHxsrvhWC9ccV2Fxfv1pwYQ-TRT-ljJvdw&oe=64071D38",
          color: 'rose gold',
          isvisible: false
        },
        {
          id: 18,
          name: "PANTHÈRE DE CARTIER",
          detail: "กำไลข้อมือปองแตร์ เดอ คาร์เทียร์ (Panthère de Cartier) โรสโกลด์ 750/1000 เคลือบแลคเกอร์สีดำ ประดับซาโวไรท์ โกเมนและเพชรเจียระไนทรงบริลเลียนท์ 19 เม็ด น้ำหนักรวม 0.07 กะรัต ความยาวของสายโซ่ทั้งหมด 110 มม. ความยาวของลวดลาย 36.29 มม. (สำหรับขนาด 17) โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณี และขนาดอาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม",
          type: 'กำไล',
          price: 8200,
          picture: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/333999943_233017319161917_8145003611868657679_n.jpg?stp=dst-jpg_p403x403&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFqu02ED4zclxgNMlXvBKe5ARn6wkaNPIoBGfrCRo08isf_oQmyxXY4cvCr43gqCA7bB4_KSeHzcc_r1lIcpyJZ&_nc_ohc=V4Pfww2cuukAX9E1Q5V&_nc_ht=scontent.fcnx3-1.fna&oh=03_AdRKgqJUopG2EBVX6h3A83VQSBgxopXPNzclw_QwgxJw8g&oe=642D2ACD",
          color: 'rose gold',
          isvisible: false
        },

      ],
      cart: [
        {
          id: 1,
          name: 'ÉTINCELLE DE CARTIER',
          detail:
            ' น้ำหนักรวม 0.64 กะรัต จำหน่ายเป็นคู่ ความกว้างของแหวนแต่ละวง 1.52 มม. ความหนา 1.35 มม. (สำหรับขนาด 52)โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณี และขนาด อาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม',
          type: 'แหวน',
          price: 3400,
          picture:
            'https://scontent.xx.fbcdn.net/v/t1.15752-9/334014367_517851297063574_2190696322604112583_n.jpg?stp=dst-jpg_p403x403&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHC29kb_2lp4oDlMvZzOKICA8hI7NdxurEDyEjs13G6sWh2uYggU4NxpARIHv72fUF6QxQq3HxEmprpfmBDetB8&_nc_ohc=qPat-FxJtboAX_X05lz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRuv7rM0jD8ZrsWszTAElAyWb0VvL09AK43GVODA2u9fw&oe=6423CC23',
          color: 'rose gold',
          isvisible: false
        },
      ]
    }
  }
}
</script>

<style scoped>
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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.cart-content {
  box-shadow: 0 2px 8px black;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}
.cart-content h2 {
  font-size: 1.5rem;
  border-bottom: 4px solid #ccc;
  font-weight: bold;
  color: purple;
  margin: 0 0 0.5rem 0;
}

.li {
  margin: 0.5rem;
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
}
.cancel-button {
  background: #ffc;

  border-color: #fa5;
}
table {
  color: #000;
  text-shadow: #fff 0.1em 0.1em 0.1em;
}

table button {
  color: #000;
  background: #aff;
  width: 80px;
  height: 35px;
}
.table-width {
  width: 1rem;
}
.typeButton button {
  width: 25vw;
  height: 5vw;
  margin: 10px;
  font-size: 1.4rem;
  color: #fff;
  text-shadow: none;
}


</style>