<template>
  <q-layout style="position: fixed;">
    <q-page-container class="fondo" >
      <q-page v-if="posts.length != 0">
      
      <q-slide-item @left="onLeft" @right="onRight" left-color="pink-2" right-color="pink-2" ref="elemento">
        <template v-slot:left>
          <img src="../assets/dislike.png" class="boton"> 
        </template>
        <template v-slot:right>
          <img src="../assets/like.png" class="boton">
        </template>
        <q-item class="fondo">
          <q-card class="my-card altura">
            <img :src="post.url" >
          </q-card>
        </q-item>
              
      </q-slide-item>

      <div style="text-align:center;">
      <img id="like" src="../assets/like.png" @click="onLeft"> 
      <img id="dislike" src="../assets/dislike.png" @click="onRight">
      </div>

    </q-page>

    </q-page-container>
  </q-layout>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PageIndex',
  data(){
    return{
        posts: [],
        post: ''
    }
  },
   created(){

     axios.get("https://backend-app-laravel.herokuapp.com/api/getGallery").then(response=>{
     this.posts = response.data;
     this.post = response.data[0];
     console.log(response); 
     })
        
  },
  methods:{
    onLeft: function(){
      this.posts.splice(0,1);
      this.post=this.posts[0];
      this.$refs.elemento.reset();
    },

    onRight: function(){
      this.posts.splice(0,1);
      this.post=this.posts[0];
      this.$refs.elemento.reset();
    }
  }
}
</script>
<style>
  .fondo{
    background-color: pink;
    /* position: fixed; */
  }
  
  @media screen and (min-width: 150px) and (max-width: 350px) {
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
    /* width: 100%; */
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
        width:15%;
      }
      #dislike{
        width:15%;
        margin-left:10%;
      }
      .boton{
        width:100%;
      }
      .altura{
        height: 78vh;
        width: 100%
      }
    }

</style>
