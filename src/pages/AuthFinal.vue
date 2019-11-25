    <template>
    <div style="position: fixed;" >
       <div class="q-gutter-y-md " >
      <q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Login', value: 'mails' },
          { label: 'Registrarse', value: 'alarms' }
        ]"
        style="text-align:center; margin-top:15%;"
      />

      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders con-estilo">
        <q-tab-panel name="mails" >

          <!-- Inicio formulario registro -->
            <div class="text-h6" style="margin-top:5%;margin-bottom:10%;">Registro</div>
            
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
        <q-btn color="black" class="full-width" label="Registrarse" to="/slider" type="submit" />
        <!-- <q-btn type="reset" color="black" class="full-width" label="Limpiar" /> -->
        <img src="../assets/separador.png" style="width:50%; margin-top:5%;"> <br>
        <img src="../assets/google.png" style="width:10%; margin-top:5%; margin-right:5%;">
        <img src="../assets/facebook.png" style="width:10%; margin-top:5%;">

      </div>
    </q-form>
  <!-- Fin del formulario registro -->
        </q-tab-panel>

        <q-tab-panel name="alarms">
           <!-- Inicio formulario login -->
            <div class="text-h6" style="margin-top:10%;">Login</div>
            
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
        <q-btn color="black" class="full-width" label="Registrarse" to="/slider" type="submit" />
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
    </div>
    </template>
   
    
<script>
export default {
name:'modal',

data() {
    return {
        panel: 'mails',
       icon: false,     
    }
  }}
</script>
<style>
.con-estilo{
    width: 90%;
    margin-left: 5%;
}
</style>