import Vue from 'vue'
import VueRouter from 'vue-router'
import SmoothiePage from '../views/SmoothiePage.vue'
import IngredientLocationPage from '../views/IngredientLocationPage.vue'
import CoursePage from '../views/CoursePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SmoothiePage',
    component: SmoothiePage
  },
  {
    path: '/ingredient_location',
    name: 'IngredientLocationPage',
    component: IngredientLocationPage
  },
  {
    path: '/course',
    name: 'CoursePage',
    component: CoursePage
  }
]

const router = new VueRouter({
  routes
})

export default router
