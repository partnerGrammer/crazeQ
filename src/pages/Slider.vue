<template>
    <q-layout style="position: fixed;">
        <q-page-container id='contenedor' class="fondo" >
            <q-page v-if="posts.length != 0">

                <q-slide-item @left="onLeft" @right="onRight" left-color="pink-2" right-color="pink-2" ref="elemento">
                    <template v-slot:left>
                        <img src="../assets/dislike.png" class="boton">
                    </template>
                    <template v-slot:right>
                        <img src="../assets/like.png" class="boton">
                    </template>
                    <q-item class="fondo">
                        <q-btn :to="{ name:'details', params: { id: posts[0].id } }" style="padding: 0;">
                            <q-card class="altura animated flipInY delay-5s" flat>
                                <div class="layer"></div>
                                <img :src="posts[0].foto" class="" style="width:110%;">
                            </q-card>
                        </q-btn>
                    </q-item>
                </q-slide-item>

                <div class="row">
                    <div class="col-6 acciones text-center">
                        <img id="dislike" src="../assets/dislike.png" @click="onRight()">
                    </div>
                    <div class="col-6 acciones text-center">
                        <img id="like" src="../assets/like.png" @click="onLeft()">
                    </div>
                </div>

            </q-page>

        </q-page-container>
    </q-layout>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { auth, firebase, db } from '../firebase'

export default {
    name: 'Slider',
    data(){
        return{
            posts: [],
            last: null,
        }
    },

    mounted() {
        this.obtenerPrendas()
    },

    computed: {
        ...mapState([
            'sesion'
        ]),

        filtrarPosts(){
            if(this.sesion.configuracion != null){
                let postsFiltrados = []

                this.posts.forEach((element, index) => {
                    this.sesion.configuracion.categorias.forEach(item => {
                        if(item == element.categoria){
                            postsFiltrados.push(element)
                        }
                    })
                })

                this.tamanoActual = postsFiltrados.length
                return postsFiltrados
            }
        }
    },

    watch: {
        filtrarPosts(){
            if(this.filtrarPosts.length == 0 || this.filtrarPosts.length == 1){
                this.obtenerSiguientesPrendas()
            }
        },
    },

    methods:{

        async obtenerPrendas(){
                try {
                let response = await db.collection('prendas')
                    .orderBy('id')
                    .limit(4)
                    .startAt(this.sesion.indice)
                    .onSnapshot(query => {
                        this.last = query.docs[query.docs.length - 1];
                        query.forEach(doc => {
                            this.posts.push(doc.data())
                        })
                        
                    })
                
            } catch (e) {
                console.log(e)
            }
            finally{
                
            }
        },

        async obtenerSiguientesPrendas(){
            try {
                db.collection('prendas')
                    .orderBy('id')
                    .limit(4)
                    .startAfter(this.last)
                    .onSnapshot(query => {
                        this.last = query.docs[query.docs.length - 1];
                        query.forEach(doc => {
                            this.posts.push(doc.data())
                        })
                    })
            } catch (e) {
                console.log(e)
            }
            
        },

        async onLeft(){

            try {
                let response = await db.collection('likes')
                                        .doc(this.sesion.usuario.uid)
                                        .collection('disLike')
                                        .doc(this.posts[0].id)
                                        .set(this.posts[0])
                //await db.collection('usuarios').doc(this.sesion.usuario.uid).set({ lastPost: this.posts[1].id }, { merge: true })
                
                //this.$store.commit('sesion/actualizarIndice', this.posts[1].id)

                let index = this.posts.findIndex(element => element.id == this.filtrarPosts[0].id)

                this.posts.splice(0, 1)
                
                this.$refs.elemento.reset()
            
            } catch (e) {
                console.log(e)
            }
        },

        async onRight(){

            try {
                let response = await db.collection('likes')
                                        .doc(this.sesion.usuario.uid)
                                        .collection('like')
                                        .doc(this.posts[0].id)
                                        .set(this.posts[0])
                //await db.collection('usuarios').doc(this.sesion.usuario.uid).set({ lastPost: this.posts[1].id }, { merge: true })
                
                //this.$store.commit('sesion/actualizarIndice', this.posts[1].id)
                
                let index = this.posts.findIndex(element => element.id == this.filtrarPosts[0].id)

                this.posts.splice(0, 1)
            
                this.$refs.elemento.reset()
            } catch (e) {
                console.log(e)
            }
        },
    }
}
</script>
<style>
    .fondo{
        background-color: rgba(241, 170, 237, 1);
    }

    .layer{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .contenedor-imagen{
        padding: 0;
    }

    .q-slide-item__content .q-btn__wrapper {
        padding: 0;
    }

    .altura{
        height: 85vh;
    }

    .acciones{
        height: 15vh;
    }

    .acciones img{
        width: 50px;
    }

  /* @media screen and (min-width: 150px) and (max-width: 350px) {
      #like{
        width:12%;
      }
      #dislike{
        width:12%;
        margin-left:10%;
      }
      .boton{
        width:35vw;
        margin-top: 15%;
      }
      .altura{
        height: 82vh;
        width: 100%
      }
    }
  @media screen and (min-width: 350px) and (max-width: 650px) {
      #like{
        width:15%;
      }
      #dislike{
        width:15%;
        margin-left:10%;
      }
      .boton{
        width:65%;
      }
      .altura{
        height: 82vh;
        width: 100%
      }
    }
  @media screen and (min-width: 650px) and (max-width: 1350px) {
      #like{
        width:10%;
      }
      #dislike{
        width:10%;
        margin-left:10%;
      }
      .boton{
        width:100%;
      }
      .altura{
        height: 78vh;
        width: 100%
      }
    } */

</style>
