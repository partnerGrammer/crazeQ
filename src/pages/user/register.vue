<template>
    <div class="personal">
        <!-- <q-btn color="primary" icon="check" label="ByPass" to="/slider" /> -->
        <div class="row">
            <div class="col" style="text-align:center;"> <q-btn flat to="/login" class="full-width texto" label="Iniciar sesión" /> 
            </div>
            <div class="col" style="text-align:center;"> 
                <q-btn flat disable class="full-width texto" style="margin-bottom:-8%;"  label="Registrarse"/>
                <br> 
                <img src="../../assets/separador.png" style="width:80%;"> 
            </div>
        </div>

        <div v-if="vista == 1"
            class="q-gutter-md"
            style="margin-top:5vw;"
        >
            <q-input
                filled
                name="email"
                label="Tu email"
                id="email"
                type="email"
                autofocus
                v-model="formulario.email"
                bottom-slots
                :error="$v.formulario.email.$anyError"
                :error-message="erroresEmail"
                @blur="$v.formulario.email.$touch()"
            />

            <q-input
                filled
                name="password"
                label="Contraseña"
                id="password"
                type="password"
                v-model="formulario.password"
                :error="$v.formulario.password.$anyError"
                :error-message="erroresPassword"
                @blur="$v.formulario.password.$touch()"
            />

            <q-input
                filled
                name="password2"
                label="Repetir contraseña"
                id="password2"
                type="password"
                v-model="formulario.repetirPassword"
                :error="$v.formulario.repetirPassword.$anyError"
                :error-message="erroresRepetirPassword"
                @blur="$v.formulario.repetirPassword.$touch()"
            />

            <div style="text-align: center; margin-top:10%;">
                <q-btn :disabled="$v.formulario.$invalid" color="black" class="full-width" label="Siguiente" @click="siguiente(1, 'password')"/>
                <!-- <q-btn type="reset" color="black" class="full-width" label="Limpiar" /> -->
                <img src="../../assets/separador.png" style="width:50%; margin-top:15%;"> <br>
                <img src="../../assets/google.png" @click="siguiente(1, 'google.com')" style="width:10%; margin-top:5%; margin-right:5%;">
                <img src="../../assets/facebook.png" @click="siguiente(1, 'facebook.com')" style="width:10%; margin-top:5%;">
            </div>
        </div>

        <div v-if="vista == 2"
            class="q-gutter-md"
            style="margin-top:5vw;"
        >
            <q-input 
                filled
                name="nombres"
                label="Nombres"
                id="nombres"
                type="text"
                autofocus
                v-model="formulario_2.nombres"
                bottom-slots
                :error="$v.formulario_2.nombres.$anyError"
                :error-message="erroresNombres"
                @blur="$v.formulario_2.nombres.$touch()"
            />
                
            <q-input
                filled
                name="apellidos"
                label="Apellidos"
                id="apellidos"
                type="text"
                bottom-slots
                v-model="formulario_2.apellidos"
                :error="$v.formulario_2.apellidos.$anyError"
                :error-message="erroresApellidos"
                @blur="$v.formulario_2.apellidos.$touch()"
            />

            <div style="text-align: center; margin-top:10%;">
                <q-btn color="black" class="full-width" label="Registrarse" @click="siguiente(2)"/>
            </div>
        </div>
    </div>
</template>
   
    
<script>
import { required, email, minLength, maxLength, sameAs, alphaNum } from 'vuelidate/lib/validators'
import { nombreCompuesto } from '../../utilities/validations'
import { auth, firebase, db } from '../../firebase'
import { mapMutations } from 'vuex'

export default {
    name:'modal',

    data() {
        return {
            vista: 1,
            panel: 'mails',

            metodo: 'password',
            formulario: {
                email: '',
                password: '',
                repetirPassword: '',
            },
            formulario_2: {
                nombres: '',
                apellidos: '',
            },
        }
    }, 
    validations: {
        formulario: {
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(6),
                maxLength: maxLength(20),
            },
            repetirPassword: {
                sameAs: sameAs('password'),
                required,
            }
        },

        formulario_2: {
            nombres: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(20),
                nombreCompuesto
            },
            apellidos: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(20),
                nombreCompuesto
            },
        },
    }, 
    computed: {
        erroresEmail: function(){
            let errores = ''
            if(!this.$v.formulario.email.$dirty){
                return errores
            }

            if(!this.$v.formulario.email.required){
                errores = 'Ingresa tu email'
            }

            if(!this.$v.formulario.email.email){
                errores = 'Ingresa un email valido'
            }

            return errores
        },

        erroresPassword: function(){
            let errores = ''
            if(!this.$v.formulario.password.$dirty){
                return errores
            }

            if(!this.$v.formulario.password.required){
                errores = 'Ingresa tu password'
            }

            if(!this.$v.formulario.password.minLength){
                errores = 'Ingresa un password de minimo 6 caracteres'
            }

            if(!this.$v.formulario.password.maxLength){
                errores = 'Ingresa un password de maximo 20 caracteres'
            }

            return errores
        },

        erroresRepetirPassword: function(){
            let errores = ''
            if(!this.$v.formulario.repetirPassword.$dirty){
                return errores
            }

            if(!this.$v.formulario.repetirPassword.required){
                errores = 'Ingresa tu password'
            }

            if(!this.$v.formulario.repetirPassword.sameAs){
                errores = 'Las contraseñas no coinciden'
            }

            return errores
        },

        erroresNombres: function(){
            let errores = ''
            if(!this.$v.formulario_2.nombres.$dirty){
                return errores
            }

            if(!this.$v.formulario_2.nombres.required){
                errores = 'Ingresa tu nombre'
            }

            if(!this.$v.formulario_2.nombres.minLength){
                errores = 'Ingresa un nombre de minimo 3 caracteres'
            }

            if(!this.$v.formulario_2.nombres.maxLength){
                errores = 'Ingresa un nombre de maximo 20 caracteres'
            }

            if(!this.$v.formulario_2.nombres.nombreCompuesto){
                errores = 'Ingresa un nombre valido'
            }

            return errores
        },

        erroresApellidos: function(){
            let errores = ''
            if(!this.$v.formulario_2.apellidos.$dirty){
                return errores
            }

            if(!this.$v.formulario_2.apellidos.required){
                errores = 'Ingresa tus apellidos'
            }

            if(!this.$v.formulario_2.apellidos.minLength){
                errores = 'Ingresa un apellido de minimo 3 caracteres'
            }

            if(!this.$v.formulario_2.apellidos.maxLength){
                errores = 'Ingresa un apellido de maximo 20 caracteres'
            }

            if(!this.$v.formulario_2.apellidos.nombreCompuesto){
                errores = 'Ingresa un apellido valido'
            }

            return errores
        },
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

        siguiente: function(vista, metodo){
            switch (vista) {
                case 1:
                    if(this.$v.formulario.$invalid && metodo == 'password'){
                        this.$v.formulario.$touch()
                        return
                    }else{
                        this.metodo = metodo
                        this.vista++
                    }
                    break;
                case 2:
                    if(this.$v.formulario_2.$invalid){
                        this.$v.formulario_2.$touch()
                        return
                    }else{
                        this.registrar()
                    }
                    break;
            
                default:
                    break;
            }
        },

        async registrar(){

            switch (this.metodo) {
                case 'password':
                    this.registrarEmail()
                    break;
                case 'facebook.com':
                    this.registrarFacebook()
                case 'google.com':
                    this.registrarGoogle()
                default:
                    break;
            }
        },

        async guardarUsuario(uid){
            //Generamos un nuevo usuario con los datos del formulario
            let usuario = {
                uid,
                userName: '@' + uid,
                nombres: this.formulario_2.nombres,
                apellidos: this.formulario_2.apellidos,
                fotoPerfil: 'https://pm1.narvii.com/6641/075681f7fbc5c682193b524037075bdfeb68ec67_hq.jpg',
                descripcion: '',
                biografia: '',
                sexo: 'Femenino'
            }

            let batch = db.batch()

            batch.set(db.collection('usuarios').doc(usuario.uid), usuario)

            await batch.commit()

            //Por medio de db.collection le indicamos a firebase que coleccion queremos usar,
            //si no existiera se crearia, luego le indicamos el id del docuemento, en este caso
            //el id del usuario y por ultimo guardamos el usuario en la coleccion por medio de "set". 
            // await db.collection('usuarios')
            //         .doc(usuario.uid)
            //         .set(usuario)

            this.actualizarUsuario(usuario)
        },

        async registrarEmail(){
            try {
                let uid = null
                if(auth.currentUser){
                    uid = auth.currentUser.uid
                }else{
                    //Registramos al usuario en firebase por medio del metodo "createUserWithEmailAndPassword"
                    let credenciales = await auth.createUserWithEmailAndPassword(this.formulario.email, this.formulario.password)
                    uid = credenciales.user.uid
                }
                
                
                //Llamamos al metodo que almacenara el usuario
                await this.guardarUsuario(uid)
                
                //await auth.currentUser.sendEmailVerification()
                
                this.$router.push({ name: 'slider' })
            } catch (e) {
                console.log(e)
                switch (e.code) {
                    case 'auth/email-already-in-use':
                        this.mostrarNotificacion('Ya se ha registrado esta direccion de email', 'orange')
                        break;
                
                    default:
                        this.mostrarNotificacion('Ocurrio un error registrando tu cuenta', 'negative')
                        break;
                }
            }
            finally{
                return
            }
        },

        async registrarFacebook(){
            let provider = new firebase.auth.FacebookAuthProvider()
            provider.setCustomParameters({
                'display': 'popup'
            })

            auth.languageCode = 'es_MX'

            try {
                let uid = null
                if(auth.currentUser){
                    uid = auth.currentUser.uid
                }else{
                    //Registramos al usuario en firebase por medio del metodo "createUserWithEmailAndPassword"
                    let credenciales = await auth.signInWithPopup(provider)
                    uid = credenciales.user.uid
                }
                
                //Llamamos al metodo que almacenara el usuario
                await this.guardarUsuario(uid)

                this.$router.push({ name: 'slider' })
            } catch (e) {
                console.log(e)
                this.mostrarNotificacion('Ocurrio un error registrando tu cuenta', 'negative')
            }
        },

        async registrarGoogle(){
            let provider = new firebase.auth.GoogleAuthProvider()
            provider.setCustomParameters({
                'display': 'popup'
            })

            auth.languageCode = 'es_MX'

            try {
                let uid = null
                if(auth.currentUser){
                    uid = auth.currentUser.uid
                }else{
                    //Registramos al usuario en firebase por medio del metodo "createUserWithEmailAndPassword"
                    let credenciales = await auth.signInWithPopup(provider)
                    uid = credenciales.user.uid
                }
                
                //Llamamos al metodo que almacenara el usuario
                await this.guardarUsuario(uid)
                this.$router.push({ name: 'slider' })
            } catch (e) {
                console.log(e)
                this.mostrarNotificacion('Ocurrio un error registrando tu cuenta', 'negative')
            }
        }
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