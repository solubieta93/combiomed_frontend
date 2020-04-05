<template>
    <v-container fluid>
      <div class='grid' v-if= !detail>
          <div class='item-0'>
            <v-img src="../../../public/ampa- (1).png" class="fill-height">
              <v-overlay :absolute="true" :value="true" :opacity="0.46" color="#001A33"  style="height:141px; left: 0px; top: 60px;">
                      <div>
                  <h3 class="text-uppercase">{{blog[0].title}}</h3>
                  <h3>{{blog[0].abstract}}</h3>
                  <h3>Autor: {{blog[0].owner}}</h3>
                      </div>
              </v-overlay>	
            </v-img>
          </div>
          <div class='item-1' v-if="blog[1]">
            <v-img src="../../../public/ampa- (1).png" class="fill-height">
              <v-overlay :absolute="true" :value="true" :opacity="0.46" color="#001A33"  style="height:141px; left: 0px; top: 60px;">
                      <div>
                  <h3 class="text-uppercase">{{blog[1].title}}</h3>
                  <h3>{{blog[1].abstract}}</h3>
                  <h3>Autor: {{blog[1].owner}}</h3>
                      </div>
              </v-overlay>	
            </v-img>
          </div>
          <div class='item-2' v-if="blog[2]">
            <v-img src="../../../public/ampa- (1).png" class="fill-height">
              <v-overlay :absolute="true" :value="true" :opacity="0.46" color="#001A33"  style="height:141px; left: 0px; top: 60px;">
                      <div>
                  <h3 class="text-uppercase">{{blog[2].title}}</h3>
                  <h3>{{blog[2].abstract}}</h3>
                  <h3>Autor: {{blog[2].owner}}</h3>
                      </div>
              </v-overlay>	
            </v-img>
          </div>
      </div>

      <v-row dense v-if= detail>
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
      page: {
        type: Number,
        default: 1
      },
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
        default: -1
      }
    },
    data () {
      return {
        page: 1,
      }
    },
    computed: {
      ...mapGetters(['blog', 'user', 'count_post']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      pagination_length () {
        return Number.parseInt(this.count_post % this.limit > 0 ? (this.count_post / this.limit) + 1 : this.count_post / this.limit)
      },
    },
    watch: {
      page (value) {
        if (value) {
          console.log(value, 'value')
          this.page = value
          this.limit = 3
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
          limit: this.limit,
          // dont mared if id_distinct or/and start is -1 because in backend is prepare for that
          id_distinct: this.post_id,
          start: this.start
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