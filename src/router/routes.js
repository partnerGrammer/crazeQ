import Router from 'vue-router'
import Vue from 'vue'
import firebase from 'firebase'
Vue.use(Router)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('pages/Home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('pages/user/login.vue'),
    },
    {
        path: '/details/:id',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            name: 'details',
            props: true,
            component: () =>
                import ('pages/Details.vue')
        }]
    },
    {
        path: '/store/:id',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            name: 'store',
            props: true,
            component: () =>
                import ('pages/Store.vue')
        }]
    },
    {
        path: '/map',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            name: 'map',
            component: () =>
                import ('pages/Map.vue')
        }]
    },
    {
        path: '/closet',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            name: 'closet',
            component: () =>
                import ('pages/user/Closet.vue')
        }]
    },
    {
        path: '/settings',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            name: 'settings',
            component: () =>
                import ('pages/Settings.vue')
        }]
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('pages/user/register.vue'),
    },
    {
        path: '/slider',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            name: 'slider',
            component: () =>
                import ('pages/Slider.vue'),
            meta: {
                autenticado: true,
            }
        }]
    },
]



export default routes