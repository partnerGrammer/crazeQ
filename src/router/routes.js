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
    path: '/details',
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
      { path: '', component: () => import('pages/modal2.vue') }
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
    path: '/modal',
    name: 'modal',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/modal2.vue') }
    ]
  },
  {
    path: '/conf',
    name: 'conf',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Conf.vue') }
    ]
    ,
    meta:{
      requiresAuth : true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/register.vue'),
  },  
  {
    path: '/conf2',
    name: 'conf2',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Conf2.vue') }
    ]
  },
  {
    path: '/slider',
    name: 'slider',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ],
    meta:{
      requiresAuth : true
    }
  }
  ,
  {
    path: '/slider2',
    name: 'slider2',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index2.vue') }
    ],
    meta:{
      requiresAuth : true
    }
  }
  
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
  

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
  let user = firebase.auth.currentUser;
  if(user){
    next();
  }else{
    next({
      name: 'login'
    })
  }
  }else{
    next();
  }
  
})

export default routes
