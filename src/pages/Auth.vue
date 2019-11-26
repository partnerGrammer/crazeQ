<template>
  <div style="position: fixed;">
 <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="dark"
          indicator-color="dark"
          align="justify"
          narrow-indicator
          
        >
          <q-tab name="register" label="register"/>
          <q-tab name="login" label="login" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="register" >
            <!-- Inicio formulario registro -->
            <div class="text-h6" style="margin-top:50%;">Registro</div>
            
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      
    >
      <q-input
        filled
        v-model="name"
        label="Correo *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        style="top:10%;"
      />

      <q-input
        filled
        type="password"
        v-model="age"
        label="Password *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
        style="margin-top:2%;"
      />

      <div style="text-align: center;">
        <q-btn color="black" class="full-width" label="Registrarse" type="submit" />
        <!-- <q-btn type="reset" color="black" class="full-width" label="Limpiar" /> -->
        <img src="../assets/separador.png" style="width:50%; margin-top:5%;"> <br>
        <img src="../assets/google.png" style="width:10%; margin-top:5%; margin-right:5%;">
        <img src="../assets/facebook.png" style="width:10%; margin-top:5%;">

      </div>
    </q-form>
  <!-- Fin del formulario registro -->
          </q-tab-panel>

          <q-tab-panel name="login">


            <!-- Inicio formulario login -->
            <div class="text-h6" style="margin-top:50%;">Login</div>
            
 <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      
    >
      <q-input
        filled
        v-model="name"
        label="Correo *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        style="top:50%;"
      />

      <q-input
        filled
        type="password"
        v-model="age"
        label="Password *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
        style="margin-top:2%;"
      />

      <div style="text-align: center;">
        <q-btn color="black" class="full-width" label="Registrarse" type="submit" />
        <!-- <q-btn type="reset" color="black" class="full-width" label="Limpiar" /> -->
        <img src="../assets/separador.png" style="width:50%; margin-top:5%;"> <br>
        <img src="../assets/google.png" style="width:10%; margin-top:5%; margin-right:5%;">
        <img src="../assets/facebook.png" style="width:10%; margin-top:5%;">

      </div>
    </q-form>

    <!-- Fin formulario login -->

    
          </q-tab-panel>

        </q-tab-panels>
  </div>
  
</template>
<script>
export default {
  data () {
    return {
       tab: 'mails',
      name: null,
      age: null,
    }
  },

  methods: {

    onReset () {
      this.name = null
      this.age = null
    }
  }
}
</script>