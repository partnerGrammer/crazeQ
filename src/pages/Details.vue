<template>
  <q-layout style="height:100vh;">
    <q-page-container style="height:100vh;">
      <q-page style="height:100vh;">
      
      <div class="wrapp"> 
          <q-btn color="white" text-color="black" label="Back" />
          <q-card class="my-card">           
            <q-img
            src="https://vignette.wikia.nocookie.net/nickelodeon/images/e/ed/14909590588313-0.jpg/revision/latest?cb=20181018231543"
            spinner-color="white"
            />
          </q-card><br>
         
           <div class="row">
                <p class="text-weight-light">SUÉTER DE CORTE ASIMÉTRICO</p>                
            </div>
           <div class="row">
               <p style="font-size:25px;">$123.00</p>
                <q-space />
                           
               <img src="../assets/icono1.png" style="width:9%; height:5%; margin-right:5%;"> 
               <img src="../assets/icono2.png" style="width:8%; height:5%; margin-right:5%;"> 
               <img src="../assets/icono3.png" style="width:8%; height:5%; margin-right:5%;"> 
               <img src="../assets/icono4.png" style="width:8%; height:5%; margin-right:2%;">               
            </div>
            <div class="row">
                <img src="../assets/xs.png" style="width:8%; height:5%; margin-right:5%;">           
                <img src="../assets/s.png" style="width:8%; height:5%; margin-right:5%;">           
                <img src="../assets/m.png" style="width:8%; height:5%; margin-right:5%;">           
                <img src="../assets/l.png" style="width:8%; height:5%; margin-right:5%;">           
                <img src="../assets/xl.png" style="width:8%; height:5%; margin-right:5%;">           
            </div>
            <div class="row">
                <p style="margin-top:6%; margin-bottom:-2%;">Tabla de tallas</p>      
            </div>
            <hr>
            <div class="row">              
                  <q-list bordered class="rounded-borders" style="width:100%;">
      <q-expansion-item
        expand-separator
        label="DESCRIPCIÓN"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        label="DISPONIBILIDAD"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        label="DIRECCIÓN DE RECOLECCIÓN"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

  
    </q-list>
            </div>

 </div>
      <br>
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
  async mounted(){
   
  },
  methods:{
  
  }
}
</script>

<style>
.wrapp{
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;  
    margin-bottom: 5%;  
}
</style>