<template>
  a

  </template>
  
  <script>
  //  import product from "../stores/product.json";
  
  import CartProduct from './CartProduct.vue'
  
  export default {
    name: 'ListCart',
  
    components: {
      //CartProduct
    },
    methods:{
      togggleShow(id){
        console.log(id)
        this.product = this.product.map((item)=>{
          if(item.id === id){
            return {...item,isvisible:!item.isvisible}
          }
          return item
        })
      },
      
    },
    data() {
      return {
      
        cartProduct: [
            { 
          id:1,
          name: 'ÉTINCELLE DE CARTIER',
          detail:" น้ำหนักรวม 0.64 กะรัต จำหน่ายเป็นคู่ ความกว้างของแหวนแต่ละวง 1.52 มม. ความหนา 1.35 มม. (สำหรับขนาด 52)โปรดทราบว่าน้ำหนักกะรัต จำนวนอัญมณี และขนาด อาจแตกต่างกันไปตามขนาดของสินค้าที่คุณสั่งซื้อ โปรดติดต่อเราสำหรับรายละเอียดเพิ่มเติม",
          type:"แหวน",
          price:249000,
          picture:"https://scontent.xx.fbcdn.net/v/t1.15752-9/334014367_517851297063574_2190696322604112583_n.jpg?stp=dst-jpg_p403x403&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHC29kb_2lp4oDlMvZzOKICA8hI7NdxurEDyEjs13G6sWh2uYggU4NxpARIHv72fUF6QxQq3HxEmprpfmBDetB8&_nc_ohc=qPat-FxJtboAX_X05lz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRuv7rM0jD8ZrsWszTAElAyWb0VvL09AK43GVODA2u9fw&oe=6423CC23",
          color:"rose gold",
          isvisible: false
        },

          
        ]
      }
    }
  }
  </script>
  
  <style scoped>

  </style>