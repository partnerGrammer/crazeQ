import Vue from 'vue'
import VueRouter from 'vue-router'

import { auth } from '../firebase'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function( /* { store, ssrContext } */ ) {
    const Router = new VueRouter({
        scrollBehavior: () => ({ x: 0, y: 0 }),
        routes,

        // Leave these as is and change from quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        mode: process.env.VUE_ROUTER_MODE,
        base: process.env.VUE_ROUTER_BASE
    })

    // Router.beforeEach((to, from, next) => {
    //     let user = auth.currentUser

    //     if (to.matched.some(record => record.meta.autenticado)) {
    //         if (user) {
    //             if (user.providerData[0].providerId == 'password' && !user.emailVerified) {
    //                 console.log('entrando')
    //                     //next({ name: 'slider' })
    //                     //next()
    //             } else {
    //                 next()
    //             }
    //         } else {
    //             next({ name: 'login' })
    //         }
    //     } else {
    //         next()
    //     }
    // })

    return Router
}