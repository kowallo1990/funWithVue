<template>
  <ul>
    <li v-for="(food, index) in listOfFood" >
      {{food.item}}
      <br><p>Cena: {{food.price}} zł</p>
      <br><button @click="addElement(index)">Dodaj</button>
    </li>
  </ul>
</template>

<script>
import store from '../store.js';
import AddItem from './addItem.vue';

export default {
  name: 'myForm',
  components: {
    AddItem
  },
  data: function (){
    return {
      myList: store.state.List
    }
  },
  computed: {
    listOfFood: function() {
      return this.myList
    }
  },
  methods: {
    addElement: function(index) {
      store.dispatch('addItemsToCart', this.myList[index]);
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
