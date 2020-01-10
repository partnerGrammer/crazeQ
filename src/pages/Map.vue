<template>
    <q-page>
        <q-header elevated>
            <q-toolbar class="header">
                <q-btn flat round dense icon="arrow_back" to="/slider" />
                <q-toolbar-title>
                    Mapa
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <div class="animated fadeIn delay-5s" style=" width:100%; " >
            <q-option-group
                v-model="panel"
                inline
                :options="[
                { label: 'Mapa', value: 'Mapa'},
                { label: 'Listado de Tiendas', value: 'Listado'}
                ]"
                style="text-align:center; margin-top:1%;"
            />
            <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders" style="width:100%; ">
                <q-tab-panel name="Mapa">
                    <gmap-map ref="xyz" :center="{lat: miUbicacion._lat, lng: miUbicacion._long}" :zoom="15" style="width: 100%; height: 83vh;">
                        <gmap-marker 
                            :clickable="true" 
                            :position="{lat: miUbicacion._lat, lng: miUbicacion._long}"
                        >
                        </gmap-marker>

                        <gmap-marker 
                            v-for="(item, index) in boutiques" 
                            :key="index" :clickable="true" 
                            :position="{lat: item.ubicacion._lat, lng: item.ubicacion._long}"
                            @click="detallesBoutique(item)"
                        >
                        </gmap-marker>
                    </gmap-map>
                </q-tab-panel>

                <q-tab-panel name="Listado" flat>
                    <div class="text-h6" style="margin-top:1%;">Listado de tiendas</div>
                    <q-list>  
                        <q-item v-for="(item, index) in boutiques" :key="index" clickable v-ripple :to="{ name:'store', params: { id: item.id } }">
                            <q-item-section avatar>
                                <q-avatar rounded>
                                    <img :src="item.logo" class="" style="width:100%;">
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label lines="1">{{ item.nombre }}</q-item-label>
                                <q-item-label caption lines="2">
                                    {{ item.direccion }}
                                </q-item-label>
                            </q-item-section>
                            <q-item-section side>
                                <q-rating
                                    v-model="rating"
                                    size="1em"
                                    color="yellow-5"
                                    icon="star_border"
                                    icon-selected="star"
                                />
                                <q-item-label style="font-size:.8em; margin-top:10%;">Calificacion</q-item-label>
                            </q-item-section>    
                        </q-item>
                    </q-list>  
                </q-tab-panel>
            </q-tab-panels>
        </div>
        
        <!-- MODAL -->
        <q-dialog v-model="detalleBoutique" transition-show="flip-down" transition-hide="flip-up">
            <q-card style=" width:95%; position: fixed;">
                <q-card-section  style=" width:100%;" >
                    <div class="row">
                        <div class="col-2">
                            <q-avatar>
                            <img :src="boutique.logo">
                            </q-avatar>
                        </div>
                        <div class="col-10">
                            <div class="row">
                                <div class="text-h6" id='texto-superior1'>
                                    {{ boutique.nombre }}
                                </div> 
                                <br>
                                <div class="text-h6" id='texto-superior2' style="margin-top:-5%">{{ boutique.direccion }}</div>
                            </div> 
                        </div>
                        <div class="col">
                            <q-btn icon="close" flat round dense v-close-popup style="float:right;" />
                        </div>
           
                    </div>
                    <hr>
                    <div class="row" style="margin-top:-1%; height:12vw;">
                        <div class="col-3"> <div class="text-h3" id="calificacion">4.7</div></div>
                        <div class="col-3 self-center"><div class="text-h6 self-center">de 5</div></div>
                        <div class="col-6 self-center"> 
                            <q-rating
                                v-model="rating"
                                size="1.5em"
                                color="yellow-5"
                                icon="star_border"
                                icon-selected="star"
                                style="float:right;"
                                readonly
                            />
                            <br>
                            <p style="float:right;">257 calificaciones</p>
                        </div>
                    </div>
                    <hr>
                </q-card-section>

                <q-card-section>
                    <q-list>  
                        <q-item v-for="(item, index) in comentarios" :key="index" clickable v-ripple>
                            <q-item-section avatar>
                                <q-avatar rounded>
                                    <img src="https://cdn.quasar.dev/img/mountains.jpg">
                                </q-avatar>
                            </q-item-section>

                            <q-item-section style="padding-right:10px;">
                                <q-item-label>{{ item.nombre }}</q-item-label>
                                <q-item-label style="font-size:.8em;" caption lines="2">
                                    {{ item.comentario }}
                                </q-item-label>
                            </q-item-section>
                            <q-item-section side>
                                <q-rating
                                    v-model="item.rate"
                                    size="1em"
                                    color="yellow-5"
                                    icon="star_border"
                                    icon-selected="star"
                                />
                                <q-item-label id="ocultar" style="font-size:.8em; margin-top:10%;">{{ item.fecha | obtenerFecha }}</q-item-label>
                            </q-item-section>    
                        </q-item>
                    </q-list>

                    <q-btn color="primary" class="full-width" icon="navigation" label="Obtener ruta" @click="obtenerRuta()" />
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-page>    
</template>
<script>
//import GmapCustomMarker from 'vue2-gmap-custom-marker'

import { mapMutations, mapState } from 'vuex'
import { auth, firebase, db } from '../firebase'

import * as moment from 'moment';

import { Plugins } from '@capacitor/core'

const { Geolocation } = Plugins

export default {
    name: 'Map',

    data: () => ({
        panel: 'Mapa',
        detalleBoutique: false,
        boutiques: [],
        boutique: '',
        comentarios: [],
        miUbicacion: {},
        geoId: '',
        rating: 3,
    }),

    async mounted() {  
        this.obtenerBoutiques()
        this.getCurrentPosition()

        // // we start listening
        // this.geoId = Geolocation.watchPosition({}, (position, err) => {
        //     console.log('New GPS position')
        //     this.position = position
        // })
    },

    filters: {
        obtenerFecha(date){
            let fecha = moment(date.toDate()).format('LL')
            return fecha
        }
    },

    methods:{
        async obtenerBoutiques(){
            try {
                let response = await db.collection('boutiques')
                                        .onSnapshot(query => {       
                                            query.forEach(doc => {
                                                this.boutiques.push(doc.data())
                                            })
                                        })
            } catch (e) {
            
            }
        },

        async detallesBoutique(item){
            this.boutique = item
            this.comentarios = []
            try {
                let response = await db.collection('comentarios')
                                        .where('boutique', '==', item.id)
                                        .get()
                                        .then(query => {
                                            query.forEach(doc => {
                                                this.comentarios.push(doc.data())
                                            })
                                        })
                                        
            } catch (e) {
            
            }
            this.detalleBoutique = !this.detalleBoutique
        },

        getCurrentPosition() {
            Geolocation.getCurrentPosition().then(position => {
                let coordenadas = {
                    _lat: position.coords.latitude,
                    _long: position.coords.longitude
                }
                console.log(coordenadas)
                this.miUbicacion = coordenadas
            })
        },

        obtenerRuta(){
            let directionsService = new google.maps.DirectionsService();
            let directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(this.$refs.xyz.$mapObject)

            let origen = new google.maps.LatLng(this.miUbicacion._lat, this.miUbicacion._long);
            let destino = new google.maps.LatLng(this.boutique.ubicacion._lat, this.boutique.ubicacion._long);

            var request = {
                origin: origen,
                destination: destino,
                travelMode: 'DRIVING'
            }

            directionsService.route(request, function(response, status) {
                if (status == 'OK') {
                    directionsRenderer.setDirections(response);
                }
            })
        }
    },

    // beforeDestroy(){
    //     Geolocation.clearWatch(this.geoId)
    // }

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