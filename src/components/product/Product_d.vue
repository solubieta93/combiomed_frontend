<template>
 <v-img src="../../../public/web-combiomed-productos-noticias&eventos-04.png" style="z-index: 2;" >
      <v-col cols="12" style="margin-top:10%;">
      <v-row
        justify="center"
        style="color: grey;"
      >
        <v-col md="3">
          <hr>
        </v-col>
        <v-col md="2">
          <v-row justify="center">
          <h3
            class="text-uppercase"
            style=" margin-top:-5%;margin-left: 16px;"
          >
            líneas de productos
            <br>
          </h3>
          </v-row>
        </v-col>
        <v-col md="3">
          <hr>
        </v-col>
      </v-row>
    </v-col>

	<div class="mycontainer">
		<div class="mygrid">
		<template v-for="(item,i) in imagesClients">
			<v-card 
				v-if="i<=1"
			:key="item"
			:elevation="0"
			tile
			:class="`item-${i}`"
			>
			<v-img
				class="myimg"
				fill-height
				:src="`${baseUrl}${item}`"
			/>
			</v-card>
		</template>
		</div>
  	</div>
  <product-d-2/>

  	
 </v-img>
</template>

<script>
import ProductD2 from '@/components/product/Product_d2'
  export default {
	  components: {
      ProductD2,
    },
    props :{
      currentView: {
        type: String,
        default: "auto"
      }
    },
    data () {
      return {
		absolute:true,
	    opacity:0.46,
	    overlay:true,
        baseUrl: process.env.BASE_URL,
        imagesClients: [
          'productImages/product1.png',
          'productImages/product2.png',
          'productImages/product3.png',
          'productImages/product4.png',
          'productImages/product5.png',
        ],
        imagesMachine: [

        ],
        // currentImages: currentView === "auto"?  this.imagesClients : this.imagesMachine
      }
    },
  }
</script>

<style scoped>
.myimg{
	width:100%;
	height:100%;
}

.mycontainer {
	margin:auto;
	width:65%;
	margin-bottom: 2%;
}

.mygrid{
	display:grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 16px;
	grid-auto-rows:400px;
}

.mygrid div{
	overflow:hidden;
}

.item-0{
	grid-row: 1/2;
	grid-column: 1/3;
	height: 100%;
}
.item-1{
	grid-row: 1/2;
	grid-column: 3/5;
	height: 100%;
}
</style>