<template>
    <form @submit.prevent="addNewItem()">
      <p>Nowy element</p>
      <input v-model="newItem"
      v-validate="'required|min:3'">
      <br><p>Cena</p>
      <input
      v-model="newPrice"
      v-validate="'required|min:1'">
      <br><button>Dodaj do listy</button>
    </form>
</template>

<script>
import store from '../store.js';
export default {
  name: 'myForm',
  data: function (){
    return {
      newItem: "",
      newPrice: ""
    }
  },
  methods: {
    addNewItem: function() {
      this.$validator.validateAll().then(result => {
       if (!result) {
         return;
       }
       var newProduct = {"item": this.newItem,
       "price": this.newPrice};
       store.dispatch('addProductToOffer', newProduct);
       this.newItem = "";
       this.newPrice = "";
       this.$validator.reset();
     });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
