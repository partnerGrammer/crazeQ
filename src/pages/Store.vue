<template>
    <q-page>
        <q-header elevated>
            <q-toolbar class="header">
                <q-btn flat round dense icon="arrow_back" to="/slider" />
                <q-toolbar-title>
                    {{ boutique.nombre }}
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <section class="row">
            <div class="logo" :style="{ backgroundImage: 'url(' + boutique.logo + ')' }"></div>
        </section>

        <section class="informacion">
            <p>{{ boutique.nombre }}</p>
            <p>{{ boutique.direccion }}</p>
            <p>{{ boutique.telefono }}</p>
        </section>

        <section class="row">
            <div class="col-4" v-for="(item, index) in posts" :key="index">
                <router-link :to="{ name:'details', params: { id: item.id } }">
                    <div class="closet" :style="{ backgroundImage: 'url(' + item.foto + ')' }">
                        <div class="closet-title">
                            {{ item.nombre }}
                        </div>
                    </div>
                </router-link>
            </div>
        </section>
    </q-page>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { auth, firebase, db } from '../firebase'

export default {
    name: 'Store',

    data(){
        return{
            boutique: {},
            posts: [],
        }
    },

    mounted() {
        this.obtenerBoutique()
        this.obtenerPrendas()
    },

    methods: {
        async obtenerBoutique(){
            try {
                let response = await db.collection('boutiques').doc(this.$route.params.id).get()

                if(response.exists){
                    this.boutique = response.data()
                }
            } catch (e) {
                console.log(e)
            }
        },

        async obtenerPrendas(){
            try {
                let response = await db.collection('prendas')
                                        .where('boutique', '==', this.$route.params.id)
                                        .limit(3)
                                        .get()
                                        .then(query => {
                                            query.forEach(doc => {
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
    .logo{
        width: 100vw;
        height: 60vh;
        background-position: center;
        background-repeat: no-repeat
    }

    .informacion{
        line-height: 10px;
        margin-top: 15px;
        margin-left: 10px;
    }

    .informacion p:nth-child(1){
        font-size: 28px;
    }

    .informacion p:nth-child(2){
        font-size: 14px;
    }

    .informacion p:nth-child(3){
        font-size: 14px;
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
</style>