<template>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(card, i) in blog"
          :key="card.title"
          :cols="4"
        >
            <v-img :src="card.image ? card.image : `${baseUrl}ampa- (1).png`">
                <v-overlay :absolute="true" :value="true" :opacity="0.46" color="#001A33"  style="height:141px; left: 0px; top: 60px;">
                        <div>
                    <h3 class="text-uppercase">{{card.title}}</h3>
                    <h3>{{card.abstract}}</h3>
                    <h3>Autor: {{card.owner}}</h3>
                        </div>
                </v-overlay>	
            </v-img>
        </v-col>
      </v-row>

      <v-pagination
      v-model="page"
      :length="pagination_length"
      circle
      @paginate="paginate"
      color="red"
    />
    </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      limit: {
        type: Number,
        default: 10
      },
      detail: {
        type: Boolean,
        default: false
      },
      post_id: {
        type: Number,
        default: -1
      },
      start: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        page: 1,
        baseUrl: process.env.BASE_URL,
      }
    },
    computed: {
      ...mapGetters(['blog', 'user', 'count_post']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      pagination_length () {
        const count = this.count_post - this.start
        return Number.parseInt(count % this.limit > 0 ? (count / this.limit) + 1 : count / this.limit)
      },
    },
    watch: {
      page (value) {
        if (value) {
          this.paginate()
        }
      },
    },
    mounted: async function () {
      await this.paginate()
    },
    methods: {
      async paginate () {
        await this.$store.dispatch('getPaginateBlog', {
          offset: this.start + (this.page - 1) * this.limit,
          limit: this.limit,
          id_distinct: this.post_id,
        })
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