<template>

 <v-img src="../../../public/web-combiomed-productos-noticias&eventos-04.png" style="z-index: 2;" >
      <v-col cols="12">
        <v-row  justify="center"   style="height: 50px; margin-top: 135px; color: blue;">
         <v-col  md="3">
            <hr>
         </v-col>
       <v-col  md="2" >
           <h4 class="text-uppercase" style="margin-top: -14px;">
           Líneas de Productos
            <br>
          </h4>
        </v-col>
        <v-col  md="3">
         <hr>
        </v-col>
        </v-row>
     </v-col>
   <div class="div_product">
    <div class='container'>
		<div class='grid'>
			<div class='item-0'>
			<img src="../../../public/ampa- (1).png">			
			</div>
			<div class='item-1'>
				<img src="../../../public/ampa- (1).png">
			</div>
			<div class='item-2'>
				<img src="../../../public/ampa- (1).png">
			</div>
			<div class='item-3'>
				<img src="../../../public/ampa- (1).png">
			</div>
			<div class='item-4'>
				<img src="../../../public/ampa- (1).png">
			</div>
		</div>
		
	</div>
   </div>
  </v-img>

</template>
<script>
export default {
	data () {
      return {
	   absolute:true,
	   opacity:0.46,
	   overlay:true,
	   
      }
      
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

.div_product{
	font-family: helvetica;
	font-size: 18px;
}

div img{
	width:100%;
	height:100%;
}

.container {
	margin:auto;
	width:80%;
}

.grid{
	display:grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 24px;
	grid-auto-rows:200px;
}

.grid div{	
	overflow:hidden;
}

.item-4{
	grid-row: 2/3;
	grid-column: 2/4;
	height: 100%;
}

</style>