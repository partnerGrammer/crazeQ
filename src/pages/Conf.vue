<template>
  <div class="q-pa-md">
      <q-btn color="white" text-color="black" label="<"  style="float:right;"/>
    <div class="q-gutter-sm" style="margin-top:-10%;">        
    <q-list>
    <h4>Filtros</h4>
      <q-item tag="label" v-ripple style="margin-top:-10%;">
        <q-item-section avatar>
          <q-checkbox v-model="color" val="Vestidos" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Vestidos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple style="margin-top:-5%;">
        <q-item-section avatar>
          <q-checkbox v-model="color" val="Blusas" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Blusas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple style="margin-top:-5%;">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Faldas" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Faldas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple style="margin-top:-5%;">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Chaquetas" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Chaquetas y abrigos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple style="margin-top:-5%;">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Sudaderas" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Sudaderas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple style="margin-top:-5%;">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Suéteres" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Suéteres</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple style="margin-top:-5%;">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Camisetas" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Camisetas</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple style="margin-top:-5%;">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Bottom" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Bottom</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple style="margin-top:-5%;">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="Tops" color="black"  />
        </q-item-section>
        <q-item-section>
          <q-item-label>Tops y Conjuntos</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple style="margin-top:-5%;">
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="baño" color="black" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Trajes de baño</q-item-label>
        </q-item-section>
      </q-item>
    
    </q-list>
    </div>

    <div class="q-px-sm q-mt-sm">
      Your selection is: <strong>{{ color }}</strong>
    </div>
    <hr><br>
    <h5 style="margin-top:-2vh;">Rango de busqueda</h5>
      <div class="q-pa-md" style="margin-top:-5%;">

    <q-range
      v-model="label"
      :min="0"
      :max="100"
      :step="1"
      label
            :left-label-value="label.min + 'Km'"
      :right-label-value="label.max + 'Km'"
      label-always
      color="black"
    />
    <q-btn color="black" class="full-width" label="Aplicar" type="submit" style="margin-top:10%;"/>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      color: [],
        label: {
        min: 0,
        max: 50
      }
    }
  }
}
</script>