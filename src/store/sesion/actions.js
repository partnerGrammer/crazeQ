import { auth, db } from '../../firebase'
import router from '../../router'

export async function iniciarSesion({ commit }, uid) {
    try {
        let doc = await db.collection('usuarios').doc(uid).get()
        if (doc.exists) {
            let usuario = doc.data()
            commit('actualizarUsuario', usuario)
        } else {
            this.$router.push({ name: 'register' })
        }
    } catch (e) {
        console.log(e)
    }
}

export async function cerrarSesion({ commit }) {
    await auth.signOut()
    commit('actualizarUsuario', null)
}