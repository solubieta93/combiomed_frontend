<template>
  <v-img  src="../../../public/ampa- (1).png" style="top:-93px;z-index: 1;  " >
   <v-overlay :absolute="absolute" :value="overlay" :opacity="opacity"> 
      <v-col cols="12"  style="    margin-top: -250px;">
        <v-row  justify="center"  style="height: 50px; ">
         <v-col  md="4">
            <hr>
         </v-col>
       <v-col  md="4" >
           <h3 class="text-uppercase" style="margin-top: -14px; margin-left: 16px;">
           Servicios
            <br>
          </h3>
        </v-col>
        <v-col  md="4">
         <hr>
        </v-col>
        </v-row>
     </v-col>
       
   <v-row  justify="center" style="height: 100px;">
     
        <v-col  md="4" class="text-uppercase"   >
          <button style="z-index:5" class="button_mecanica" @click="serviciosTecnicos">
             <img src="../../../public/ICONOS/icono-servicio-tecnico-02.png">
             <!-- <img src="../../../public/ampa- (1).png" style="height: 66px;"> -->
          <h4 class="text-uppercase" >Servicios Técnicos</h4>
          </button>
        </v-col>
       
       <v-col  md="4"> 
         <button style="z-index:5" class="button_mecanica" @click="serviciosTecnicos">
             <img src="../../../public/ICONOS/icono-servicio-mecanica-02.png" style="height: 66px;">
             <!-- <img src="../../../public/ampa- (1).png" style="height: 66px;"> -->
       <h4 class="text-uppercase" >Servicios Mecánica</h4>
      
         </button>
         
      </v-col>
     
     <v-col  md="4" class="text-uppercase" > 
     <button style="z-index:5" class="button_mecanica" @click="serviciosTecnicos">
             <img src="../../../public/ICONOS/icono-automatizacion-02.png" style="height: 66px;">
             <!-- <img src="../../../public/ampa- (1).png" style="height: 66px;"> -->
        <h4 class="text-uppercase">Servicios Automática</h4>
        </button>
    </v-col>
    
   </v-row>
      </v-overlay>
 
  </v-img>
</template>

<script>
  export default {
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        absolute:true,
	     opacity:0.46,
	     overlay:true,
      }
      
    },
    methods:{
      serviciosTecnicos:function(){
        console.log("Esto es una prueba")
      }
      
    },
  }
</script>

<style scoped>
.overlay {
  position: absolute;
  bottom: 12px;
  background:#001A33;
  color: #f1f1f1;
  width: 31%;
  height: 46%;
  transition: .5s ease;
  opacity:0.46;
  color: white;
  font-size: 16px;
  padding: 20px;
  text-align: center;
}
.oscurecer{
   background-color: black;
   top:-93px
 
}
.button_mecanica{
  padding: 30px 70px; 
  border-radius: 0px;
  width: 225px;
  height: 225px;
}
.button_mecanica:hover{
  border: red 3px solid; 
  
  border-radius: 0px;
}
</style>
