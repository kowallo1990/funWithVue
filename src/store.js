import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogsIMG: ["https://i.redd.it/5dcy8tk279p11.jpg"],
    List: [{"item":"lody",
              "price": 4},
              {"item":"ciastka",
              "price": 12},
              {"item":"chipsy",
              "price": 3},
              {"item":"mleko",
              "price": 7},
              {"item":"pizza",
              "price": 9}],
    Items: []
  },
  mutations: {
    addProductToOffer(state, newProduct) {
      state.List.push(newProduct);
    },
    addItemsToCart(state, myItem) {
      state.Items.push(myItem);
    },
    sortByPrice(state, myProperty) {
      function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
        }
        return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
        }
      }
      state.List.sort(dynamicSort(myProperty));
    },
    addNewDogPic(state, adress) {
      state.dogsIMG.push(adress);
    }
  },
  actions: {
    addProductToOffer(context, newProduct) {
      context.commit('addProductToOffer', newProduct);
    },
    addItemsToCart(context, myItem) {
      context.commit('addItemsToCart', myItem);
    },
    sortByPrice(context, myProperty) {
      context.commit('sortByPrice', myProperty);
    },
    addNewDogPic(context, adress) {
      context.commit('addNewDogPic', adress);
    }
  }
})
