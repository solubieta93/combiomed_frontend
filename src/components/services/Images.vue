<template>
  <!-- <div class="mycontainer">
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
  </div> -->
  <v-row
    justify="center"
    align="center"
  >
    <v-row
      justify="center"
      align="center"      
      style="max-width: 80vw"
    >
      <v-col
        md="6"
        sm="12"
        lg="4"
        xl="4"
        cols="12"
        v-for="(item, i) in images"
        :key="i"
      >
        <v-card
          height="200"
          max-height="200"
          max-width="100%"
          min-width="250"
          class="mx-auto"
        >
          <v-img
            :src="`${baseUrl}${item}` ? `${baseUrl}${item}` : `${baseUrl}ampa- (1).png`"
            class="fill-height"
            :aspect-ratio="16/9"
          >
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import ItemPreview from '@/components/core/ItemPreview'
  // import QuerySearch from '@/components/core/QuerySearch'
  export default {
    components: {
      ItemPreview,
      // QuerySearch,
    },
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
      }
    },
  }
</script>

<style scoped>
.myimg{
	width:100vw;
	height:100%;
}

.mycontainer {
	margin:auto;
	width:60%;
  margin-bottom: 5%;
}

</style>
