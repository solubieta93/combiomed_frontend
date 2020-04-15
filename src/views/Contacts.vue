<template>
  <v-container
    fluid
    class="pa-0 ma-0 white_back"
  >
    <carousel-portada />

    <v-img
        src="web-combiomed-historia-03.png"
        style="top:-46px"
    />

    <!-- CONTACTOS -->  
    <div id="contacts">  
    <contact margin_style="margin-bottom: 1%;"/>
    </div>
    </v-container>
</template>

<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'
  import Contact from '@/components/utils/Contact'

  export default {
    components: {
      CarouselPortada,
      Contact
    },
  }
</script>

<style scoped>
.white_back {
  background-color: white !important;
}
</style>