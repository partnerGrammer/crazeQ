<template>
  <q-layout view="lHh Lpr lFf">
   
<q-footer reveal persistent class="tipo">
  
        <q-tabs
         v-model="tab"
          class="bg-white"
         
        >          
        <!-- <router-link  :to="{name:'home'}" style="text-decoration:none;"> <q-tab style="color:black;" name="home" icon="alarm" label="Index" /> </router-link> 
        <router-link  :to="{name:'slider'}" style="text-decoration:none;"> <q-tab style="color:black;" name="slider" icon="alarm" label="slider" /> </router-link> 
        <router-link  :to="{name:'auth'}" style="text-decoration:none;"> <q-tab style="color:black;" name="auth" icon="alarm" label="login" /> </router-link> 
        <router-link  :to="{name:'details'}" style="text-decoration:none;"> <q-tab style="color:black;" name="details" icon="alarm" label="details" /> </router-link>    
         -->
        <!-- 
        <q-btn color="pink-2" style="width:15%;" label="Index" to="/" /> 
        <q-btn color="pink-2" style="width:15%;" label="Login"  to="/auth" />        
        <q-btn color="pink-2" style="width:15%;" label="Slider"  to="/slider" />
        <q-btn color="pink-2" style="width:15%;" label="Details" to="/details"/>
        <q-btn color="pink-2" style="width:20%;" label="Config" to="/conf"/>
        <q-btn color="pink-2" style="width:20%;" label="Maps" to="/map"/> -->

         <!-- <q-tab name="home" class="home" label="" to="/slider"/>
        <q-tab name="tienda" class="tienda"  label="" />
        <q-tab name="gancho" class="gancho"  label="" /> -->

         <!-- <q-route-tab
          to="/slider"
          class="home"
          exact
          
        />
        <q-route-tab
          to="/"
          class="gancho"
          exact
        />
        <q-route-tab
          to="/map"
          class="tienda"
          exact
        />
              <q-route-tab
          to="/conf"
          class="conf"
          exact
              
        /> -->
 

        <q-btn flat  to="/slider" class="caja" style="">
            <img src="~assets/home.png" class="imagen">
        </q-btn>
        <q-btn flat class="caja"  to="/closet" >
            <img src="~assets/gancho.png" class="imagen" >
        </q-btn>
        <q-btn flat class="caja"  to="/map" >
            <img src="~assets/tiendas.png" class="imagen" >
        </q-btn>
        <q-btn flat class="caja"  to="/conf" >
            <img src="~assets/config.png" class="imagen">
        </q-btn>
        
      </q-tabs>

      </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
    }
  },
  methods:{
    onClick(){
      alert('hola');
    }
  }
}
</script>
<style>
.caja{
  margin-top: 3%;
  margin-bottom: 5%;
  margin-left: 5%;
  margin-right: 4%;
  width:25%;
}
.imagen{
width:8vw; height: 4vh;
}
.tipo{
  height:8%;
  z-index: 100000;
}
@media screen and (min-width: 0px) and (max-width: 350px) {
     .caja{
  margin-top: 2%;
  margin-bottom: 3%;
  margin-left: 3%;
  margin-right: 3%;
}
.imagen{
width:8vw; height: 4vh;
}
.tipo{
  height:8%;
}
}
@media screen and (min-width: 750px) and (max-width: 1550px) {
     .caja{
  margin-top: 1%;
  margin-bottom: 3%;
  margin-left: 8%;
  margin-right: 8%;
}
.imagen{
width:7vw; height: 8vh;
}
.tipo{
  height:12%;
}
}
</style>
