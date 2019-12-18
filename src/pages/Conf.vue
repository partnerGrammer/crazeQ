<template>
  <div class="animated fadeIn delay-5s" style="width:90%; margin-left:5%; margin-right:5%;">
      <q-btn color="white" text-color="black" label="<" to="/slider" style="float:right; margin-top:5%;"/>
    <div class="q-gutter-sm" style="margin-top:5%;">        
    <q-list>
    <h4 style="margin-top:-2%;">Filtros <p style="font-size:13px;">Usuario: {{usuario}} </p> </h4>
  
  <q-btn color="primary" label="Seleccionar Todos" @click="selectAll" style="margin-top:-20%;" />
  
      <q-item tag="label" v-ripple style="margin-top:-5%;">
        <q-item-section avatar>
          <q-checkbox v-model="color" val="Vestidos" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Vestidos</q-item-label>
        </q-item-section>
      </q-item>    

      <q-item tag="label" v-ripple class="espaciado">
        <q-item-section avatar>
          <q-checkbox v-model="color" val="Blusas" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Blusas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="espaciado">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Faldas" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Faldas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="espaciado">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Chaquetas" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Chaquetas y abrigos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="espaciado">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Sudaderas" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Sudaderas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="espaciado">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Suéteres" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Suéteres</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="espaciado">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Camisetas" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Camisetas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="espaciado">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Bottom" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Bottom</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="espaciado">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Tops" color="black"  />
        </q-item-section>
        <q-item-section>
          <q-item-label>Tops y Conjuntos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple class="espaciado">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="baño"  color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Trajes de baño</q-item-label>
        </q-item-section>
      </q-item>
    
    </q-list>
    </div> 
    <hr><br>
    <h5 style="margin-top:-2vh;">Rango de busqueda</h5>
      <div class="q-pa-md" style="margin-top:-5%;">

    <q-range
      v-model="label"
      :min="0"
      :max="100"
      :step="1"
      label
            :left-label-value="label.min + 'Km'"
      :right-label-value="label.max + 'Km'"
      label-always
      color="black"
    />
    <q-btn color="black" class="full-width" label="Aplicar" type="submit" style="margin-top:5%;"/>
    <q-btn color="red" class="full-width" label="Cerrar sesion" @click="logout()" style="margin-top:5%;"/>
  </div>
  </div>
</template>
<script>
import db from '../firebase/init'
import firebase from 'firebase'
export default {
  
  data () {
    return {
      usuario: "",
      color: [],            
        label: {
        min: 0,
        max: 50
      }
    }
  },
  methods:{
    logout(){
      firebase.auth().signOut().then((result)=>{
        alert("Cerro su sesión")
        this.$router.push('/');

}).catch(function(error) {
  // An error happened.
});
    },   
    selectAll(){
        this.color= ["baño","Tops","Bottom","Camisetas","Suéteres","Sudaderas","Chaquetas","Chaquetas", "Faldas","Vestidos","Blusas"]       
    } 
    
  },
  mounted(){
 var user = firebase.auth().currentUser;
 this.usuario=user.email;
 console.log(this.usuario)
     if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}else{
  this.$router.push({path: 'login'})
}

  }
}
</script>
<style>
.espaciado{
  margin-top:-3%;
}
</style>