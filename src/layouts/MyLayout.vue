<template>
  <q-layout view="lHh Lpr lFf">
   
<q-footer reveal persistent>
  
        <q-tabs
         v-model="tab"
          dense
          class="bg-white text-yellow shadow-2 hola"
        >          
        <!-- <router-link  :to="{name:'home'}" style="text-decoration:none;"> <q-tab style="color:black;" name="home" icon="alarm" label="Index" /> </router-link> 
        <router-link  :to="{name:'slider'}" style="text-decoration:none;"> <q-tab style="color:black;" name="slider" icon="alarm" label="slider" /> </router-link> 
        <router-link  :to="{name:'auth'}" style="text-decoration:none;"> <q-tab style="color:black;" name="auth" icon="alarm" label="login" /> </router-link> 
        <router-link  :to="{name:'details'}" style="text-decoration:none;"> <q-tab style="color:black;" name="details" icon="alarm" label="details" /> </router-link>    
         -->
        <q-btn color="pink-2" style="width:15%;" label="Index" to="/" />
        <q-btn color="pink-2" style="width:15%;" label="Login"  to="/auth" />        
        <q-btn color="pink-2" style="width:15%;" label="Slider"  to="/slider" />
        <q-btn color="pink-2" style="width:15%;" label="Details" to="/details"/>
        <q-btn color="pink-2" style="width:20%;" label="Config" to="/conf"/>
        <q-btn color="pink-2" style="width:20%;" label="Maps" to="/map"/>
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