<template>
  <v-container fluid 
    class="white_back">
    <navbar />

    <v-img v-if="!post.image"
    src="../../../public/ampa- (1).png" style="top:0px"/>
    <v-img 
    src="../../../public/web-combiomed-historia-03.png" style="top:-40px"/>

    <!-- FIRST NEWS -->
    <v-col cols="12" >
      <v-row  justify="left" style="height: 50px; margin-top: 10px; ">
        <v-col  md="1">
        </v-col>
        <v-col  md="2" >
           <h3 class="text-uppercase" style="margin-top: -14px; margin-left: 16px; color: grey;">
            <!-- {{post.title}} -->
            {{post.title}}
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
            <!-- {{post.content}} -->
            {{post.context}}
        </p>
      </v-col>
    </v-row>

    <!-- TO SHOW OTHER TWO NEWS -->
    <v-row
      v-for="(card, i) in this.twoposts"
      :key="card.title"
      >
        <show-post-detail 
            :post="card"
            :ubication_news="i === 0 ? 'Right' : (i === 1 ? 'Left' : '') " 
        />
    </v-row>

    <!-- TO SHOW OTHER NEWS AS SUGERENCY -->
    <news-and-events-items :start="2" :limit="3" :post_id="postId"/>
    
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
  import { mapGetters, mapActions } from 'vuex'

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
        twoposts: [],
        plaf: null
      }
    },
    computed: {
      ...mapGetters(['user', 'post']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      postId () {
        return this.$route.params.postId
      }
    },
    mounted: async function () {
      await this.load()
    },
    watch : {
      async postId (value) {
        if (value) 
          await this.load()
      }
    },
    methods: {
      async paginate (offset=0, limit=2) {
        const {count, posts } = await this.$store.dispatch('getPaginateBlog', {
          offset,
          limit,
          id_distinct: this.$route.params.postId,
        })
        this.twoposts = posts
      },
      async load(){
        const ok = await this.$store.dispatch('getPost',this.$route.params.postId)
        console.log(ok, 'dispatchEvent')
        if (!ok)
          this.$router.push('/')
        await this.paginate()
      }
    },
  }
</script>
<style scoped>
  .white_back {
    background-color: white !important;
  }
</style>
