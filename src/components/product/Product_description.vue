<template>
  <v-container fluid  >
    <navbar />

    <Carousel_Portada></Carousel_Portada>
     
      <v-img src="../../../public/web-combiomed-historia-04.png" style=" height:348px;"  >
      </v-img>
    
 <v-col cols="12">
        <v-row   justify="center">
       <v-col  md="8" >
           <h1 style=" color: #C80000 ;  ">
           Cardiocid D200A
          </h1>
          <p style="color:grey" class="text-uppercase">Electrocardiografo de 12 canales. Modelo:A5121</p>
        </v-col>
        </v-row>
    
     <v-row   justify="center">
       <v-col  md="8" >
           <v-img class="io" src="../../../public/ampa- (1).png" style=" height:348px;  border: red 2px solid; border-radius: 0px,0px,0px;"  >
      </v-img>
        </v-col>
        </v-row>
 
     </v-col>
       <v-row   justify="center" >
           <v-col md="8"><h1>Descripcion del producto </h1>
           <p>Electrocardiografo para la realizacion de electrocardiograma estandar de 12 dereivaciones </p></v-col>
           <v-col md="8"><p> Electrocardiógrafo para la realización del electrocardiograma estándar
de 12 derivaciones en condiciones de reposo a pacientes de cualquier edad.</p></v-col>
       </v-row>
    <Form></Form>
     <Footer></Footer>
  </v-container>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Carousel_Portada from '@/components/Home/Carousel_Portada'
  import Footer from '@/components/footer'
  import Form from '@/components/Form'
  

  export default {
    data () {
      return {
        baseUrl: process.env.BASE_URL,
         absolute:true,
	   opacity:0.46,
	   overlay:true,
	   
      }
    },
     components: {
        Navbar,
       Carousel_Portada,
       Footer,
       Form,
     },
     methods:{
      goToProduct:function(){
		  this.$router.push('/product')
        console.log("Esto es una prueba")
      }
      
    },
    
  }
</script>

<style scoped>
io{
    
       background-color: transparent;
      
       background-repeat: repeat-x;
       background-attachment: scroll;
       background-position: 0px 92%;
       background-clip: border-box;
       background-origin: padding-box;
       background-size: auto auto;
}
div {
    position: relative;
}

div img{
	width:100%;
	height:100%;
}

.dd {
	margin:auto;
	width:60%;
}

.grid{
	display:grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 24px;
	grid-auto-rows:160px;
}

.grid div{	
	overflow:hidden;
}
.item-2{
	grid-row: 1/3;
	grid-column: 3/3;
	height: 100%;
}

.item-9{

	grid-column: 2/4;
	height: 100%;
}

</style>
