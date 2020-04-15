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
        <div class="display-2">
          <p>No tiene fotos</p>
        </div>
      </v-row>
    </v-sheet>
    <v-img
      v-else
      style="height: 100%; width: 100%"
      :src="image"
      aspect-ratio="1"
    />
  </div>
</template>

<script>

  export default {
    props: {
      imageSrc: {
        type: String,
        default: null,
      },
      cycle: {
        type: Boolean,
        default: true,
      },
      height: {
        type: Number,
        default: 300,
      },
      width: {
        type: Number,
        default: 300,
      },
    },
    data () {
      return {
        // cycle: false
      }
    },
    computed: {
      image () {
        return this.imageSrc
      },
    },
  }
</script>
