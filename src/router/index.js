import Vue from 'vue'
import VueRouter from 'vue-router'
import SmoothiePage from '../views/SmoothiePage.vue'
import IngredientLocationPage from '../views/IngredientLocationPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SmoothiePage',
    component: SmoothiePage
  },
  {
    path: '/ingredient_location',
    name: 'IngredientLocation',
    component: IngredientLocationPage
  }
]

const router = new VueRouter({
  routes
})

export default router
