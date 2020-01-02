export function actualizarUsuario(state, payload) {
    state.usuario = payload
}

export function actualizarIndice(state, payload) {
    state.indice = payload
}

export function actualizarConfiguracion(state, payload) {
    state.configuracion = payload
}

export function actualizarDatosPerfil(state, payload) {
    if (!state.usuario) {
        return
    }

    // state.usuario.nombres = payload.nombres
    // state.usuario.apellidos = payload.apellidos
}