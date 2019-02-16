<template>
  <div>
    <p>Moje zakupy</p>
    <br><ul>
      <li v-for="(food, index) in myShopItems">
        {{food.item}}
        <br><p>Cena: {{food.price}} zł</p>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store.js';

export default {
  name: 'myForm',
  data: function (){
    return {
      shopItems: store.state.Items,
    }
  },
  computed: {
    myShopItems: function() {
      return this.shopItems
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
