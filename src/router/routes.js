
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
  // {
  //   path: '/auth2',
  //   name: 'auth2',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Auth.vue') }
  //   ]
  // },
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
      { path: '', component: () => import('pages/modal.vue') }
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
      { path: '', component: () => import('pages/Mapa.vue') }
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
  // {
  //   path: '/auth',
  //   name: 'auth',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/AuthFinal.vue') }
  //   ]
  // },
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
    ]
  }
  
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
