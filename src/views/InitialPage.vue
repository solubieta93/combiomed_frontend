<template>
  <v-container fluid >

    <carousel-portada />

    <v-card tile elevation="0" class="pa-0" color="transparent" :style="style_d">
       <!-- <v-img src="../../public/web-combiomed-productos-04_fixed.png" style="margin-top:-76px;"  > -->
       <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      style="top:-76px"
    >
      </v-img>
      <v-col cols="12">
        <v-row  justify="center" style="height: 50px; margin-top: -75px; color: grey;">
         <v-col  md="3">
            <hr>
         </v-col>
       <v-col  md="2" >
           <h3 class="text-uppercase" style="margin-top: -14px; margin-left: 16px;">
            Quienes somos
            <br>
          </h3>
        </v-col>
        <v-col  md="3">
         <hr>
        </v-col>
        </v-row>
     </v-col>
           
      <v-row  justify="center" style="height: 100px; color: grey; margin-top: -52px;">
        <v-col  md="4">
         <p>
             Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
             Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el 
             objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
             la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.

         </p>
        </v-col>
       <v-col  md="4" >
           <p>
           Tenemos referencia en el mercado nacional e internacional y brindamos soluciones tecnológicas 
           seguras y asequibles para la salud. Nuestro objetivo es investigar, desarrollar, producir,
           comercializar y brindar servicio técnico a equipos electrónicos, de automatización destinados 
           a la medicina, la biotecnología, etc.
            <br>
          </p>
        </v-col>
           </v-row>
 
<v-row justify="center" style=" margin-top: 70px;">
   <v-col  md="8">
         <div class="container">
           
        <a id="leer" @click="my">Leer más</a>
        <div id="button1">
            <div class="col" id="col1">
                <h2>CID 201. LA PRIMERA COMPUTADORA CUBANA</h2>
                <p>El 18 de Abril de 1970 funcionó la primera computadora cubana. Más tarde, comenzó la producción
                    de minicomputadoras como la CID 201A y CID 201B. Se produjeron más de 100 equipos, con los cuáles
                    se logró el inicio del desarrollo de la automatización en nuestro centro, logrando automatizar 
                    centrales azucareros y otros centro de la economía nacional, tarea que sigue incrementándose posteriormente, 
                    con el diseño y producción de los primeros autómatas NODOREM.</p>
            </div>
            <div class="col" id="col2">
                <img src="CID 201.png" alt="La primera computadora cubana CID 201">
            </div>
        </div>
    </div>
    </v-col>
</v-row>

    </v-card>
    <Product_d></Product_d>
   <Services></Services>
   <Noticias></Noticias>
   <Contact></Contact>
   <form></form>
  </v-container>
</template>

<script>
  
  import Carousel_Portada from '@/components/utils/CarouselPortada'
  import Form from '@/components/utils/FormDay'
  import Product_d from '@/views/products/ProductDescription.vue'
  import Services from '@/components/services/ServicesDay'
  import Noticias from '@/components/newsAndevents/PrincipalNewsAndEvents'
  import Contact from '@/components/utils/Contact'

  export default {
     components: {
       Carousel_Portada,
       Form,
       Product_d,
       Services,
       Noticias,
       Contact
     },
    data () {
      return {
        baseUrl: process.env.BASE_URL, 
        style_d: "height: 370px;" ,
      }
    },methods:{
      my:function(){
        console.log('click');
        this.style_d="height: 640px;"
            var leer=document.getElementById("leer");
            leer.style.display="none";
            var button = document.getElementById("button1");
            button.className += "show";
           
      }
    }
   
  }
</script>

<style scoped>
div {
    position: relative;
}
  a{
            text-align: center;
            
            
        }
        #button1 {
            overflow: hidden;
            
        }

        #button1 #col1 p {
            text-align: justify;
            height: 100px;
            color: grey;
        }

        #button1 #col1 h2 {
            text-align: center;
        }


        #button1 #col2 img {
            height: 340px;
        }

        .container {
            color: grey;

        }

        .container #button1 {
            display: flex;
            justify-content: center;

            height: 400px;

            opacity: 0;
        }

        #button1 .col {
            flex-basis: 35%;
        }
        .show {
            animation:acordeon 2s;
            animation-fill-mode: forwards;
        }


        @keyframes acordeon {
            0% {
                height:0;
                opacity: 0;
            }

            100% {
                height:300px;
                opacity: 1;
            }
        }


</style>
