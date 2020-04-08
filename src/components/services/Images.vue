<template>
  <div class="mycontainer">
    <div class="mygrid">
      <template v-for="(item,i) in imagesClients">
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
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        imagesClients: [
          'servicesAuto/client1.jpg',
          'servicesAuto/client2.jfif',
          'servicesAuto/client3.png',
          'servicesAuto/client4.jpg',
          'ampa- (1).png',
        ],
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
}

.mygrid{
	display:grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 18px;
	grid-auto-rows:200px;
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
