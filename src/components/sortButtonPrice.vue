<template>
  <div>
    <button @click="sortByPrice">Sortuj po cenie</button>
    <button @click="sortByName">Sortuj po nazwie</button>
  </div>
</template>

<script>
import store from '../store.js';

export default {
  name: 'priceSort',
  data: function (){
    return {
      myList: store.state.List
    }
  },
  methods: {
    sortByPrice: function(sortByPrice) {
      store.dispatch('sortByPrice', "price");
    },
    sortByName: function(sortByPrice) {
      store.dispatch('sortByPrice', "item");
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
