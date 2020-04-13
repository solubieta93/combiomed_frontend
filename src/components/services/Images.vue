<template>
  <div class="mycontainer">
    <div class="mygrid">
      <template v-for="(item,i) in images">
        <v-card
          :key="item"
          :elevation="0"
          tile
          :class="`item-${i}`"
        >
          <v-img
            class="myimg"
            :src="`${baseUrl}${item}`"
          />
        </v-card>
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
      },
      images: {
        type: Object,
        required: true,
      },
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        imagesClients: [
          'servicesAuto/client1.jpg',
          'servicesAuto/client2.jfif',
          'servicesAuto/client3.png',
          'servicesAuto/client4.jpg',
          'servicesAuto/client5.png',
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
	width:60%;
  margin-bottom: 5%;
}

.mygrid{
	display:grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 18px;
	grid-auto-rows:200px;
  margin-left: 40px;
  margin-right: 40px;
}

.mygrid div{
	overflow:hidden;
}

.item-4{
	grid-row: 2/3;
	grid-column: 2/4;
	height: 100%;
}

</style>
