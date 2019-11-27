    <template>
      <div class="personal">
          
          <div class="row">
<div class="col"> <q-btn push   rounded color="black"  class="full-width" to="/register" label="Registro"/> </div>
<div class="col"> <q-btn flat   rounded color="black" disable class="full-width" label="Estas en: Login" /> </div>

          </div>
<div class="text-h4" style="text-align:center; margin-top:10vh;">Iniciar sesión</div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      style="margin-top:10vw;"
    >
      <q-input
        filled
        v-model="email"
        label="Your email *"
        hint="Email"
        autocomplete="on"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
        autocomplete="on"
      />

        <div style="text-align: center;">
        <q-btn color="black" class="full-width" label="Ingresar" type="submit" />
        <q-btn label="Reset" type="reset" color="black" class="full-width" style="margin-top:5%;"/><br>
        <!-- <q-btn type="reset" color="black" class="full-width" label="Limpiar" /> -->
        <img src="../assets/separador.png" style="width:50%; margin-top:5%;"> <br>
        <img src="../assets/google.png" style="width:10%; margin-top:5%; margin-right:5%;">
        <img src="../assets/facebook.png" style="width:10%; margin-top:5%;">

      </div>
    </q-form>
<div class="text-h5" v-if="acceso=='true'"> Accesando...</div>
  </div>
    </template>
   
    
<script>
import db from '../firebase/init'
import firebase from 'firebase'
export default {
name:'modal',

data() {
    return {
        panel: 'mails',
       icon: false,  
       user:'',   
       email:'',
       password:'',
       error:'',
       acceso: 'false'
    }
  },
  methods:{
    onSubmit(){
      this.error = ''
      console.log('dentro del motodo')
      firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user =>{        
        this.$router.push({name:'slider'})
        alert('Acceso conseguido')
        console.log('acceso satisfactorio')
      }).catch(err =>{
        this.error = err.message
      })
    },
     onReset () {
      this.email = null
      this.password = null
    }
  }
  }
</script>
<style>
.personal{
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
}
</style>