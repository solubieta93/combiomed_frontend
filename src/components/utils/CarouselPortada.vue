<template>
  <v-carousel
    hide-delimiters
    cycle
    height="80vh"
    class="ma-0 pa-0"
  >
    <v-carousel-item
      v-for="(item,i) in combiomedPortada"
      :key="i"
    >
      <v-img
        :src="`${baseUrl}combiomed/${item}`"
        height="80vh"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default ({
    data: function () {
      return {
        combiomedPortada:
          [ 'combiomed0.png', 'combiomed2.png', 'combiomed3.png', 'combiomed4.png', 'combiomed6.png' ],
        baseUrl: process.env.BASE_URL,
      }
    },
  })
</script>
<style scoped>
.mycarousel {
    z-index: 1;
}
</style>
