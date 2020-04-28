<template>
  <div style="width: 100%; height: 300px">
    <v-sheet
      v-if="!image"
      :color="'orange darken-1'"
      style="height: 100%; width: 100%"
      tile
    >
      <v-row
        style="height: 100%; width: 100%"
        align="center"
        justify="center"
      >
        <div>
          <p>No tiene fotos</p>
        </div>
      </v-row>
    </v-sheet>
    <v-img
      v-else
      style="height: 100%; width: 100%"
      :src="image"
      aspect-ratio="16/9"
      fill-height
      :contain="true"
    >
      <v-row
        v-if="onlyOne"
        align="center"
        justify="center"
      >
        <v-chip 
          :disabled="imgDefault"
          class="ma-2" 
          color="teal"
          text-color="white"
          @click="setDefault"
        > 
          <v-avatar left> <v-icon> mdi-checkbox-marked-circle </v-icon> </v-avatar>
          <p class="ma-0 justify:center; align: center;" v-if="imgDefault"> Principal </p>
          <p class="ma-0 justify:center; align: center;" v-if="!imgDefault"> ¿Principal? </p>
        </v-chip>
      </v-row>
    </v-img>
  </div>
</template>

<script>

  export default {
    props: {
      imageSrc: {
        type: String,
        default: null,
      },
      imgDefault: {
        type: Boolean,
        default: false,
      },
      onlyOne: {
        type: Boolean,
        default: false,
      },
      cycle: {
        type: Boolean,
        default: true,
      },
      styleComponent: {
        type: String,
        default: null,
      },
    },
    data () {
      return {
        // cycle: false
      }
    },
    computed: {
      image () {
        console.log(this.imageSrc, 'img src')
        return this.imageSrc
      },
    },
    methods: {
      setDefault(){
        console.log(this.imageSrc, 'set default')
        this.$emit('change:default')
      }
    }
  }
</script>
