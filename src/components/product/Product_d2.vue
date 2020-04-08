<template>
    <div class="mycontainer2">
    <div class="mygrid">
      <template v-for="(item,i) in imagesClients">
		<v-hover
          :key="i"
          v-slot:default="{ hover }"
        >
		<!-- items[i].class" -->
          <v-card
            :elevation="hover ? 12 : 2"
            :class="`item-${i}`"
          >
            <v-img
              :src="item.src"
              class="fill-height"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
				<!-- :to="`/news/${post.id}`" -->
                  <v-btn
                    text
                    large
                    color="white"
                    class="div_product"
                  >
                    Leer Mas
                  </v-btn>
                </div>
                <v-overlay
                  :absolute="true"
                  :value="true"
                  :opacity="0.46"
                  color="#001A33"
                  style="height:141px; left: 0px; top: 67%;"
                >
                  <div>
                    <h3 class="text-uppercase">
                      {{ item.text }}
                    </h3>
                  </div>
                </v-overlay>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>

        <!-- <v-card 
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
        </v-card> -->
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    props :{
      currentView: {
        type: String,
        default: "auto"
      }
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
		absolute:true,
	    opacity:0.46,
	    overlay:true,
        baseUrl: process.env.BASE_URL,
        imagesClients: [
          {src:'productImages/product3.png',text: "Estimulación Eléctrica"},
			{src:'productImages/product4.png',text: "Diagnóstico de Enfermedades Respiratorias Crónicas"},
			{src:'productImages/product5.png',text: "Soluciones para la Atención Primaria de Salud"}
        ],
        imagesMachine: [

        ],
        // currentImages: currentView === "auto"?  this.imagesClients : this.imagesMachine
      }
    },
  }
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

.myimg{
	width:100%;
	height:100%;
}

.mycontainer2 {
	margin:auto;
	width:65%;
}

.mygrid{
	display:grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 16px;
	grid-auto-rows:400px;
}

.mygrid div{
	overflow:hidden;
}
.item-0{
	grid-row: 1/2;
	grid-column: 1/2;
	height: 100%;
}
.item-1{
	grid-row: 1/2;
	grid-column: 2/3;
	height: 100%;
}
.item-2{
	grid-row: 1/2;
	grid-column: 3/4;
	height: 100%;
}
</style>


<!-- 
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
				
</template> -->
<!-- <script>
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

</style> -->