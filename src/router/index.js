import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "../views/DataBinding.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import DataBindingInputNumber from "../views/DataBindingInputNumber.vue";
import DataBindingTextarea from "../views/DataBindingTextarea.vue";
import DataBindingSelect from "../views/DataBindingSelect.vue";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingCheckbox2 from "../views/DataBindingCheckbox2.vue";
import DataBindingAttribute from "../views/DataBindingAttribute.vue";
import DataBindingButton from "../views/DataBindingButton.vue";

import DataBindingClass from "../views/DataBindingClass.vue";
import DataBindingClass2 from "../views/DataBindingClass2.vue";

import DataBindingStyle from "../views/DataBindingStyle.vue";
import DataBindingInlineStyle from "../views/DataBindingInlineStyle.vue";

import DataBindingList from "../views/DataBindingList.vue";
import RenderingVIf from "../views/RenderingVIf.vue";

import EventClick from "../views/EventClick.vue";
import EventChange from "../views/EventChange.vue";

import ComputedExample from "../views/ComputedExample.vue";
import WatchExample from "../views/WatchExample.vue";
import WatchExample2 from "../views/WatchExample2.vue";

import DataBindingList2 from "../views/DataBindingList2";

import NestedComponent from "../views/NestedComponent.vue";

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
  },
  {
    path: '/dataBindingAttribute',
    name: "DataBindingAttribute",
    component: DataBindingAttribute
  },
  {
    path: '/dataBindingButton',
    name: "DataBindingButton",
    component: DataBindingButton
  },
  {
    path: '/dataBindingClass',
    name: "DataBindingClass",
    component: DataBindingClass
  },
  {
    path: '/dataBindingClass2',
    name: "DataBindingClass2",
    component: DataBindingClass2
  },
  {
    path: '/dataBindingStyle',
    name: "DataBindingStyle",
    component: DataBindingStyle
  },
  {
    path: '/dataBindingInlineStyle',
    name: "DataBindingInlineStyle",
    component: DataBindingInlineStyle
  },
  {
    path: '/dataBindingList',
    name: "DataBindingList",
    component: DataBindingList
  },
  {
    path: '/renderingVIf',
    name: "RenderingVIf",
    component: RenderingVIf
  },
  {
    path: '/eventClick',
    name: "EventClick",
    component: EventClick
  },
  {
    path: '/eventChange',
    name: "EventChange",
    component: EventChange
  },
  {
    path: '/computedExample',
    name: 'ComputedExample',
    component: ComputedExample
  },
  {
    path: '/watchExample',
    name: 'WatchExample',
    component: WatchExample
  },
  {
    path: '/watchExample2',
    name: 'WatchExample2',
    component: WatchExample2
  },
  {
    path: '/dataBindingList2',
    name: "DataBindingList2",
    component: DataBindingList2
  },
  {
    path: '/nested',
    name: 'NestedComponent',
    component: NestedComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
