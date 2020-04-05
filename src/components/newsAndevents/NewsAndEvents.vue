<template>
  <v-container fluid 
    class="white_back">
    <navbar />

    <v-img
    src="../../../public/ampa- (1).png" style="top:0px"/>
    <v-img 
    src="../../../public/web-combiomed-historia-03.png" style="top:-40px"/>

    
      <!-- TITLE -->
      <v-col cols="12">
        <v-row  justify="center" style="height: 50px; color: grey;">
          <v-col  md="3">
              <hr>
          </v-col>
          <v-col  md="2" >
              <h3 class="text-uppercase" style="margin-top: -14px; margin-left: 16px;">
                Noticias y Eventos
                <br>
              </h3>
            </v-col>
            <v-col  md="3">
            <hr>
          </v-col>
        </v-row>
      </v-col>

      <!-- FOUR FIRST NEWS -->
      <div class="div_product">
        <div class='my_container'>
        <div class='grid'>
          <!-- <div class='item-0'> -->
            <template v-for="(item,i) in items">
              <v-hover 
                :key="item"
                v-slot:default="{ hover }"
              >
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="item.class"
                >
                  <v-img src="../../../public/ampa- (1).png" class="fill-height" :aspect-ratio="16/9">
                    <v-expand-transition>
                      <div 
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%"
                      >
                      <!-- to='/dashboard' -->
                        <v-btn 
                        text large color='white' class="div_product"
                        :to="`/news/${blog[i].id}`" 
                        >
                          Leer Mas
                        </v-btn>
                      </div>
                      <v-overlay :absolute="true" :value="true" :opacity="0.46" color="#001A33"  :style="item.style">
                      <!-- "height:141px; left: 0px; top: 275px;"> -->
                        <div>
                          <h3 class="text-uppercase">{{blog[i].title}}</h3>
                          <h3>{{blog[i].abstract}}</h3>
                          <h3>Autor: {{blog[i].owner}}</h3>
                        </div>
                      </v-overlay>	
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </template>
        </div>
	    </div>
      </div>

      <div>
        <img class="fill-height" src="../../../public/news_middle_image.png"  style="margin-top: 100px; margin-bottom: 50px;" />
      </div>
      
      <news-and-events-items :limit="4" :page="2"/>

      <v-btn
        text
        color="deep-purple accent-4"
        @click="showMoreDialog(blog[1])"
      >
        Leer más
      </v-btn>
  </v-container>  
</template>

<script>
  import Navbar from '@/components/Navbar'
  import NewsAndEventsItems from '@/components/newsAndevents/NewsAndEventsItems'
  import AddPost from '@/components/newsAndevents/AddPost'
  import ShowPostDetail from '@/components/newsAndevents/ShowPostDetail'
  import ShowPostOnCard from '@/components/newsAndevents/ShowPostOnCard'
  import Footer from '@/components/footer'
  import Form from '@/components/Form'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Navbar,
      NewsAndEventsItems,
      AddPost,
      ShowPostDetail,
      ShowPostOnCard,
      Footer,
      Form,
    },
    data () {
      return {
        items: [
          // 275px
          { class: 'item-0', style: "height:141px; left: 0px; top: 67%;" },
          { class: 'item-1', style: "height:141px; left: 0px; top: 67%;" },
          { class: 'item-2', style: "height:141px; left: 0px; top: 83.6%;"},
          { class: 'item-3', style: "height:141px; left: 0px; top: 67%;" },
        ],
      }
    },
    computed: {
      ...mapGetters(['blog', 'user', 'count_post']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
    },
    mounted: async function () {
      await this.paginate()
    },
    methods: {
      async paginate () {
        await this.$store.dispatch('getPaginateBlog', {
          offset: 0,
          limit: 4
        })
      },
      showMoreDialog (item) {
        console.log(item)
        // this.$router.push({path:`/blog${item}`})
        this.$router.push('blog', {params: {post_id: item}})
      },
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

.white_back {
    background-color: white !important;
  }

.div_product{
	font-family: helvetica;
	font-size: 18px;
}

div img{
	width:100%;
	height:100%;
  object-fit: fill; 
}

.my_container {
	margin:auto;
	width:80%;
}

.grid{
	display:grid;
	grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(5, 1fr); */
	grid-gap: 16px;
  column-gap: 16px;
	grid-auto-rows:200px;
}

.grid div{	
	overflow:hidden;
}

.item-0{
	grid-row: 1/3;
  grid-column: 1/2;
	height: 100%;
}
.item-1{
	grid-row: 1/3;
  grid-column: 2/3;
	height: 100%;
}
.item-2{
	grid-row: 1/5;
	grid-column: 3/4;
	height: 100%;
}
.item-3{
	grid-column: 1/3;
  grid-row: 3/5;
	height: 100%;
}

</style>