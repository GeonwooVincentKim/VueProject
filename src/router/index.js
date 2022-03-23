import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "../views/DataBinding.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";

const routes = [
  {
    // Path -> Home
    // Name -> Home
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    // Path -> About
    // Name -> About
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: "DataBindingHtml",
    component: DataBindingHtml
  },
  {
    path: '/databindinginputtext',
    name: "DataBindingInputText",
    component: DataBindingInputText
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
