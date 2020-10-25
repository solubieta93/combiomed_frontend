<template>
  <v-carousel
    hide-delimiters
    cycle
    height="80vh"
    class="ma-0 pa-0"
  >
    <v-carousel-item
      v-for="item in countItems"
      :key="item"
    >
      <v-img
        :src="`${baseUrl}${folderName}/${item}.png`"
        height="80vh"
        @error="errorInFolder"
      >
        <v-col
          class="d-flex flex-column-reverse ma-0 pa-0"
          style="height:100%"
        >
          <v-img
            :src="`${baseUrl}web-combiomed-historia-03.png`"
            height="16%"
            width="100vw"
            max-height="16%"
          />
        </v-col>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default ({
    props: {
      folderName: {
        type: String,
        default: 'banner',
      },
      countItems: {
        type: Number,
        default: 8,
      },
    },
    data: function () {
      return {
        baseUrl: process.env.BASE_URL,
      }
    },
    methods: {
      errorInFolder () {
        this.folderName = 'banner'
      },
    },
  })
</script>
<style scoped>
.mycarousel {
    z-index: 1;
}
</style>
