import Router from 'vue-router'
import Vue from 'vue'
import firebase from 'firebase'
Vue.use(Router)

const routes = [{
        path: '/',
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
        path: '/details/:idCategory',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            name: 'details',
            component: () =>
                import ('pages/Details.vue')
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
                import ('pages/Mapa.vue')
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
                import ('pages/Closet.vue')
        }]
    },
    {
        path: '/conf',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            name: 'conf',
            component: () =>
                import ('pages/Conf.vue')
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
    {
        path: '/subir',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            name: 'subir',
            component: () =>
                import ('pages/index2.vue')
        }]
    }
]



export default routes