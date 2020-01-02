<template>
    <q-layout class="animated slideInDown delay-1s" v-if="prenda != null">
        <q-header elevated>
            <q-toolbar class="header">
                <q-btn flat round dense icon="arrow_back" to="/slider" />
                <q-toolbar-title>
                    {{ prenda.nombre }}
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container>         
            <div class="wrapp" style="margin-bottom:12%;"> 
                <q-card class="my-card">        
                    <img class="sombra" :src="prenda.foto" width="100%" alt="">
                </q-card>
                <br>
            
                <div class="row">
                    <p class="text-weight-light">{{prenda.categoria}}</p>                
                </div>
                <div class="row">
                    <p style="font-size:25px;">${{ prenda.precio }}</p>
                    <q-space />
                            
                    <img src="../assets/icono1.png" style="width:9%; height:5%; margin-right:5%;"> 
                    <img src="../assets/icono2.png" style="width:8%; height:5%; margin-right:5%;"> 
                    <img src="../assets/icono3.png" style="width:8%; height:5%; margin-right:5%;"> 
                    <img src="../assets/icono4.png" style="width:8%; height:5%; margin-right:2%;">               
                </div>
                <div class="row">
                    <div class="talla" v-for="(item, index) in prenda.tallas" :key="index">
                        {{ item }}
                    </div>
                    <!-- <img src="../assets/xs.png" style="width:8%; height:5%; margin-right:5%;">           
                    <img src="../assets/s.png" style="width:8%; height:5%; margin-right:5%;">           
                    <img src="../assets/m.png" style="width:8%; height:5%; margin-right:5%;">           
                    <img src="../assets/l.png" style="width:8%; height:5%; margin-right:5%;">           
                    <img src="../assets/xl.png" style="width:8%; height:5%; margin-right:5%;">            -->
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
                                {{prenda.descripcion}}
                            </q-card-section>
                            </q-card>
                        </q-expansion-item>

                        <q-expansion-item
                            expand-separator
                            label="DISPONIBILIDAD"
                        >
                            <q-card>
                            <q-card-section>
                                Disponible
                            </q-card-section>
                            </q-card>
                        </q-expansion-item>

                        <q-expansion-item v-if="boutique != null"
                            expand-separator
                            label="DIRECCIÓN DE RECOLECCIÓN"
                        >
                            <q-card>
                            <q-card-section>
                                {{ boutique.direccion }}
                            </q-card-section>
                            </q-card>
                        </q-expansion-item>
                    </q-list>
                </div>
            </div>
            <br>
        </q-page-container>
    </q-layout>
        
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { auth, firebase, db } from '../firebase'

export default {
    name: 'Details',
    data(){
        return{
            prenda: null,
            boutique: null,
        }
    },

    mounted() {
        this.obtenerPrenda() 
    },

    computed: {
        prendaTallas(){
            if(this.prenda != null){
                this.prenda.tallas.forEach(element => {
                   return 
                })
            }
        }
    },

    methods:{
       async obtenerPrenda(){
           try {
                let response = await db.collection('prendas').doc(this.$route.params.id).get()
                if(response.exists){
                    this.prenda = response.data()
                    this.obtenerBoutique() 
                }
            } catch (e) {
            
            } 
       },

       async obtenerBoutique(){
           try {
               let response = await db.collection('boutiques').doc(this.prenda.boutique).get()
               if(response.exists){
                   this.boutique = response.data()
               }
           } catch (e) {
           
           }
       }
    },

}
</script>

<style>
    .wrapp{
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;  
        margin-bottom: 5%;  
    }

    .talla{
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(116, 116, 116, 1);
        color: rgba(116, 116, 116, 1);
        border-radius: 5px;
        margin-right: 15px;
    }

    .sombra{
    -moz-box-shadow: 1px 2px 4px rgba(0, 0, 0,0.5);
    -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    }
</style>