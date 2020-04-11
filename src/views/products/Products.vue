<template>
  <v-container
    v-if="productsTypes && productsTypes.length"
    class="pa-0 ma-0 align-center justify-center"
    fluid
    style="background-color: white"
  >
    <v-img
      :src="`${baseUrl}doctus VIII.png`"
      height="80vh"
      width="100vw"
    />
    <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      style="top:-46px"
    />
    <v-row>

    </v-row>
    <paginate-items
      :can-change-limit="true"
      :default-limit="limit"
      :filter-items="filterItems"
      :show-divider="true"
      :show-limit="true"
      :show-search-text="true"
      :update-on-change-text="false"
      :refresh="refresh"
    >
      <v-row
        justify="center"
        align="center"
      >
        <v-col align-self="center">
          <v-row
            align="center"
            justify="center"
          >
            <v-select
              v-model="selectedType"
              :items="selectProductsTypes"
              style="width: 200px; max-width: 200px"
              persistent-hint
              hint="Linea de productos"
              clearable
              solo
              color="#8b0000"
              :loading="loading"
            ></v-select>
          </v-row>
        </v-col>
      </v-row>
    </paginate-items>
  </v-container>
</template>

<script>
  import PaginateItems from '@/components/core/PaginateItems'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      // ItemPreview,
      // QuerySearch,
      PaginateItems,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        loading: false,
        products: [],
        count: 0,
        page: 1,
        limit: 10,
        text: '',
        typeId: null,
        refresh: false,
        selectedType: undefined,
      }
    },
    computed: {
      ...mapGetters(['productsTypes']),
      selectProductsTypes () {
        return this.productsTypes.map(x => x.title)
      },
      routeType () {
        return this.$route.params['type'] && this.productsTypes.some(x => x.id === this.$route.params['type'])
          ? this.$route.params['type'] : null
      },
    },
    watch: {
      selectedType (value) {
        this.typeId = value && this.productsTypes.some(x => x.title === value) ? this.productsTypes.filter(x => x.title === value)[0].id : null
        console.log(this.typeId, 'watch type')
        this.refresh = true
      },
    },
    created () {
      this.text = this.$route.query['search'] || this.text
      this.limit = this.$route.query['limit'] || this.limit
      this.typeId = this.routeType
      const temp = this.productsTypes.filter(x => x.id === this.typeId)
      this.selectedType = 'Type 1'
      if (this.typeId && temp) {
        this.selectedType = temp[0].title
      }
    },
    // mounted () {
    //   const temp = this.productsTypes.filter(x => x.id === this.typeId)
    //   this.selectedType = 'Type 1'
    //   if (this.typeId && temp) {
    //     this.selectedType = temp[0].title
    //   }
    // },
    methods: {
      buildItem (product) {
        return {
          item: {
            id: product.id,
            title: product.name,
            description: product.description,
            image: product.image,
            owner: product.owner,
          },
          pathTo: `/products/${product.id}`,
        }
      },
      async filterItems (search, offset, limit) {
        this.refresh = false
        const params = {
          offset, limit, search,
        }
        if (!this.productsTypes) {
          return {
            items: [],
            count: 0,
          }
        }
        this.loading = true
        if (this.typeId && this.productsTypes.some(x => x.id.toString() === this.typeId.toString()))
          params['typeId'] = this.typeId
        const result = await this.$store.dispatch('getProducts', params)
        const { products, count } = result
        this.products = products
        this.count = count
        this.loading = false
        return {
          items: this.products.map(x => this.buildItem(x)),
          count,
        }
      },
      async getTypes () {
        this.loading = true
        await this.$store.dispatch('getProductsTypes').then(result => {
          // this.productTypes = result.types
          this.loading = false
        }).catch(e => {
          console.log(e, 'error getTypes')
          this.loading = false
        })
      },
    },
  }
</script>
