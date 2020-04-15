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

    <!-- QUIENES SOMOS -->
    <accordion id="us"/>
    </v-container>
</template>

<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'
  import Accordion from '@/components/utils/Accordion'

  export default {
    components: {
      CarouselPortada,
      Accordion,
    }
  }
</script>

<style scoped>
.white_back {
  background-color: white !important;
}
</style>