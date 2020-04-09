<template>
  <v-container
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
    <paginate-items
      :can-change-limit="true"
      :default-limit="10"
      :filter-items="filterItems"
      :show-divider="true"
      :show-limit="true"
      :show-search-text="true"
      :update-on-change-text="true"
    >
    </paginate-items>
  </v-container>
</template>

<script>
  // import ItemPreview from '@/components/core/ItemPreview'
  // import QuerySearch from '@/components/core/QuerySearch'
  import PaginateItems from '../../components/core/PaginateItems'
  export default {
    components: {
      // ItemPreview,
      // QuerySearch,
      PaginateItems,
    },
    data () {
      return {
        absolute: true,
        opacity: 0.46,
        overlay: true,
        baseUrl: process.env.BASE_URL,
        loading: false,
        products: [],
        count: 0,
        page: 1,
        limit: 10,
        text: '',
      }
    },
    computed: {
      countPages () {
        return this.count / this.limit
      },
      paginationLength () {
        return Number.parseInt(this.count % this.limit > 0 ? (this.count / this.limit) + 1 : this.count / this.limit)
      },
      productsItems () {
        return this.products.map(x => this.buildItem(x))
      },
    },
    watch: {
      async limit (value) {
        this.page = 1
        await this.filterProducts()
      },
    },
    async mounted () {
      await this.filterProducts()
    },
    methods: {
      async appliedSearch (text) {
        this.page = 1
        this.text = text
        await this.filterProducts()
      },
      async filterProducts () {
        this.loading = true
        const result = await this.$store.dispatch('getProducts', {
          offset: (this.page - 1) * this.limit,
          limit: this.limit,
          search: this.text,
        })
        console.log(result, 'filterProducts')
        const { products, count } = result
        this.products = products
        this.count = count
        this.loading = false
      },
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
        console.log(search, 'text')
        this.loading = true
        const result = await this.$store.dispatch('getProducts', {
          offset, limit, search,
        })
        console.log(result, 'filterProducts')
        const { products, count } = result
        this.products = products
        this.count = count
        this.loading = false
        return {
          items: this.products.map(x => this.buildItem(x)),
          count,
        }
      },
    },
  }
</script>
