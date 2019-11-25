<template>
<div style="height: 90%;">
             <q-btn color="white" text-color="black" label="<" to="/slider" style="float:right; left:-5%;"/>
             <div class="text-h5" style="margin-top:5%;margin-left:5%;">Prendas que te gustan</div>  
    <div class="contenedor">            
           
          <!-- Inicio segunda lista -->
                                  <q-intersection
                                    v-for="index in 10"
                                    :key="index"
                                    once
                                    transition="scale"
                                  >
                                  <div class="row" style="margin-top:2vh; margin-bottom:-10%;">
                                    <!-- <div class="col-6"><img :src="post.url" style="width:33vw; "></div> -->
                                     <q-btn flat class="caja"  to="/details" >
                                     <q-img
                                      :src="post.url"
                                      spinner-color="white"
                                      class="rounded-borders"
                                      style="width:43vw;"
                                    >
                                    </q-img>
                                    </q-btn>
                                    
                                    <q-space />
                                    <!-- <div class="col-6"><img :src="post.url" style="width:33vw; margin-left:7%;"></div> -->
                                    <q-btn flat class="caja"  to="/details" >
                                     <q-img
                                      :src="post.url"
                                      spinner-color="white"
                                      class="rounded-borders"
                                      style="width:43vw;"
                                    >
                                    </q-img>
                                    </q-btn>
                                  </div>
                                      

                                  </q-intersection>
            <!-- fin segunda lista -->
      
    </div>
    </div>
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
        
  }
  }
 
</script>
<style>
.contenedor{
    margin-left:   15%;
    margin-right:  15%;
    
}

</style>