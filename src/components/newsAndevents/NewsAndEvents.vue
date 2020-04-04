<template>
  <v-container fluid style="color: white;">
    <navbar />
    <v-img 
    src="../../../public/ampa- (1).png" style="top:0px"/>
    <v-img 
    src="../../../public/web-combiomed-historia-03.png" style="top:0px"/>

    <!-- FIRST NEWS -->
    <v-col cols="12" >
        <v-row  justify="left" style="height: 50px; margin-top: 10px; ">
         <v-col  md="1">
         </v-col>
       <v-col  md="2" >
           <h3 class="text-uppercase" style="margin-top: -14px; margin-left: 16px; color: grey;">
            TITULAR de la noticia
            <br>
          </h3>
        </v-col>
        <v-col  md="7">
         <hr>
        </v-col>
        </v-row>
    </v-col>
           
    <v-row  justify="left" style=" margin-left: 16px; color: grey;">
      <v-col  md="1">
      </v-col>
      <v-col  md="9" justify="justify">
        <p class="text-justify">
            Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
            Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el 
            objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
            la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.
            Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
            Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el 
            objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
            la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.
        </p>
      </v-col>
    </v-row>

    <!-- SECOND NEWS -->
    <v-col cols="12" >
        <v-row  justify="left" style="height: 50px; margin-top: 10px; ">
          <v-col  md="1">
          </v-col>
          <v-col  md="4" >
            <v-img src="../../../public/ampa- (1).png" style="top:0px"/>
          </v-col>   
          <v-col  md="2" >
            <h3 class="text-uppercase" style="margin-top: -14px; margin-left: 16px; color: grey;">
            TITULAR de la noticia
            <br>
          </h3>
          </v-col>
          <v-col  md="3">
            <hr/>
          </v-col>
        </v-row>
    </v-col>
           
    <v-row  justify="left" style=" margin-left: 16px; color: grey;">
      <v-col  md="5">
      </v-col>
       
      <v-col  md="5">
        <p class="text-justify">
            Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
            Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el 
            objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
            la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.
            Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
            Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el 
            objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
            la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.
        </p>
      </v-col>
      
    </v-row>

     <!-- THIRD NEWS -->
    <v-col cols="12" >
        <v-row  justify="left" style="height: 50px; margin-top: 10px; ">
          <v-col  md="1">
          </v-col>
          <v-col  md="2" >
            <h3 class="text-uppercase" style="margin-top: -14px; margin-left: 16px; color: grey;">
              TITULAR de la noticia
              <br>
            </h3>
          </v-col>
          <v-col  md="3">
            <hr>
          </v-col>
          <v-col  md="4" >
            <v-img src="../../../public/ampa- (1).png" style="top:0px"/>
          </v-col>
        </v-row>
    </v-col>
           
    <v-row  justify="left" style=" margin-left: 16px; color: grey;">
      <v-col  md="1">
      </v-col>
      <v-col  md="5">
        <p class="text-justify">
            Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
            Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el 
            objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
            la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.
            Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
            Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el 
            objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
            la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.
            Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
            Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el 
            objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
            la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.
            Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
            Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el 
            objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
            la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.
        </p>
      </v-col>
      
    </v-row>

    <NewsAndEventsItems> </NewsAndEventsItems>

    <Form></Form>
    <Footer></Footer>
  </v-container>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import NewsAndEventsItems from '@/components/newsAndevents/NewsAndEventsItems'
  import Footer from '@/components/footer'
  import Form from '@/components/Form'

  export default {
     components: {
      Navbar,
      NewsAndEventsItems,
      Footer,
      Form,
     },
  }
</script>