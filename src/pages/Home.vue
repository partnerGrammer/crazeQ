<template>
  <q-layout class="history">
    <q-page-container>
      <q-page style="">
       <div style="text-align: center; position: absolute; top: 45%; width: 100%;">
                <img src="../assets/logocraze.png" style="width:220px;"><br>                    
            </div>
            <div style="text-align: center; position: absolute; bottom: 10%; width: 100%;"><!--  Center -->    
                <q-btn  style="width:80%;" to="/login" color="white" text-color="black" label="Standard" />   
                    <br>  
                    <img src="../assets/separador.png" style="width:220px;"> 
                    <br>  
                    <img src="../assets/logos-g-f.png" style="width:70px;">
                    <br>
                    <p style="color:white;">Registrarse</p>
                </div><!--  Center -->
           </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
   name: 'PageName',
   
   methods:{
     onClick(){
       alert('Hola');
     }
   }
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