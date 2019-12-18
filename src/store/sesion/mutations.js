export function actualizarUsuario(state, payload) {
    state.usuario = payload
}

export function actualizarDatosPerfil(state, payload) {
    if (!state.usuario) {
        return
    }

    // state.usuario.nombres = payload.nombres
    // state.usuario.apellidos = payload.apellidos
}