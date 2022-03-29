import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "../views/DataBinding.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import DataBindingInputNumber from "../views/DataBindingInputNumber.vue";
import DataBindingTextarea from "../views/DataBindingTextarea.vue";
import DataBindingSelect from "../views/DataBindingSelect";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingCheckbox2 from "../views/DataBindingCheckbox2.vue";

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
  },
  {
    path: '/dataBindingInputNumber',
    name: "DataBindingInputNumber",
    component: DataBindingInputNumber
  },
  {
    path: '/dataBindingTextarea',
    name: "DataBindingTextarea",
    component: DataBindingTextarea
  },
  {
    path: '/dataBindingSelect',
    name: "DataBindingSelect",
    component: DataBindingSelect
  },
  {
    path: '/dataBindingCheckbox',
    name: "DataBindingCheckbox",
    component: DataBindingCheckbox
  },
  {
    path: '/dataBindingCheckbox2',
    name: "DataBindingCheckbox2",
    component: DataBindingCheckbox2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
