import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import axios from 'axios'
import parse from 'csv-parse/lib/sync'
import VueI18n from 'vue-i18n'
import { Smoothie } from './models/smoothie'
import { IngredientLocation } from './models/ingredientLocation'
import { Vue2Storage } from 'vue2-storage'

require('@/assets/common.css')

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      smoothiePageHeader: 'Smoothies',
      ingredientLocationPageHeader: 'Ingredient Locations',
      coursePageHeader: 'Courses',
      ingredientPageHeader: 'Ingredient',
      worldMapPageHeader: 'World Map',
      starredPageHeader: 'Starred',
      world: 'World',
      stageNumber: 'Stage',
      ingredient: 'Ingredient',
      course: 'Course',
      difficulty: 'Difficulty',
      name: 'Name',
      recovery: 'Recovery',
      effect: 'Effect',
      description: 'Description',
      scenario: 'Scenario'
    },
    effect: {
      EXTRA_TURN: 'Extra turn',
      DOUBLE_MONEY: 'Doubles money',
      DOUBLE_EXP: 'Doubles EXP',
      DOUBLE_INGREDIENT: 'Doubles ingredient drops',
      GUARANTEED_RUSH: 'Guaranteed rush',
      PREVENT_MONSTER: 'Prevents monsters from appearing',
      DEF_UP: 'Defense power',
      REVIVE: 'Drink after being defeated to revive',
      RECHARGE_SKILL: 'Recharges skill',
      CLEAR_NEGATIVE: 'Cancels negative status effects',
      EASIER: 'Makes jogging and knee lifts easier',
      UP: 'Attack power',
      SWITCH: 'Switches skill color to ',
      ADD: 'Increase '
    },
    scenario: {
      Battle: 'Battle',
      Course: 'Course'
    }
  },
  zh: {
    message: {
      smoothiePageHeader: '果汁',
      ingredientLocationPageHeader: '素材位置',
      coursePageHeader: '关卡类型',
      ingredientPageHeader: '素材',
      worldMapPageHeader: '世界地图',
      starredPageHeader: '收藏',
      world: '世界',
      stageNumber: '关卡',
      ingredient: '素材',
      course: '关卡类型',
      difficulty: '难度',
      name: '名称',
      recovery: '回复量',
      effect: '效果',
      description: '获取方式',
      scenario: '使用时机'
    },
    effect: {
      EXTRA_TURN: '连续行动确定',
      DOUBLE_MONEY: '双倍金钱',
      DOUBLE_EXP: '双倍经验',
      DOUBLE_INGREDIENT: '双倍素材掉落',
      GUARANTEED_RUSH: '疯狂连续动作确定',
      PREVENT_MONSTER: '魔兽不再出现',
      DEF_UP: '防御力提升',
      REVIVE: '复活',
      RECHARGE_SKILL: '待机回合重置',
      CLEAR_NEGATIVE: '消除受到的负面效果',
      EASIER: '可以轻松做到冲刺/抬腿',
      UP: '攻击力提升',
      SWITCH: '替换技能颜色',
      ADD: '增加'
    },
    scenario: {
      Battle: '战斗',
      Course: '关卡'
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
    smoothieEnToID: [],
    courses: [],
    stages: [],
    // values should be within [0, 118].
    stageNumberToID: {},
    selectedIngredient: 0,
    ingredientLocations: [],
    ingredientPrice: {}
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
    updateSmoothieTrans (state, rawIngredientTrans) {
      state.smoothieEnToID =
        Object.assign({}, ...rawIngredientTrans.map((r) => ({ [r[1]]: r[0] })))
      messages.en.smoothies = rawIngredientTrans.map((r) => r[1])
      messages.zh.smoothies = rawIngredientTrans.map((r) => r[2])
    },
    updateIngredientTrans (state, rawIngredientTrans) {
      state.ingredientEnToID =
        Object.assign({ '': -1 }, ...rawIngredientTrans.map((r) => ({ [r[1]]: r[0] })))
      messages.en.ingredients = rawIngredientTrans.map((r) => r[1])
      messages.en.ingredients[-1] = '-'
      messages.zh.ingredients = rawIngredientTrans.map((r) => r[2])
      messages.zh.ingredients[-1] = '-'
    },
    updateCourses (state, courses) {
      state.courses = courses
    },
    updateStages (state, stages) {
      state.stages = stages
      for (const [i, stage] of stages.entries()) {
        const number = stage[1]
        // eslint-disable-next-line no-prototype-builtins
        if (state.stageNumberToID.hasOwnProperty(number)) {
          continue
        }
        state.stageNumberToID[number] = i
      }
    },
    updateSelectedIngredient (state, ingredient) {
      state.selectedIngredient = ingredient
    },
    updateIngredientLocations (state, newVal) {
      state.ingredientLocations = newVal
    },
    updateIngredientPrice (state, ingredientPrice) {
      state.ingredientPrice = {}
      for (let i = 0; i < ingredientPrice.length; i++) {
        const coins = ingredientPrice[i][0]
        const id = state.ingredientEnToID[ingredientPrice[i][1]]
        state.ingredientPrice[id] = coins
      }
    }
  },
  actions: {
    async fetchData (state) {
      axios.all([
        axios.get(process.env.BASE_URL + 'data/ingredient.csv'),
        axios.get(process.env.BASE_URL + 'data/smoothie.csv'),
        axios.get(process.env.BASE_URL + 'data/ingredient_en_zh.csv'),
        axios.get(process.env.BASE_URL + 'data/smoothie_en_zh.csv'),
        axios.get(process.env.BASE_URL + 'data/course.csv'),
        axios.get(process.env.BASE_URL + 'data/stage.csv'),
        axios.get(process.env.BASE_URL + 'data/ingredient_location.csv'),
        axios.get(process.env.BASE_URL + 'data/ingredient_price.csv')
      ]).then(axios.spread((
        ingredientResponse,
        smoothieResponse,
        ingredientTransResponse,
        smoothieTransResponse,
        coursesResponse,
        stageResponse,
        ingredientLocationResponse,
        ingredientPriceResponse) => {
        const ingredients = parse(ingredientResponse.data, { from_line: 2 })
        const smoothies = parse(smoothieResponse.data, { from_line: 2 })
        const rawIngredientTrans = parse(ingredientTransResponse.data, { from_line: 2 })
        const rawSmoothieTrans = parse(smoothieTransResponse.data, { from_line: 2 })
        const courses = parse(coursesResponse.data, { from_line: 2 })
        const stages = parse(stageResponse.data, { from_line: 2 })
        const ingredientLocations = parse(ingredientLocationResponse.data, { from_line: 2 })
        const ingredientPrice = parse(ingredientPriceResponse.data, { from_line: 2 })
        state.commit('updateIngredients', ingredients)
        state.commit('updateSmoothies', smoothies.map(x => new Smoothie(x)))
        state.commit('updateIngredientTrans', rawIngredientTrans)
        state.commit('updateSmoothieTrans', rawSmoothieTrans)
        state.commit('updateCourses', courses)
        state.commit('updateStages', stages)
        state.commit('updateIngredientLocations', ingredientLocations.map(x => new IngredientLocation(x)))
        state.commit('updateIngredientPrice', ingredientPrice)
      }))
    }
  }
})

store.dispatch('fetchData')

Vue.use(Vue2Storage, {
  prefix: 'app_',
  driver: 'local',
  ttl: 0 // forever
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
