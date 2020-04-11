<template>
  <div class="mycontainer3">

    <!-- <v-row justify="center">
      <v-col cols="3">
        <query-search
          @search:text="paginateSearch"
          :loading="loading"
        ></query-search></v-col>
    </v-row>

    <div class="grid">
      <template v-for="(post,i) in posts">
        <v-hover
          :key="i"
          v-slot:default="{ hover }"
        >
          <v-card
            :elevation="hover ? 12 : 2"
            :class="items[i].class"
          >
            <v-img
              :src="post.image ? post.image : `${baseUrl}ampa- (1).png`"
              class="fill-height"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  <v-btn
                    text
                    large
                    color="white"
                    class="div_product"
                    :to="`/news/${post.id}`"
                  >
                    Leer Mas
                  </v-btn>
                </div>
                <v-overlay
                  :absolute="true"
                  :value="true"
                  :opacity="0.46"
                  color="#001A33"
                  :style="items[i].style"
                >
                  <div>
                    <h3 class="text-uppercase">
                      {{ post.title }}
                    </h3>
                    <h3>{{ post.abstract }}</h3>
                    <h3>Autor: {{ post.owner }}</h3>
                  </div>
                </v-overlay>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </template>
    </div>

    <v-pagination
      v-model="page"
      :length="pagination_length"
      circle
      color="red"
      @paginate="paginateSearch"
    /> -->

    <v-row
      justify="center"
      align="center"
    >
      <v-row
        justify="center"
        align="center"
        style="max-width: 50vw"
      >
        <v-col class="mr-0">
          <query-search
            :loading="loading"
            @search:text="appliedSearch"
            :onKeyUp="true"
          ></query-search>
        </v-col>
        <v-col>
          <v-row
            justify="start"
            align="start"
            class="ml-0"
          >
            <v-text-field
              v-model="limit"
              class="mx-auto"
              type="number"
              :min="0"
              :max="count_post"
              :disabled="!count_post"
              label="Cantidad"
              style="width: 50px; max-width: 50px"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-row>
    
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="px-6">
        <v-divider />
      </v-col>
    </v-row>

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
          v-for="(item, i) in newsItems"
          :key="i"
        >
          <item-preview
            :item="item.item"
            :pathTo="item.pathTo"
          ></item-preview>
        </v-col>
      </v-row>
    </v-row>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ItemPreview from '@/components/core/ItemPreview'
  import QuerySearch from '@/components/core/QuerySearch'

  export default {
    components: {
      ItemPreview,
      QuerySearch,
    },
    props: {
      limit: {
        type: Number,
        default: 10,
      },
      detail: {
        type: Boolean,
        default: false,
      },
      postId: {
        type: Number,
        default: -1,
      },
      start: {
        type: Number,
        default: 0,
      },
    },
    data () {
      return {
        page: 1,
        items: [
          // 275px
          { class: 'item-0', style: 'height:141px; left: 0px; top: 67%;' },
          { class: 'item-1', style: 'height:141px; left: 0px; top: 40%;' },
          { class: 'item-2', style: 'height:141px; left: 0px; top: 40%;' },
        ],
        posts: [],
        count_post: 0,
        baseUrl: process.env.BASE_URL,
        loading: false,
        text: '',
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      pagination_length () {
        if (!this.count_post) return 0
        const count = this.count_post - this.start
        return Number.parseInt(count % this.limit > 0 ? (count / this.limit) + 1 : count / this.limit)
      },
      postId () {
        return this.post_id
      },
      newsItems () {
        return this.posts.map(x => this.buildItem(x))
      },
    },
    watch: {
      async page (value) {
        if (value) {
          await this.filterNews()
        }
      },
      async postId (value) {
        if (value) {
          await this.filterNews()
        }
      },
    },
    mounted: async function () {
      await this.filterNews()
    },
    methods: {
      async appliedSearch (text) {
        this.page = 1
        this.text = text
        this.start = 0
        await this.filterNews()
      },
      async filterNews () {
        this.loading = true
        const result = await this.$store.dispatch('getPaginateBlog', {
          offset: this.start + (this.page - 1) * this.limit,
          limit: this.limit,
          search: this.text,
        })
        console.log(result, 'filterNews')
        const { posts, count } = result
        this.posts = posts
        this.count_post = count
        this.loading = false
      },
      buildItem (news) {
        return {
          item: {
            id: news.id,
            title: news.title,
            description: news.abstract,
            image: news.image,
            owner: news.owner,
          },
          pathTo: `/news/${news.id}`,
        }
      },
      // async paginate () {
      //   const { count, posts } = await this.$store.dispatch('getPaginateBlog', {
      //     offset: this.start + (this.page - 1) * this.limit,
      //     limit: this.limit,
      //     id_distinct: this.post_id,
      //   })
      //   this.posts = posts
      //   this.count_post = count
      // },
      // async paginateSearch (text = '') {
      //   this.page = 1
      //   const { count, posts } = await this.$store.dispatch('getPaginateBlog', {
      //     offset: (this.page - 1),
      //     limit: this.limit,
      //     search: text,
      //   })
      //   this.posts = posts
      //   this.count_post = count
      // },
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

.mycontainer3 {
  margin: auto;
	width:65%;
  background-color: white !important;
}
.div_news{
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

.grid div{
	overflow:hidden;
}

.grid{
	display:grid;
	grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(5, 1fr); */
	grid-gap: 16px;
  column-gap: 16px;
	grid-auto-rows:200px;
}

.item-0{
	grid-row: 1/3;
  grid-column: 1/3;
	height: 100%;
}
.item-1{
	grid-row: 1/2;
  grid-column: 3/5;
	height: 100%;
}
.item-2{
	grid-row: 2/3;
	grid-column: 3/5;
	height: 100%;
}
</style>
