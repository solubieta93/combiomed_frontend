<template>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(card, i) in blog"
          :key="card.title"
          :cols="4"
        >
            <v-img src="../../../public/ampa- (1).png">
                <v-overlay :absolute="true" :value="true" :opacity="0.46" color="#001A33"  style="height:141px; left: 0px; top: 60px;">
                        <div>
                    <h3 class="text-uppercase">{{card.title}}</h3>
                    <h3>{{card.abstract}}</h3>
                    <h3>Autor: {{card.owner}}</h3>
                        </div>
                </v-overlay>	
            </v-img>
<!--             		
          <news-show-item
            :post="card"
            :mode="'show'"
          /> -->
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
    data () {
      return {
        show: false,
        showMore: false,
        editing: false,
        addNews: false,
        page: 1,
        newNews: Object({}),
        overlay: false,
        title: '',
        content: '',
        abstract: '',
      }
    },
    computed: {
      ...mapGetters(['blog', 'user', 'count_post']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      pagination_length () {
        return Number.parseInt(this.count_post % 6 > 0 ? (this.count_post / 6) + 1 : this.count_post / 6)
      },
    },
    watch: {
      page (value) {
        if (value) {
          this.paginate()
        }
      },
    },
    mounted: function () {
      this.paginate()
    },
    methods: {
      paginate () {
        this.$store.dispatch('getPaginateBlog', {
          offset: this.page - 1,
          limit: 6
        })
      },
    },
  }
</script>



<style scoped>

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

.grid{
	display:grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 24px;
	grid-auto-rows:200px;
}

.grid div{	
	overflow:hidden;
}


</style>