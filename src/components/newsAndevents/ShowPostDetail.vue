<template>
  <div class="mycontainer2">
    <div class="mygrid" v-if="ubication_news === 'Right'">
      <div class="item-0" v-if="ubication_news === 'Right'">
        <v-img 
        
            :aspect-ratio="16/9"
            :src="post.image ? post.image : `${baseUrl}ampa- (1).png`"
            style="top:0px; opacity:0.50;"
          />
      </div>
      <div class="item-1" v-if="ubication_news === 'Right'">
        <h3
          class="text-uppercase"
          style="color: grey;"
        >
          {{ post.title }}
          <br>
        </h3>
      </div>
      <div class="item-2" v-if="ubication_news === 'Right'">
          <p class="text-justify">
          <!-- {{post.content}} -->
          {{ post.context }}
        </p>
      </div>
      <!-- <div class="item-3" v-if="ubication_news === 'Right'">
          <hr/>
      </div> -->
    </div>

    <div class="mygrid" v-if="ubication_news === 'Left'">
      <div class="item-10" v-if="ubication_news === 'Left'">
        <v-img 
            :aspect-ratio="16/9"
            :src="post.image ? post.image : `${baseUrl}ampa- (1).png`"
            style="top:0px; opacity:0.70;"
          />
      </div>
      <div class="item-00" v-if="ubication_news === 'Left'">
        <h3
          class="text-uppercase"
          style=" color: grey;"
        >
          {{ post.title }}
          <br>
        </h3>
      </div>
      <div class="item-20" v-if="ubication_news==='Left'">
          <p class="text-justify">
          <!-- {{post.content}} -->
          {{ post.context }}
        </p>
      </div>
      <!-- <div class="item-30" v-if="ubication_news === 'Left'">
          <hr/>
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      ubication_news: {
        type: String,
        default: 'Left',

      },
      post: {
        id: Number,
        title: String,
        owner: String,
        context: String,
        image: null,
        news: Boolean,
        default: null,
      },

    },
      watch: {
        post (value) {
            if (value)
                console.log('hay un post')
        }
      },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
      }
    },
  }
</script>

<style scoped>
.white_back {
  background-color: white !important;
}

.myimg{
width:100%;
height:100%;
}

.mycontainer2 {
	margin:auto;
  margin-bottom: 10%;
  background-color: white !important;
	width:60%;
}

.mygrid{
	display:grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1px;
	/* grid-auto-rows:10px; */
  /* margin-left: 40px;
  margin-right: 40px; */
}

.mygrid div{
	overflow:hidden;
}

.item-0{
  grid-row: 1/5;
	grid-column: 1/3;
	height: 100%;
  margin-right: -20px;
  z-index: 1;
}
.item-1{
  grid-row: 1/2;
	grid-column: 3/4;
	height: 100%;
  z-index: 2;
}
.item-2{
  grid-row: 2/3;
	grid-column: 3/5;
	height: 100%;
  z-index: 2;
}
.item-3{
  grid-row: 1/2;
	grid-column: 4/5;
	height: 100%;
  z-index: 2;
}
.item-00{
  grid-row: 1/2;
	grid-column: 1/2;
	height: 100%;
  z-index: 2;
}
.item-10{
  grid-row: 1/5;
	grid-column: 3/5;
	height: 100%;
  z-index: 1;
  margin-left: -20%
}
.item-20{
  grid-row: 2/3;
	grid-column: 1/3;
	height: 100%;
  z-index: 2;
}
.item-30{
  grid-row: 1/2;
	grid-column: 2/3;
	height: 100%;
  z-index: 2;
}
</style>
