<template>
  <div>
    <q-form
      @submit="onSubmit"
      @reset="crearNuevoDocumento"
      class="q-gutter-md"
    >
      <q-input v-model="name" type="text" label="name" />
      <q-input v-model="url" type="text" label="Url" />
      <div>
        <!-- <q-btn label="Submit" type="submit" color="primary"/> -->
        <q-btn label="Registrar" type="reset" color="primary" class="q-ml-sm" />
      </div>
    </q-form>

  <div>
  
  <q-list bordered>
    <q-item v-for="usuario in usuarios" :key="usuario">
  <q-item-section  thumbnail>
          <img class="imagenes" :src="usuario.url" >
         
        </q-item-section>
        <q-item-section>{{usuario.name}}</q-item-section>
      </q-item>
    </q-list>
</div>

  </div>
</template>

<script>
// import db from '../firebase/init'
import { db } from '../firebase/init'
import firebase from 'firebase'
let database = firebase.firestore();
// let collectionUrls = database.ref('Craze');
export default {
name:'modal',

data() {
    return {
      name:'',
      url:'',
      urlS:'',
      usuarios: [],
     
    }
  },
  mounted() {
        //Obtenemos a los usuario
        db.collection('tabla:Productos').onSnapshot(response => {
            this.usuarios = [];
            response.forEach(doc => {
                this.usuarios.push(doc.data())
            })
        })},
  methods:{
    onSubmit(){
       console.log('entrado a summit')     
      
       let data = {
          name: 'Los Angeles2',
          url: 'CA',
        };
       let setDoc = db.collection('Craze').doc('imagen3').set(data);   
    
    },  
     onReset () {
    },
    crearNuevoDocumento(){
      let addDoc = db.collection('tabla:Productos').add({
        name: this.name,
        url: this.url
      }).then(ref => {
        console.log('Added document with ID: ', ref.id);
      });
    }
  }
  }
</script>