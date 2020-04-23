import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import axios from 'axios'
import parse from 'csv-parse/lib/sync'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedIngredients: [],
    ingredients: [],
    selectedSmoothies: [],
    ingredientsReferred: [],
    smoothies: []
  },
  mutations: {
    updateIngredientReferred (state, newVal) {
      state.ingredientsReferred = newVal
    },
    updateSelectedIngredients (state, newVal) {
      state.selectedIngredients = newVal
    },
    updateSelectedSmoothies (state, newVal) {
      state.selectedSmoothies = newVal
    },
    updateIngredients (state, newVal) {
      state.ingredients = newVal
    },
    updateSmoothies (state, newVal) {
      state.smoothies = newVal
    },
    flipSmoothie (state, newVal) {
      if (state.selectedSmoothies.includes(newVal)) {
        state.selectedSmoothies = state.selectedSmoothies.filter(item => item !== newVal)
      } else {
        state.selectedSmoothies.push(newVal)
      }
    }
  },
  actions: {
    async fetchData (state) {
      axios.all([
        axios.get(process.env.BASE_URL + 'data/ingredient.csv'),
        axios.get(process.env.BASE_URL + 'data/smoothie.csv')
      ]).then(axios.spread((ingredientResponse, smoothieResponse) => {
        const ingredients = parse(ingredientResponse.data, {
          from_line: 2
        })
        const smoothies = parse(smoothieResponse.data, {
          from_line: 2
        })
        state.commit('updateIngredients', ingredients)
        state.commit('updateSmoothies', smoothies)
      }))
    }
  }
})

store.dispatch('fetchData')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
