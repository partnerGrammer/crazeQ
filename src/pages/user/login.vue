<template>
    <div class="personal">
          <!-- <q-btn color="primary" icon="check" label="ByPass" to="/slider" /> -->
        <div class="row">
            <div class="col" style="text-align:center;">
                <q-btn flat disable class="full-width texto" style="margin-bottom:-8%;" label="Iniciar sesión" />
                <br> 
            <img src="../../assets/separador.png" style="width:80%;"> 
        </div>
        <div class="col" style="text-align:center;"> 
            <q-btn flat class="full-width texto" to="/register" label="Registrarse"/> 
        </div>
    </div>
        <div
            class="q-gutter-md"
            style="margin-top:5vw;"
        >
            <q-input
                filled
                v-model="formulario.email"
                label="Your email *"
                hint="Email"
                autocomplete="on"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                filled
                hint="Password"
                type="password"
                v-model="formulario.password"
                label="Your password *"
                autocomplete="on"
            />

            <div style="text-align: center; margin-top:20%;">
                <q-btn color="black" class="full-width" label="Ingresar" @click="ingresarEmail('email')" />
                <!-- <q-btn type="reset" color="black" class="full-width" label="Limpiar" /> -->
                <img src="../../assets/separador.png" style="width:50%; margin-top:15%;"> <br>
                <img src="../../assets/google.png" @click="ingresar('google')" style="width:10%; margin-top:5%; margin-right:5%;">
                <img src="../../assets/facebook.png" @click="ingresar('facebook')" style="width:10%; margin-top:5%;">
            </div>
        </div>
    </div>
</template>
   
    
<script>
import { mapMutations } from 'vuex'
import { auth, firebase } from '../../firebase'

export default {
  name:'modal',

    data() {
        return {
        panel: 'mails',
        icon: false,
        formulario:{
            email: '',
            password: '',
        },

        error:'',
        acceso: 'false'
        }
    },
    mounted(){

    },
    methods:{
        ...mapMutations(
            'sesion', ['actualizarUsuario']
        ),

        mostrarNotificacion(mensaje, color){
            this.$q.notify({
                    message: mensaje,
                    position: 'top',
                    color: color,
            })
        },

        async ingresar(metodo){
            switch (metodo) {
                case 'email':
                    this.ingresarEmail()
                    break;
                case 'facebook':
                    this.ingresarFacebook()
                    break;
                case 'google':
                    this.ingresarGoogle()
                    break;
                default:
                    break;
            }
        },

        async ingresarEmail(){
            try {
            let response = await auth.signInWithEmailAndPassword(this.formulario.email, this.formulario.password)
            
            this.$router.push({ name: 'slider' })
            } catch (e) {
                console.log(e)
                switch (e.code) {
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                        this.mostrarNotificacion('Revisa tu email y contraseña', 'negative')

                    break;
            
                    default:
                        this.mostrarNotificacion('Ocurrio un error al validar la informacion', 'orange')

                        break;
                }
            }
            finally{
                return
            }
        },

        async ingresarFacebook(){
            let provider = new firebase.auth.FacebookAuthProvider()
            provider.setCustomParameters({
                'display': 'popup'
            })

            auth.languageCode = 'es_MX'

            try {
                await auth.signInWithPopup(provider)
                this.$router.push({ name: 'slider' })
            } catch (e) {
                console.log(e)
                this.mostrarNotificacion('Ocurrio un error validando tu informacion', 'negative')
            }
        },

        async ingresarGoogle(){
            let provider = new firebase.auth.GoogleAuthProvider()
            provider.setCustomParameters({
                'display': 'popup'
            })

            auth.languageCode = 'es_MX'

            try {
                await auth.signInWithPopup(provider)
                this.$router.push({ name: 'slider' })
            } catch (e) {
                console.log(e)
                this.mostrarNotificacion('Ocurrio un error validando tu informacion', 'negative')
            }
        },
    }
}
</script>
<style>
.personal{
    width: 80%;
    margin-left: 10%;
    margin-top: 35%;
}

@media screen and (min-width: 150px) and (max-width: 330px) {
        .personal{
    width: 75%;
    margin-left: 12.5%;
    margin-top: 15%;
}
      .texto {
        font-size: 12px;
      }
    }
</style>