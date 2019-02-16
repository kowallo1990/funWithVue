<template>
  <div>
    <input v-model="addDoggie">
    <button @click="addRandomDoggiePhoto">Dodaj zdjęcie</button>
    <ul>
      <li v-for="photo in myDogPhotography">
        <div class="doggie" v-bind:style="{ backgroundImage: 'url(' + photo + ')' }"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store.js';
import axios from 'axios';

export default {
  name: 'dogPic',
  data: function (){
    return {
      myDogPic: store.state.dogsIMG,
      addDoggie: "",

    }
  },
  computed: {
    myDogPhotography: function() {
      return this.myDogPic
    }
  },
  methods: {
    addRandomDoggiePhoto: function() {
       if (this.addDoggie) {
         axios.get('https://dog.ceo/api/breed/' + this.addDoggie + "/images/random").then(
         res => {
           store.dispatch('addNewDogPic', res.data.message);
         }).catch(function (error) {
           alert("Nie ma takiej rasy psa")
         });

       }

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
.doggie {
  width: 300px;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
