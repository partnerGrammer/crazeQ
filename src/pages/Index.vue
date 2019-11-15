<template>
  <q-layout>
    <q-page-container>
      <q-page style="">
      
      <q-slide-item @left="onLeft" @right="onRight" v-for="(item, index) in imagenes" :key="index">
        <template v-slot:left>
          <q-icon name="done" />
        </template>
        <template v-slot:right>
          <q-icon name="alarm" />
        </template>
        <q-item>
          <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
          </q-card>
        </q-item>
      </q-slide-item>

      <q-footer reveal persistent>
        <q-tabs
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
      </q-footer>
    </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      imagenes: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  methods:{
    onLeft: function(){
      alert('Izquierda')
    },

    onRight: function(){
      alert('Derecha')
    }
  }
}
</script>
