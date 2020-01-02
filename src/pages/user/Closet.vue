<template>
    <q-page>
        <q-header elevated>
            <q-toolbar class="header">
                <q-btn flat round dense icon="arrow_back" to="/slider" />
                <q-toolbar-title>
                    Closet
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

         <div>
            <div class="row">
                <div class="col-4" v-for="(item, index) in posts" :key="index">
                    <router-link :to="{ name:'details', params: { id: item.id } }">
                        <div class="closet" :style="{ backgroundImage: 'url(' + item.foto + ')' }">
                            <div class="closet-title">
                                {{ item.nombre }}
                            </div>
                        </div>
                    </router-link>
                </div>
                <!-- <div class="q-col-gutter-x-xs q-col-gutter-y-lg" style="margin-bottom:20%;">
                    <q-btn flat v-for="post in posts"
                        :key="post" @click="details()" class="contenedor">                      
                        <q-img
                            :src="post.foto"
                            spinner-color="white"
                            class="rounded-borders imagencloseth animated flipInY delay-5s"
                            
                            to="/details"
                        >
                        <div class="text" style="width:100%; text-align:center;">Descripcion</div>
                        </q-img>
                    </q-btn>     
                </div> -->
            </div>
        </div>
    </q-page>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { auth, firebase, db } from '../../firebase'

export default {
    name: 'Closet',

    data(){
        return{
            posts: [],
        }
    },

    mounted(){
        this.obtenerPrendas()
    },

    computed: {
        ...mapState([
            'sesion'
        ])
    },

    methods: {
        async obtenerPrendas(){
            try {
                let response = await db.collection('likes').doc(this.sesion.usuario.uid)
                                        .collection('like')
                                        .get()
                                        .then(querySnapshot => {
                                            querySnapshot.forEach(doc => {
                                                this.posts.push(doc.data())
                                            })
                                        })
                console.log(response.data())
            } catch (e) {
            
            }
        }
    },
}
 
</script>
<style>
    .container{
        margin-top: 10px;
    }

    .closet{
        width: 100%;
        height: 250px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }

    .closet-title{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
    }

 /* @media screen and (min-width: 150px) and (max-width: 400px) {
      .contenedor{
           left: 5%;
      margin-left:   1%;
      margin-right:  1%;
      margin-bottom: -5%;
      margin-top:    1%;    
      }
      .imagencloseth{
        width:    90vw;
        height:   100%;
        -moz-box-shadow: 1px 2px 4px rgba(0, 0, 0,0.5);
  -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
      }
      }
       @media screen and (min-width: 400px) and (max-width: 1400px) {
      .contenedor{
        left: 5%;
      margin-left:   1%;
      margin-right:  1%;
      margin-bottom: -2%;
      margin-top:    1%;    
      }
      .imagencloseth{
        width:    90vw;
        height:   100%;
        -moz-box-shadow: 1px 2px 4px rgba(0, 0, 0,0.5);
  -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
      }
      } */


</style>