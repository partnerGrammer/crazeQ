<template>
    <div>
<GmapMap
  :center="{lat:28.674598, lng:-106.079639}"
  :zoom="19"
  map-type-id="terrain"
  style="width: 100vw; height: 92vh;"
>
 <gmap-custom-marker :marker="marker">
    <img src="../assets/logocraze.png" style="width:20vw;" @click="icon = true"/>
  </gmap-custom-marker>

</GmapMap>


        <q-dialog v-model="icon" transition-show="flip-down" transition-hide="flip-up" class="con-estilo">
      <q-card>
        <q-card-section >
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
          <div class="row" style="margin-top:5%;">
            
         <div class="col-3"> <div class="text-h3" id="calificacion">4.7</div></div>
         <div class="col-3 self-center"><div class="text-h6 self-center">de 5</div> </div>
         <div class="col-6 self-center"> 
                                      <star-rating
                                       v-bind:star-size="15"
                                       v-model="rating"
                                       style="float:right;"
                                       ></star-rating>
                                       <br>
                                       <p style="float:right;">257 calificaciones</p>
         </div>
         </div>
          <hr>
        </q-card-section>
         <!-- Fin del top con la descripcion del modal -->
        <q-card-section>
        
    <div class="q-gutter-y-md" style="max-width: 90vw; width: 90vw">
      <q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Calificaciones', value: 'mails' },
          { label: 'Prendas en tienda', value: 'alarms' }
        ]"
        style="margin-bottom:-3%;margin-top:-3%;"
      />

      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders" style="width: 78vw;">
        <q-tab-panel name="mails" >

          <div class="text-h6" >Calificaciones</div>
          <!-- Inicio primer lista -->
                                      <q-intersection
                                    v-for="index in 10"
                                    :key="index"
                                    transition="flip-right"
                                    class="example-item"
                                    
                                  >
                                    <q-item clickable v-ripple style="margin-left:-5%;" @click="myFunction()">
                                      <q-item-section avatar>
                                           <q-avatar>
                                            <img src="https://cdn.quasar.dev/img/avatar.png">
                                           </q-avatar>
                                      </q-item-section>

                                      <q-item-section style="padding-right:10px;">
                                        <q-item-label>Usuario #{{ index }}</q-item-label>
                                        <!-- inicio estrellas -->

                                       <star-rating
                                       v-bind:star-size="15"
                                       v-model="rating"
                                       ></star-rating>
                                        <!-- fin estrellas -->
                                        <q-item-label style="" caption lines="2">Algun comentario</q-item-label>
                                      </q-item-section>

                                      <q-item-section side>
                                        <!-- <q-icon name="chat_bubble" color="green" /> -->
                                        <q-item-label id="ocultar" style="font-size:8.5px; margin-top:10%;"> 10/08/2019</q-item-label>
                                      </q-item-section>
                                    </q-item>
                                  </q-intersection>
      <!-- fin primera lista -->
        </q-tab-panel>

        <q-tab-panel name="alarms" v-if="posts.length != 0" >
          <!-- Inicio segunda lista -->
                                  <q-intersection
                                    v-for="index in 10"
                                    :key="index"
                                    once
                                    transition="scale"
                                    class="example-item"
                                    style=""
                                  >
                                  <div class="row" style="margin-top:2vh;">
                                    <!-- <div class="col-6"><img :src="post.url" style="width:33vw; "></div> -->
                                    <q-img
                                      :src="post.url"
                                      spinner-color="white"
                                      class="rounded-borders"
                                      style="width:33vw;"
                                      @click=myFunction();
                                    >
                                    </q-img>
                                    <q-space />
                                    <!-- <div class="col-6"><img :src="post.url" style="width:33vw; margin-left:7%;"></div> -->
                                    <q-img
                                      :src="post.url"
                                      spinner-color="white"
                                      class="rounded-borders"
                                      style="width:33vw;"
                                      @click=myFunction();
                                    >
                                    </q-img>
                                  </div>
                                      

                                  </q-intersection>
            <!-- fin segunda lista -->
        </q-tab-panel>


      </q-tab-panels>
    </div>

        </q-card-section>
      </q-card>
    </q-dialog>


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
     this.post = response.data[0];
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
        panel: 'mails',
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
.con-estilo{
  background-color: white;
  width:100%;
  height: 100%;
}
</style>

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