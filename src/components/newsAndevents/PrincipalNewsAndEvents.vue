<template>
  <v-container>
    <responsive-items
      :items="newsItems"
    />
  </v-container>
</template>

<script>
  import ResponsiveItems from '@/components/core/ResponsiveItems'

  export default {
    components: {
      ResponsiveItems,
    },
    data () {
      return {
        postFixed: [],
        baseUrl: process.env.BASE_URL,
      }
    },
    computed: {
      newsItems () {
        return this.postFixed.map(x => this.buildItem(x))
      },
    },
    mounted: async function () {
      await this.paginate()
    },
    methods: {
      async paginate () {
        this.loading = true
        const { posts } = await this.$store.dispatch('getPaginateBlog', {
          offset: 0,
          limit: 4,
        })
        this.postFixed = posts
        this.loading = false
      },
      buildItem (news) {
        return {
          item: {
            id: news.id,
            title_json: news.title_json,
            description_json: news.abstract_json,
            image: news.image,
            owner: news.owner,
          },
          pathTo: `/news/${news.id}`,
        }
      },
      async filterItems () {
        this.loading = true
        const { posts, count } = await this.$store.dispatch('getPaginateBlog', {
          offset: 0,
          limit: 4,
        })
        this.postFixed = posts
        this.loading = false
        return {
          items: this.postFixed.map(x => this.buildItem(x)),
          count,
        }
      },
    },
  }
</script>

<style scoped>

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
