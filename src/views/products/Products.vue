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
              :max="count"
              :disabled="!count"
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
          v-for="(item, i) in productsItems"
          :key="i"
        >
          <item-preview
            :item="item.item"
            :pathTo="item.pathTo"
          ></item-preview>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
  import ItemPreview from '@/components/core/ItemPreview'
  import QuerySearch from '@/components/core/QuerySearch'
  export default {
    components: {
      ItemPreview,
      QuerySearch,
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
    async mounted () {
      await this.filterProducts()
    },
    watch: {
      async limit (value) {
        this.page = 1
        await this.filterProducts()
      },
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
    },
  }
</script>
