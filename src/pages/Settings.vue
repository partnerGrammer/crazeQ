<template>
    <q-page>
        <q-header elevated>
            <q-toolbar class="header">
                <q-btn flat round dense icon="arrow_back" to="/slider" />
                <q-toolbar-title>
                    Configuracion
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <div class="animated fadeIn delay-5s">
            <div class="q-gutter-sm">        
                <q-list>
                    <q-item tag="label" v-ripple v-for="(item, index) in categorias" :key="index">
                        <q-item-section>
                            <q-checkbox v-model="seleccion" :val="item.nombre" :label="item.nombre" color="black" />
                        </q-item-section>
                    </q-item>
                </q-list>
            </div> 
            <hr><br>
            <h5 style="margin-top:-2vh;">Rango de busqueda</h5>
            <div class="q-pa-md" style="margin-top:-5%;">
                <q-range
                    v-model="rango"
                    :min="0"
                    :max="100"
                    :step="1"
                    label
                    :left-label-value="rango.min + 'Km'"
                    :right-label-value="rango.max + 'Km'"
                    label-always
                    color="black"
                />
                <q-btn color="black" class="full-width" label="Aplicar" style="margin-top:5%;" @click="guardarConfiguracion"/>
                <q-btn color="red" class="full-width" label="Cerrar sesion" @click="logout()" style="margin-top:5%;"/>
            </div>
        </div>
    </q-page>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { auth, firebase, db } from '../firebase'

export default {
    name: 'Settings',

    data () {
        return {    
            categorias: [],
            seleccion: [],
            rango: {
                min: 0,
                max: 50
            }
        }
    },

    mounted(){
        this.obtenerCategorias()
        this.obtenerConfiguracion()
    },

    computed: {
        ...mapState([
            'sesion'
        ])
    },

    methods:{
        async obtenerCategorias(){
            try {
                let response = await db.collection('categorias')
                                        .get()
                                        .then(query => {
                                            query.forEach(doc => {
                                                this.categorias.push(doc.data())
                                            })
                                        })
            } catch (e) {
            
            }
        },

        async obtenerConfiguracion(){
            try {
                let response = await db.collection('configuraciones')
                                        .doc(this.sesion.usuario.uid)
                                        .get()
                if(response.exists){
                    this.configuraciones = response.data()
                    this.seleccion = this.configuraciones.categorias
                    this.rango = this.configuraciones.rangoBusqueda
                }

            } catch (e) {
            
            }
        },

        async guardarConfiguracion(){
            let configuracion = {
                categorias: this.seleccion,
                rangoBusqueda: this.rango,
                nombre: this.sesion.usuario.nombres,
                apellidos: this.sesion.usuario.apellidos
            }

            try {
                let response = await db.collection('configuraciones')
                                        .doc(this.sesion.usuario.uid)
                                        .set(configuracion)               
            } catch (e) {
                console.log(e)
            }
        }
    },

    
}
</script>

<style>
    .espaciado{
        margin-top:-3%;
    }
</style>