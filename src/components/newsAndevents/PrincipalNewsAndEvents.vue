<template>
<v-container>
    <!-- FOUR FIRST NEWS -->
    <!-- <div class="div_product">
      <div class="my_container">
        <div class="grid">
          <template v-for="(item,i) in items">
            <v-hover
              :key="item"
              v-slot:default="{ hover }"
            >
              <v-card
                :elevation="hover ? 12 : 2"
                :class="item.class"
              >
                <v-img
                  :src="postFixed[i].image ? postFixed[i].image : `${baseUrl}ampa- (1).png`"
                  class="fill-height"
                  :aspect-ratio="16/9"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out v-card--reveal justify-start"
                      :style="`height:${hover ? 50 : 18}%; top: ${hover ? 50 : 82}%;`"
                    >
                      <v-btn
                        text
                        large
                        color="white"
                        class="div_product"
                        :to="`/news/${postFixed[i].id}`"
                      >
                        Leer Mas
                      </v-btn>
                    </div>
                    <v-overlay
                      :absolute="true"
                      :value="true"
                      :opacity="0.46"
                      color="#001A33"
                      class="d-flex transition-fast-in-fast-out v-card--reveal justify-start"
                      :style="`height:${hover ? 50 : 18}%; top: ${hover ? 50 : 82}%;`"
          
                    >
                      <div>
                        <h3 class="text-uppercase">
                          {{ postFixed[i].title }}
                        </h3>
                        <h3>{{ postFixed[i].abstract }}</h3>
                        <h3>Autor: {{ postFixed[i].owner }}</h3>
                      </div>
                    </v-overlay>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </template>
        </div>
      </div>
    </div> -->

    <!-- <v-row
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
    </v-row> -->
  <paginate-items
    :can-change-limit="true"
    :default-limit="10"
    :filter-items="filterItems"
    :show-divider="true"
    :show-limit="true"
    :show-search-text="true"
    :update-on-change-text="true"
  />
</v-container>
</template>

<script>
  import ItemPreview from '@/components/core/ItemPreview'
  import ResponsiveItems from '@/components/core/ResponsiveItems'
  import PaginateItems from '@/components/core/PaginateItems'
  
  import { mapGetters } from 'vuex'

  export default {
    components: {
      ItemPreview,
      ResponsiveItems,
      PaginateItems,
    },
    data () {
      return {
        items: [
          // 275px
          { class: 'item-0', style: 'height:141px; left: 0px; top: 67%;' },
          { class: 'item-1', style: 'height:141px; left: 0px; top: 67%;' },
          { class: 'item-2', style: 'height:141px; left: 0px; top: 83.6%;' },
          { class: 'item-3', style: 'height:141px; left: 0px; top: 67%;' },
        ],
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
         console.log('estoy en paginate')
        this.loading = true
        const { posts } = await this.$store.dispatch('getPaginateBlog', {
          offset: 0,
          limit: 4,
        })
        this.postFixed = posts
        console.log(this.postFixed, 'postFixed')
        this.loading = false
      },
      buildItem (news) {
        console.log('estoy en buildItem')
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
      async filterItems(search, offset, limit) {
        this.loading = true
        const { posts, count } = await this.$store.dispatch('getPaginateBlog', {
          offset,
          limit, search,
        })
        this.postFixed = posts
        this.loading = false
        return {
          items: this.postFixed.map(x => this.buildItem(x)),
          count,
        }
      }
    },
  }
</script>


<style scoped>
/* .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
} */

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