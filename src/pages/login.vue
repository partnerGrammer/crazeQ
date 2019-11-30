    <template>
      <div class="personal">
          <q-btn color="primary" icon="check" label="ByPass" to="/slider" />
          <div class="row">
            <div class="col" style="text-align:center;"> <q-btn flat disable class="full-width texto" style="margin-bottom:-8%;" label="Iniciar sesión" /><br> 
          <img src="../assets/separador.png" style="width:80%;"> </div>
            <div class="col" style="text-align:center;"> <q-btn flat class="full-width texto" to="/register" label="Registrarse"/> </div>


          </div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      style="margin-top:5vw;"
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
        hint="Password"
        type="password"
        v-model="password"
        label="Your password *"
        autocomplete="on"
      />

        <div style="text-align: center; margin-top:20%;">
        <q-btn color="black" class="full-width" label="Ingresar" type="submit" />
        <!-- <q-btn type="reset" color="black" class="full-width" label="Limpiar" /> -->
        <img src="../assets/separador.png" style="width:50%; margin-top:15%;"> <br>
        <img src="../assets/google.png" @click=socialLogin() style="width:10%; margin-top:5%; margin-right:5%;">
        <img src="../assets/facebook.png" @click=advice() style="width:10%; margin-top:5%;">

      </div>
    </q-form>

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
    advice(){
      alert("Click hacia redes sociales")
    },
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
     async socialLogin(){
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result)=>{
        this.$router.push('slider');
      }).catch(err =>{
        this.error = err.message
        alert('Error de la clase: '+this.error)
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