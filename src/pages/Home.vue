<template>

  <q-layout>      
     <q-page-container class="history">
      <q-page style="">
       <div v-if="show" id="salida" style="text-align: center; position: absolute; top: 45%; width: 100%;"  class="animated fadeInDown delay-5s">
                <img  src="../assets/logocraze.png" style="width:220px;"><br>                                 
            </div>           
            <div style="text-align: center; position: absolute; top: 58%; width: 100%;"><!--  Center -->    
                <q-btn  style="width:60%;" color="white" to="login"  text-color="black" label="ingresar"/>   
                    <br>  
                    <img src="../assets/separador.png" style="width:220px;"> 
                    <br>     
                </div><!--  Center -->
           </q-page>
    </q-page-container>

  </q-layout>

</template>

<script>
import 'quasar-extras/animate/fadeIn.css'
import 'quasar-extras/animate/fadeOut.css'

// Or import them all -- but notice that your
// bundle will probably include unused ones,
// so more KB over the wire that never get used.
import 'quasar-extras/animate'
export default {
   name: 'PageName',
   
   methods:{
     onClick(){
       alert('Hola');
     },
   },
   data(){
     return{
       show:true
     }
   },
        
}
</script>
<style>
.history {
  background-image:linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url('../assets/fondo.png');
  background-repeat: no-repeat;
  background-size:cover;  
}
</style>