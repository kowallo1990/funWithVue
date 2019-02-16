<template>
  <div>
    <AddItem></AddItem>
    <ListElement></ListElement>
    <SortButtonPrice></SortButtonPrice>
    <ShopingBag></ShopingBag>
    <DogPic></DogPic>
  </div>
</template>

<script>
import store from '../store.js';
import AddItem from './addItem.vue';
import ListElement from './listElement.vue';
import ShopingBag from './shopingBag.vue';
import SortButtonPrice from './sortButtonPrice.vue';
import DogPic from './dogPic.vue';

export default {
  name: 'myForm',
  components: {
    AddItem,
    ListElement,
    ShopingBag,
    SortButtonPrice,
    DogPic
  },
  data: function (){
    return {
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
