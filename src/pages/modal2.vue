<template>
    <div style=" width:100%; " >
        <q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Mapa', value: 'Mapa' },
          { label: 'Listado de Tiendas', value: 'Listado' }
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
    <img src="../assets/marcador.png" style="width:8vw;" @click="icon = true"/>
  </gmap-custom-marker>

</GmapMap>

<!-- Seccion modal del mapa -->
        <q-dialog v-model="icon" transition-show="flip-down" transition-hide="flip-up">
      <q-card style=" width:95%; position: fixed;">
        <q-card-section  style=" width:100%;" >
          <div class="row">

            <div class="col-2">
               <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar.png">
               </q-avatar>
            </div>

            <div class="col-7">
                <div class="row">
                  <div class="text-h6" id='texto-superior1'>NOMBRE DE LA TIENDA</div> <br>
                   <div class="text-h6" id='texto-superior2' style="margin-top:-5%">Av. Siempreviva 742</div>
                </div> 
            </div>
            <div class="col">
              <q-btn icon="close" flat round dense v-close-popup style="float:right;" />
            </div>
           
          </div>
          <hr>
          <div class="row" style="margin-top:-1%; height:12vw;">
            
         <div class="col-3"> <div class="text-h3" id="calificacion">4.7</div></div>
         <div class="col-3 self-center"><div class="text-h6 self-center">de 5</div> </div>
         <div class="col-6 self-center"> 
                                      <q-rating
                                            v-model="rating"
                                            size="1.5em"
                                            color="yellow-5"
                                            icon="star_border"
                                            icon-selected="star"
                                            style="float:right;"
                                        />
                                       <br>
                                       <p style="float:right;">257 calificaciones</p>
         </div>
         </div>
          <hr>
        </q-card-section>
         <!-- Fin del top con la descripcion del modal -->
        <q-card-section>
        
    <div class="q-gutter-y-md">
      <q-option-group
        v-model="panel2"
        inline
        :options="[
          { label: 'Calificaciones', value: 'mails' },
          { label: 'Prendas en tienda', value: 'alarms' }
        ]"
        style="margin-bottom:-3%;margin-top:-3%;"
      />

      <q-tab-panels v-model="panel2" animated class="shadow-2 rounded-borders" style="width: 100%;">
        <q-tab-panel name="mails" >

          <div class="text-h6" >Calificaciones</div>

             <q-list bordered>  

      <q-item v-for="index in 20" :key="index" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-avatar>
        </q-item-section>
       
                                      <q-item-section style="padding-right:10px;">
                                        <q-item-label>Usuario #{{ index }}</q-item-label>
                                        <!-- inicio estrellas -->

                                      
                                        <!-- fin estrellas -->
                                        <q-item-label style="font-size:.8em;" caption lines="2">Algun comentario</q-item-label>
                                      </q-item-section>
                                       <q-item-section side>
                                           <q-rating
                                            v-model="rating"
                                            size="1em"
                                            color="yellow-5"
                                            icon="star_border"
                                            icon-selected="star"
                                        />
                                        <!-- <q-icon name="chat_bubble" color="green" /> -->
                                        <q-item-label id="ocultar" style="font-size:.8em; margin-top:10%;"> 10/08/2019</q-item-label>
                                      </q-item-section>    
      </q-item>

   

    </q-list>

        </q-tab-panel>

        <q-tab-panel name="alarms" v-if="posts.length != 0" >

            
    <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
          <div v-for="post in posts"
                                    :key="post" style="margin-top:3vh;">
                                    <q-img
                                      :src="post.url"
                                      spinner-color="white"
                                      class="rounded-borders"
                                      style="width:38vw;"
                                      @click=myFunction();
                                    >
                                    <div class="text" style="width:100%; text-align:center;">Descripcion</div>
                                    </q-img>
                                  </div>
     
    </div>
    
        </q-tab-panel>


      </q-tab-panels>
    </div>

        </q-card-section>
      </q-card>
    </q-dialog>
        </q-tab-panel>

        <q-tab-panel name="Listado">
           <!-- Inicio formulario login -->
            <div class="text-h6" style="margin-top:1%;">Listado de tiendas</div>
            <div>

                 <q-list bordered>  

      <q-item v-for="index in 20" :key="index" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-avatar>
        </q-item-section>
       
                                      <q-item-section style="padding-right:10px;">
                                        <q-item-label>Usuario #{{ index }}</q-item-label>
                                        <!-- inicio estrellas -->

                                      
                                        <!-- fin estrellas -->
                                        <q-item-label style="font-size:.8em;" caption lines="2">Algun comentario</q-item-label>
                                      </q-item-section>
                                       <q-item-section side>
                                           <q-rating
                                            v-model="rating"
                                            size="1em"
                                            color="yellow-5"
                                            icon="star_border"
                                            icon-selected="star"
                                        />
                                        <!-- <q-icon name="chat_bubble" color="green" /> -->
                                        <q-item-label id="ocultar" style="font-size:.8em; margin-top:10%;"> 10/08/2019</q-item-label>
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
import * as VueGoogleMaps from 'vue2-google-maps'
import GmapCustomMarker from 'vue2-gmap-custom-marker';
import axios from 'axios';
import StarRating from 'vue-star-rating'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCc2VmFRRKEO2hwqqyy58AuBsCy4LPiJQ',
    
  }})
  
export default {
    name: 'Map',
    created(){

     axios.get("https://backend-app-laravel.herokuapp.com/api/getGallery").then(response=>{
     this.posts = response.data;
     console.log(response); 
     })
        
  },
    components:{
        'gmap-custom-marker': GmapCustomMarker ,
        StarRating
    },
    methods:{
      myFunction(){
  alert('Hola');
}
},
    data() {
    return {
        bar2: false,
         rating: 3,
        panel: 'Mapa',
        panel2: 'mails',
        icon: false,     
        posts: [],
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