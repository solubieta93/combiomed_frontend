<template>
  <div class="mycontainer">
    <paginate-items
      show-limit
      show-search-text
      :filter-items="filterNews"
      show-divider
      :default-limit="limit"
      :refresh="refresh"
      :update-on-change-text="false"
      can-change-limit
    />
  </div>
</template>

<script>
  import PaginateItems from '../core/PaginateItems'

  export default {
    components: {
      PaginateItems,
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
        posts: [],
        count_post: 0,
        baseUrl: process.env.BASE_URL,
        loading: false,
        text: '',
        refresh: false,
        firstStep: true,
      }
    },
    mounted: async function () {
      this.firstStep = true
      this.refresh = true
    },
    methods: {
      async filterNews (search, offset, limit) {
        this.loading = true
        this.refresh = false
        const result = await this.$store.dispatch('getPaginateBlog', {
          offset: !search ? offset + 4 : offset,
          limit,
          search,
        })
        const { posts, count } = result
        this.posts = posts
        this.count_post = count
        console.log('result --> ', result)
        console.log('count post --> ', this.count_post)
        this.loading = false
        this.firstStep = false
        return {
          items: posts.map(x => this.buildItem(x)),
          count: !search ? count - 4 >= 0 ? count - 4 : 0 : count,
        }
      },
      buildItem (news) {
        return {
          item: {
            id: news.id,
            title_json: news.title_json,
            description_json: news.abstract_json,
            image: news.image,
          },
          pathTo: `/news/${news.id}`,
        }
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

.mycontainer {
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
