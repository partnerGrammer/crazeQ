<template>
<div class="animated slideInDown delay-1s" style="height: 90%; width:100%; position:absolute;">
             <q-btn color="white" text-color="black" label="<" to="/slider" style="float:right; left:-5%; top:2%;"/>
         
      <div class="wrapp" style="margin-bottom:12%;" > 
        
          <q-card class="my-card" >    
                   
            <img class="sombra" :src="posts[0].img" alt="">
          </q-card><br>
         
           <div class="row">
                <p class="text-weight-light">{{posts[0].name}}</p>                
            </div>
           <div class="row">
               <p style="font-size:25px;">$ {{posts[0].price}}</p>
                <q-space />
                           
               <img src="../assets/icono1.png" style="width:9%; height:5%; margin-right:5%;"> 
               <img src="../assets/icono2.png" style="width:8%; height:5%; margin-right:5%;"> 
               <img src="../assets/icono3.png" style="width:8%; height:5%; margin-right:5%;"> 
               <img src="../assets/icono4.png" style="width:8%; height:5%; margin-right:2%;">               
            </div>
            <div class="row">
                <img src="../assets/xs.png" style="width:8%; height:5%; margin-right:5%;">           
                <img src="../assets/s.png" style="width:8%; height:5%; margin-right:5%;">           
                <img src="../assets/m.png" style="width:8%; height:5%; margin-right:5%;">           
                <img src="../assets/l.png" style="width:8%; height:5%; margin-right:5%;">           
                <img src="../assets/xl.png" style="width:8%; height:5%; margin-right:5%;">           
            </div>
            <div class="row">
                <p style="margin-top:6%; margin-bottom:-2%;">Tabla de tallas</p>      
            </div>
            <hr>
            <div class="row">              
                  <q-list bordered class="rounded-borders" style="width:100%;">
      <q-expansion-item
        expand-separator
        label="DESCRIPCIÓN"
      >
        <q-card>
          <q-card-section>
            {{posts[0].description}}
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        label="DISPONIBILIDAD"
      >
        <q-card>
          <q-card-section>
             {{posts[0].stock}}
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        label="DIRECCIÓN DE RECOLECCIÓN"
      >
        <q-card>
          <q-card-section>
            {{boutiquesposts[0].address}}
          </q-card-section>
        </q-card>
      </q-expansion-item>

  
    </q-list>
            </div>

 </div>
      <br>
  
  </div>
</template>

<script>
import axios from 'axios';
import { db } from '../firebase/init'
import firebase, { functions } from 'firebase'
let database = firebase.firestore();
export default {
  name: 'PageIndex',
  data(){
    return{
        posts: [],
        boutiquesposts: [],
        id:'',
        post: ''
    }
  },
  methods:{
  
  },
    mounted() {
     var user = firebase.auth().currentUser;
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
  // traer detalles de la prenda
        let productos = db.collection('tabla:Productos');
        let queryRef = productos.where('id', '==', this.id).get()
              .then(snapshot => {
                if (snapshot.empty) {
                  console.log('No matching documents.');
                  return;
                }
                snapshot.forEach(doc => {
                  console.log(doc.id, '=>', doc.data());
                  this.posts.push(doc.data())
                  console.log(this.posts)                  
                });
              })
              .catch(err => {
                console.log('Error getting documents', err);
              })        

              // traer detalles de la prenda
        let boutiques = db.collection('tabla:Boutique');
        let queryRef2 = boutiques.where('idBoutique', '==', this.id).get()
              .then(snapshot => {
                if (snapshot.empty) {
                  console.log('No matching documents2.');
                  return;
                }
                snapshot.forEach(doc => {
                  console.log(doc.id, '=>', doc.data());
                  this.boutiquesposts.push(doc.data())
                  console.log(this.boutiquesposts)                  
                });
              })
              .catch(err => {
                console.log('Error getting documents', err);
              })   
        },
  created(){
    this.id = this.$route.params.idCategory;
    console.log(this.id)
  }
}
</script>

<style>
.wrapp{
    width: 90%;
    margin-left: 5%;
    margin-top: 15%;  
    margin-bottom: 5%;  
}
.sombra{
  -moz-box-shadow: 1px 2px 4px rgba(0, 0, 0,0.5);
  -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
}
</style>