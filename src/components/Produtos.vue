<template>
  <div>
    <b-container>
      <b-row align-v="center">
        <b-col class="item" cols="6" v-for="item in lista" :key="item.a">
          <cardProduto :produto="item" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import { baseApiUrl, showError } from "@/global";
import cardProduto from "../components/CardProduto";
export default {
  components: {
    cardProduto
  },
  data() {
    return {
      objeto: {},
      lista: []
    };
  },

  methods: {
    getProducts() {
      axios
        .post(`${baseApiUrl}/products`, this.objeto)
        .then(res => {
          this.lista = res.data;
        })
        .catch(showError);
    }
  },
  mounted() {
    this.objeto.category = parseInt(this.$route.params.id);
    this.getProducts();
  }
};
</script>

<style lang="stylus"></style>