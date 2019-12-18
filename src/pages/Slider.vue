<template>
  <q-layout style="position: fixed;">
    <q-page-container id='contenedor' class="fondo" >
      <q-page>

      <q-slide-item @left="onLeft" @right="onRight"  left-color="pink-2" right-color="pink-2" ref="elemento">
        <template v-slot:left>
          <img src="../assets/dislike.png" class="boton">
        </template>
        <template v-slot:right>
          <img src="../assets/like.png" class="boton">
        </template>
        <q-item class="fondo">
            <q-btn @click="details"  class="altura" >
              <q-card   class="altura animated flipInY delay-5s" >
            <img :src="this.posts[0].foto" class="" style="width:100%; height:100%;">
             </q-card>
        </q-btn>
        </q-item>
      </q-slide-item>

      <div style="text-align:center;">
      <img id="like" src="../assets/like.png" @click="onLeft()">
      <img id="dislike" src="../assets/dislike.png" @click="onRight()">
      </div>

    </q-page>

    </q-page-container>
  </q-layout>
</template>

<script>
import { db } from '../firebase/init'
import firebase, { functions } from 'firebase'
let database = firebase.firestore();
let userid  = firebase.auth().currentUser.uid;
import { async } from 'q';
export default {
  name: 'PageIndex',
  data(){
    return{
        posts: [],
        likes: [],
        post: ''
    }
  },
  created(){
    this.creacion_o_no()
  },
   mounted() {
     let userid  = firebase.auth().currentUser.uid;
     var user = firebase.auth().currentUser;
     console.log(user.uid, user.email)
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

db.collection("prendas").doc("XpTKhAwFbK3V9xcuK7oc").collection("ropa").get()
.then(querySnapshot => {
    querySnapshot.forEach(doc => {
        this.posts.push(doc.data(),doc.id)
        console.log(this.posts)
    });
})

        },
  methods:{
   async onLeft(){
            try {
              let userid  = firebase.auth().currentUser.uid;
            let cityRef = await db.collection('tabla:Likes').doc(userid).get();
            console.log(cityRef)
            if(cityRef.exists){
              let data = cityRef.data();
              data.arrayLikes.push(this.posts[0].id)
              data.arrayTotal.push(this.posts[0].id)
              await db.collection('tabla:Likes').doc(userid).set({
              arrayLikes:     data.arrayLikes,
              arrayDislikes:  data.arrayDislikes,
              arrayTotal:     data.arrayLikes,
            }).then(ref => {
              console.log('Added document with ID: ',  this.posts[0].id);
            });
            }
      } catch (error) {
        console.log('No se armo'+error)
      }
      this.posts.splice(0,2);
      this.post=this.posts[0];
      this.$refs.elemento.reset();

    },

   async onRight(){
      try {
        let userid  = firebase.auth().currentUser.uid;
            let cityRef = await db.collection('tabla:Likes').doc(userid).get();
            console.log(cityRef)
            if(cityRef.exists){
              let data = cityRef.data();
              data.arrayDislikes.push(this.posts[0].id)
              data.arrayTotal.push(this.posts[0].id)
              await db.collection('tabla:Likes').doc(userid).set({
              arrayLikes:     data.arrayLikes,
              arrayDislikes:  data.arrayDislikes,
              arrayTotal:     data.arrayTotal,
            }).then(ref => {
              console.log('Added document with ID: ',  this.posts[0].id);
            });
            }
      } catch (error) {
        console.log('No se armo'+error)
      }
      this.posts.splice(0,2);
      this.post=this.posts[0];
      this.$refs.elemento.reset();

    },
    details: function(){
      this.$router.push({ path: `/details/${this.posts[1]}` })
    },
              // Inicializar arreglos
              async boceto(){                
                 try{
                      db.collection('tabla:Likes').doc(this.userid).set({
                      arrayLikes:  [],
                      arrayTotal:     [],
                      arrayDislikes:     [],
                      }).then(ref => {
                        console.log('Added document with ID: ', ref.id);
                      });
                }
                catch(error){
                  console.log(error)
                }
                    }, //    Fin Dislike

              async creacion_o_no(){     
                      const usersRef = db.collection('tabla:Likes').doc(this.userid)

                      usersRef.get()
                        .then((docSnapshot) => {
                          if (docSnapshot.exists) {
                            usersRef.onSnapshot((doc) => {
                              console.log("Si existe, todo bien");
                            });
                          } else {
                            console.log("No existe, todo mal");
                            this.boceto()
                          }
                      });
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
    }

</style>
