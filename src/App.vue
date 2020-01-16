<template>
  <div id="app">
    
    <div id="nav">
      <div id="menu">
      <router-link to="/">Categorias</router-link>&nbsp;
      

      </div>
    </div>
    
    <router-view/>

        <b-modal id="my-modal" title="Pedidos">
                 <b-row align-v="center">
                  <b-col class="item" cols="6" v-for="item in listaSalva" :key="item.a">
                    <cardProduto  :produto="item" />
                  </b-col>
                </b-row>
        </b-modal>

     <b-button
        v-b-modal="'my-modal'"
     class="float-btn"
    >+</b-button>
  </div>
</template>

<script>
 
 import { getLista} from '@/global'
export default {
 
  data() {
    return {
      listaSalva: []  
    }
  },
  methods: {
   
  },
  mounted(){
    this.listaSalva = getLista
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#menu {
  background: #ccc;

 padding: 5px; 
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: grey;
  
}

#nav a.router-link-exact-active {
  color: white;
}

.float-btn{
  width: 80px;
  height: 80px;
  background: #009879;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 50%;
  color: #ffffff;
  font-size: 40px;
  box-shadow: 2px 2px 5px rgba(0,  0, 0, 0.25);
  position: fixed;
  right: 20px;
  position: 20px;
  bottom: 20px;
}

.float-btn:active {
  background: #007D63;
}

</style>

 