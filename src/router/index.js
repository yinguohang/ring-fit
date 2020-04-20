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
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
