<template>
  <div class="home">

    
     <b-container class="bv-example-row">
        <b-row align-v="center">
    
       <b-col class="item"  cols="6"   v-for="item in lista" :key="item.a">
        
        <CardCategoria 
         :categoria="item"
        />
   </b-col>
  
          </b-row>
 
        
</b-container>
  </div>
</template>

<script>
 import CardCategoria from '../components/CardCategoria.vue'
 import axios from "axios";
 import {baseApiUrl} from '@/global'
export default {
  name: 'home',
  components: {
   CardCategoria
  },
  data() {
    return {
      lista: [],
      items: [
          {
            text: 'Categorias',
            href: '/'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
    }
  },methods: {
      getCategories() {
    
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then(res => {
        this.lista = res.data
      });
    },
  },
  mounted(){
   
   this.lista = this.getCategories()
  }
}
</script>

<style >
    .item{
      padding: 20px;
    }
</style>
