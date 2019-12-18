import store from '../store'
import { auth } from '../firebase'
import router from '../router'

export default async({ store, router }) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log('Hay sesion')
            store.dispatch('sesion/iniciarSesion', user.uid)
            router.push({ name: 'slider' })
        } else {
            console.log('No hay sesion')
            store.dispatch('sesion/cerrarSesion', )
        }
    })
}