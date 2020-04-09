<template>
  <v-img
    src="ampa- (1).png"  style="z-index: 1;top:-105px; height:80vh; opacity:.90"
  >
    <v-col cols="12">
      <v-row
        justify="center"
        style="height: 50px; margin-top: 135px;"
      >
        <v-col md="3" style="color:white">
          <hr style="color:white">
        </v-col>
        <v-col md="2">
          <h3
            class="text-uppercase"
            style="margin-top: -14px; margin-left: 16px; color:white;"
          >
            Quienes somos
            <br>
          </h3>
        </v-col>
        <v-col md="3" style="color:white">
          <hr style="color:white">
        </v-col>
      </v-row>
    </v-col>

    <v-row
      justify="center"
      style="height: 100px; "
    >
      <v-col
        md="2"
        class="text-uppercase"
      >
        <blockquote
          elevation="0"
          style=" height: 145px; width:145px;"
          color="transparent"
        >
          <h4>Servicios</h4>
          <h4>Técnicos</h4>
        </blockquote>
      </v-col>

      <v-col
        md="2"
        class="text-uppercase"
      >
        <blockquote
          style=" height: 145px; width:145px"
          color="transparent"
        >
          <h4>Servicios</h4>
          <h4> de Mecánica</h4>
        </blockquote>
      </v-col>
      <v-col
        md="2"
        class="text-uppercase"
      >
        <blockquote
          style=" height: 145px; width:145px"
          color="transparent"
        >
        <v-btn 
        to="services/auto" 
        text>
        <h4>Servicios</h4>
          <h3> de Automática</h3>
        </v-btn>
          
        </blockquote>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
  export default {
    components: {

    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
      }
    },
  }
</script>

<style scoped>
blockquote {
  padding: 3px 10px;
  border: red 3px solid;
  border-radius: 0px;
}
</style>
