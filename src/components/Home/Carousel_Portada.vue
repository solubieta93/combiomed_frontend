<template>
 <v-carousel
      hide-delimiters
      cycle
      height="100%"
      z-index:1
    >
      <v-carousel-item
        v-for="(item,i) in combiomed_portada"
        :key="i"
      >
        <v-img
          :src="`${baseUrl}combiomed/${item.src}`"
          height="738px"
        />
      </v-carousel-item>
    </v-carousel>
</template>

<script>
  export default ({
    data: function() {
      return {
       combiomed_portada:
          [
            {
              src: 'combiomed0.png',
            },
            {
              src: 'combiomed2.png',
            },
            {
              src: 'combiomed3.png',
            },
            {
              src: 'combiomed4.png',
            },
            {
              src: 'combiomed6.png',
            },
          ],
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