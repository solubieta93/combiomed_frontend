<template>
  <v-img
    src="ampa- (1).png"  style="z-index: 1;top:-105px; height:80vh; opacity:.90"
  >
    <v-col cols="12">
      <v-row
        justify="center"
        style="height: 50px; margin-top: 135px;"
      >
        <v-col md="3" style="color:#FCFCFC;">
          <hr style="color:#FCFCFC;">
        </v-col>
        <v-col md="2">
          <h3
            class="text-uppercase"
            style="margin-top: -14px; margin-left: 16px; color:white;"
          >
            Servicios
            <br>
          </h3>
        </v-col>
        <v-col md="3" style="color:#FCFCFC;">
          <hr style="color:#FCFCFC;">
        </v-col>
      </v-row>
    </v-col>

    <v-row
      justify="center"
      style="height: 100%; "
    >
      <v-col
        md="2"
        class="text-uppercase"
      >
        <button 
          style="z-index:5" 
          class="mybutton"
          @click="() => pushRoute('/services/tech')"
        >
          <img src="../../../public/ICONOS/icono-servicio-tecnico-02.png" style="height: 66px;">
          <!-- <img src="../../../public/ampa- (1).png" style="height: 66px;"> -->
          <h4 class="text-uppercase" >Servicios Técnicos</h4>
        </button>
      </v-col>

      <v-col
        md="2"
        class="text-uppercase"
      >
        <button 
          style="z-index:5" 
          class="mybutton" 
          @click="() => pushRoute('/services/mec')"
        >
          <img src="../../../public/ICONOS/icono-servicio-mecanica-02.png" style="height: 66px;">
          <!-- <img src="../../../public/ampa- (1).png" style="height: 66px;"> -->
          <h4 class="text-uppercase" >Servicios Mecánica</h4>
         </button>
      </v-col>
      <v-col
        md="2"
        class="text-uppercase"
      >
        <button 
          style="z-index:5" 
          class="mybutton" 
          @click="() => pushRoute('/services/auto')"
        >
          <img src="../../../public/ICONOS/icono-automatizacion-02.png" style="height: 66px;">
          <!-- <img src="../../../public/ampa- (1).png" style="height: 66px;"> -->
          <h4 class="text-uppercase">Servicios Automática</h4>
        </button>
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
    methods:{
      pushRoute:function(path){
        console.log("Esto es una prueba    ", path)
        if (path) this.$router.push({ path })
        
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
.mybutton{
  padding: 30px 70px; 
  border-radius: 0px;
  width: 225px;
  height: 225px;
}
.mybutton:hover{
  border: red 3px solid; 
  border-radius: 0px;
}
</style>
