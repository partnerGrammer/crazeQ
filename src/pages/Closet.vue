<template>
<div style="height: 90%; width:100%; position:absolute;">
             <q-btn color="white" text-color="black" label="<" to="/slider" style="float:right; left:-5%; top:3%;"/>
             <div class="text-h5" style="margin-top:5%;margin-left:5%;">Prendas que te gustan</div>  
              <hr style="margin-top:5%;">
         
          
          <!-- Inicio segunda lista -->
            <div class="row q-col-gutter-x-xs q-col-gutter-y-lg" style="margin-bottom:20%;">
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
                 
                    </div>
            <!-- fin segunda lista -->
      
    </div>
  
</template>

<script>
import { db } from '../firebase/init'
import firebase from 'firebase'
let database = firebase.firestore();
export default {
  name: 'PageIndex',
  data(){
    return{
        posts: [],
        post: ''
    }
  },
  
    methods:{
    details: function(){
      this.$router.push({ path: `/details/${this.posts[1]}` }) 
      // router.push({ path: 'details', query: { idCategory: '1' } })
    }
},
   created(){

    //  axios.get("https://backend-app-laravel.herokuapp.com/api/getGallery").then(response=>{
    //  this.posts = response.data;
    //  this.post = response.data[0];
    //  console.log(response); 
    //  })
        
  },
  mounted() {
     var user = firebase.auth().currentUser;
     if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}else{
  this.$router.push({path: 'login'})
}
        //Obtenemos a los usuario
      

          db.collection("prendas").doc("XpTKhAwFbK3V9xcuK7oc").collection("ropa").get()
          
          .then(querySnapshot => {
            this.posts = []
              querySnapshot.forEach(doc => {
                  this.posts.push(doc.data(),doc.id)
                  console.log(this.posts)
              });
          })

        },
  }
 
</script>
<style>

 @media screen and (min-width: 150px) and (max-width: 400px) {
      .contenedor{
           left: 5%;
      margin-left:   1%;
      margin-right:  1%;
      margin-bottom: -5%;
      margin-top:    1%;    
      }
      .imagencloseth{
        width:    40vw;
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
      margin-right:  2%;
      margin-bottom: -2%;
      margin-top:    1%;    
      }
      .imagencloseth{
        width:    40vw;
        height:   100%;
        -moz-box-shadow: 1px 2px 4px rgba(0, 0, 0,0.5);
  -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
      }
      }


</style>