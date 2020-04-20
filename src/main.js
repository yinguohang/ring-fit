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
    ingredients: []
  },
  mutations: {
    updateSelectedIngredients (state, newVal) {
      state.selectedIngredients = newVal
    },
    updateIngredients (state, newVal) {
      state.ingredients = newVal
    }
  },
  actions: {
    async fetchIngredients (state) {
      axios.get(process.env.BASE_URL + 'data/ingredient.csv').then(
        response => {
          state.commit('updateIngredients', parse(response.data, {
            from_line: 2,
            quote: '|'
          }))
        })
    }
  }
})

store.dispatch('fetchIngredients')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
