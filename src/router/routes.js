import Router from 'vue-router'
import Vue from 'vue'
import firebase from 'firebase'
Vue.use(Router)

const routes = [ 
  {
    path: '/',
    name: 'home',
    component: () => import('pages/Home.vue'),
  },  
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/login.vue'),
  },  
  {
    path: '/details/:idCategory',
    name: 'details',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Details.vue') }
    ]
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Mapa.vue') }
    ]
  },
  {
    path: '/closet',
    name: 'closet',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Closet.vue') }
    ]
  },  
  {
    path: '/conf',
    name: 'conf',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Conf.vue') }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/register.vue'),
  },  
  {
    path: '/slider',
    name: 'slider',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Slider.vue') }
    ]
  }   
]



export default routes
