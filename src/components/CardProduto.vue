<template>
  <b-row no-gutters>
    <b-col md="6">
      <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0" alt="Produtos"></b-card-img>
    </b-col>
    <b-col md="6">
      <b-card-body :title="produto.nome">
        <b-card-text>{{produto.descricao}}</b-card-text>
        <h3>Valor R$ {{produto.preco.toFixed(2)}} & quantidade: {{qtd}}</h3>
        <b-button @click="qtd=qtd+1">+</b-button>

        <b-button v-if="qtd>=1" @click="qtd=qtd-1">-</b-button>
      </b-card-body>
    </b-col>
  </b-row>
</template>

<script>
 
 import {setLista} from '@/global'
export default {
  data() {
    return {
      qtd: 0,
      total: 0.0
    };
  },
  props: {
    produto: {
      type: Object,
      default: null
    }
  },
  
  methods: {
    calcula() {
      this.total = Number(
        Number(this.qtd) * Number(this.produto.preco)
      ).toFixed(2);
    }
  },

  watch: {
    qtd: {
      handler(valor) {
        if (valor) {
          this.calcula();
          
          if (this.qtd > 0) {
            
            const produto = { ...this.produto, qtd: valor };
            //   const lista = getLista
            let lista = []
              lista.push(produto)
              setLista(lista)

          }
        }
        // else {
        //     const lista = getLista
       
        //     const produto = { ...this.produto, qtd: valor };
        //     const index = lista.filter((item) => {
        //         return item.id === produto.id;
        //     })

        //      lista.splice(index, 1);
        //      setLista(lista)
        // }  
      },
      deep: true
    }
  }
};
</script>

<style  >
</style>