<template>
    <div class="animated fadeIn delay-5s" style=" width:100%; " >
        <q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Mapa', value: 'Mapa', icon:false },
          { label: 'Listado de Tiendas', value: 'Listado'}
        ]"
        style="text-align:center; margin-top:1%;"
      />

      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders" style="width:100%; ">
        <q-tab-panel name="Mapa"  >

<GmapMap
  :center="{lat:28.674598, lng:-106.079639}"
  :zoom="19"
  map-type-id="terrain"
  style="width: 100%; height: 83vh;"
>
 <gmap-custom-marker :marker="marker">
    <img src="../assets/marcador.png" style="width:8vw;" @click="icon = !icon"/>
  </gmap-custom-marker>
</GmapMap>

    <HelloWorld v-if="icon" v-model="icon"/>

        </q-tab-panel>

        <q-tab-panel name="Listado">
           <!-- Inicio formulario login -->
            <div class="text-h6" style="margin-top:1%;">Listado de tiendas</div>
            <div>

                 <q-list bordered>  

      <q-item v-for="post in posts" :key="post['.actorId']"  clickable @click="icon2 = !icon2"  v-ripple>
         <HelloWorld v-if="icon2" v-model="icon2"/>
        <q-item-section avatar>
          <q-avatar rounded>
            <img :src="post.img" class="" style="width:100%;">
          </q-avatar>
        </q-item-section>
       
                                      <q-item-section style="padding-right:10px;">
                                        <q-item-label>Address:  {{ post.address }}</q-item-label>
                                        <q-item-label>Email:    {{ post.email }}</q-item-label>
                                        <!-- inicio estrellas -->

                                      
                                        <!-- fin estrellas -->
                                        <q-item-label style="font-size:.8em;" caption lines="2"></q-item-label>
                                      </q-item-section>
                                       <q-item-section side>
                                           <q-rating
                                            v-model="post.rate"
                                            size="1em"
                                            color="yellow-5"
                                            icon="star_border"
                                            icon-selected="star"
                                        />
                                        <!-- <q-icon name="chat_bubble" color="green" /> -->
                                        <q-item-label id="ocultar" style="font-size:.8em; margin-top:10%;"> {{ post.caracter }}</q-item-label>
                                      </q-item-section>    
      </q-item>
    </q-list> 
            </div>  
    <!-- Fin formulario login -->
        </q-tab-panel>
      </q-tab-panels>
    </div>    
</template>
<script>
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import GmapCustomMarker from 'vue2-gmap-custom-marker';
import { db } from '../firebase/init'
import { realdb } from '../firebase/init'
import firebase from 'firebase'
let database = firebase.firestore();
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCc2VmFRRKEO2hwqqyy58AuBsCy4LPiJQ',
    
  }})
  
export default {
    name: 'Map',
    created(){

  },
  async mounted() {    
       
      db.collection('roles').where('movieId', '==', 'fight club').onSnapshot(response =>{
      this.posts3 = [];        
             response.forEach(doc3 => {
                 this.posts3.push(doc3.data())
                console.log(doc3.data())  
                console.log(doc3.data().actorId)

                db.collection('actors').where('actorId', '==', doc3.data().actorId).onSnapshot(response =>{
                this.posts2 = [];        
                      response.forEach(doc2 => {
                          this.posts2.push(doc2.data())
                          console.log(doc2.data())     
                          alert("resultado:"+ posts2[0])             
                      })             
                  })              
             })             
         }  
        )       
        db.collection('tabla:Boutique').onSnapshot(response => {
             this.posts = [];        
             response.forEach(doc => {
                 this.posts.push(doc.data())         
             })}
        )
        },
    components:{
        'gmap-custom-marker': GmapCustomMarker ,
         HelloWorld
    },
    methods:{
      
},
    data() {
    return {
        bar2: false,
        rating: 3,
        panel: 'Mapa',
        panel2: 'mails',
        icon: false,     
        icon2: false,     
        posts: [],
        enlace:"",
        posts2: [],
        posts3: [],
        postsimg: [],
      marker: {
        lat: 28.674598,
        lng: -106.079639
      }
    }
  }
}
</script>

<style>
.con-estilo2{
  width: 100%;

}
/* component */

.star-rating {
  border:solid 1px #ccc;
  display:flex;
  flex-direction: row-reverse;
  font-size:1.5em;
  justify-content:space-around;
  padding:0 .2em;
  text-align:center;
  width:5em;
}

.star-rating input {
  display:none;
}

.star-rating label {
  color:#ccc;
  cursor:pointer;
}

.star-rating :checked ~ label {
  color:#f90;
}

.star-rating label:hover,
.star-rating label:hover ~ label {
  color:#fc0;
}
      #texto-superior1{ font-size:13px;  margin-left:7%;}
      #texto-superior2{ font-size:13px;  margin-left:7%;}

 
@media screen and (min-width: 0px) and (max-width: 350px) {
      #ocultar {    display: none;  }
      #texto-superior1{ font-size:10px; margin-left:10%;}
      #texto-superior2{ font-size:10px; margin-left:10%;}
      #calificacion{ font-size:38px;}
    }

</style>