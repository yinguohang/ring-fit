import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import axios from 'axios'
import parse from 'csv-parse/lib/sync'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      smoothiePageHeader: 'Smoothies',
      ingredientLocationPageHeader: 'Ingredient Locations'
    }
  },
  zh: {
    message: {
      smoothiePageHeader: '果汁',
      ingredientLocationPageHeader: '素材位置'
    }
  }
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

const store = new Vuex.Store({
  state: {
    selectedIngredients: [],
    ingredients: [],
    selectedSmoothies: [],
    ingredientsReferred: [],
    smoothies: [],
    ingredientEnToID: [],
    smoothieEnToID: []
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
    },
    updateIngredientTrans (state, rawIngredientTrans) {
      state.ingredientEnToID =
        Object.assign({ '': -1 }, ...rawIngredientTrans.map((r) => ({ [r[1]]: r[0] })))
      messages.en.ingredients = rawIngredientTrans.map((r) => r[1])
      messages.en.ingredients[-1] = '-'
      messages.zh.ingredients = rawIngredientTrans.map((r) => r[2])
      messages.zh.ingredients[-1] = '-'
    },
    updateSmoothieTrans (state, rawIngredientTrans) {
      state.smoothieEnToID =
        Object.assign({}, ...rawIngredientTrans.map((r) => ({ [r[1]]: r[0] })))
      messages.en.smoothies = rawIngredientTrans.map((r) => r[1])
      messages.zh.smoothies = rawIngredientTrans.map((r) => r[2])
    }
  },
  actions: {
    async fetchData (state) {
      axios.all([
        axios.get(process.env.BASE_URL + 'data/ingredient.csv'),
        axios.get(process.env.BASE_URL + 'data/smoothie.csv'),
        axios.get(process.env.BASE_URL + 'data/ingredient_en_zh.csv'),
        axios.get(process.env.BASE_URL + 'data/smoothie_en_zh.csv')
      ]).then(axios.spread((
        ingredientResponse,
        smoothieResponse,
        ingredientTransResponse,
        smoothieTransResponse) => {
        const ingredients = parse(ingredientResponse.data, { from_line: 2 })
        const smoothies = parse(smoothieResponse.data, { from_line: 2 })
        const rawIngredientTrans = parse(ingredientTransResponse.data, { from_line: 2 })
        const rawSmoothieTrans = parse(smoothieTransResponse.data, { from_line: 2 })
        state.commit('updateIngredients', ingredients)
        state.commit('updateSmoothies', smoothies)
        state.commit('updateIngredientTrans', rawIngredientTrans)
        state.commit('updateSmoothieTrans', rawSmoothieTrans)
      }))
    }
  }
})

store.dispatch('fetchData')

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
