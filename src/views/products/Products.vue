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
      <v-col
        sm="8"
        md="8"
        lg="8"
        cols="10"
      >
        <v-row
          justify="center"
          align="center"
          style="height: 50px; color: grey;"
        >
          <v-col>
            <hr>
          </v-col>
          <v-col
            md="3"
          >
<!--            <hr>-->
            <h3
              class="text-uppercase text-center"
            >
              Productos
<!--              <br>-->
            </h3>
          </v-col>
          <v-col>
            <hr>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <paginate-items
      v-if="productsTypes && productsTypes.length"
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
            <v-spacer />
            <v-divider />
            <v-col
              cols="8"
              sm="8"
              md="6"
              lg="4"
              xl="3"
            >
              <v-select
                v-model="selectedType"
                :items="selectProductsTypes"
                hide-details
                clearable
                solo
                flat
                dense
                color="#8b0000"
                :loading="loading"
                :label="selectedType ? null : 'Todos'"
                @click:clear="onUpdateSelected"
                @change="onUpdateSelected"
              />
            </v-col>
            <v-divider />
            <v-spacer />
          </v-row>
        </v-col>
      </v-row>
    </paginate-items>

    <!-- TO ADD PRODUCTS, ONLY ADMIN CAN DO IT -->
    <v-card-text
      v-if="isAdmin"
      style="height: 100px; position: relative"
    >
      <v-btn
        absolute
        dark
        fab
        right
        small
        color="red"
        to="/products/new"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-text>
  </v-container>
</template>

<script>
  import PaginateItems from '@/components/core/PaginateItems'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      PaginateItems,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        loading: false,
        productsTypes: [],
        count: 0,
        page: 1,
        limit: 10,
        text: '',
        typeId: null,
        refresh: false,
        selectedType: undefined,
        hasCreated: false,
        addProduct: false,
        newProduct: [],
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      selectProductsTypes () {
        return this.productsTypes.map(x => ({ text: x.title, value: x.id.toString() }))
      },
      routeType () {
        return this.$route.query['type'] && this.selectProductsTypes.some(x => x.value === this.$route.query['type'])
          ? this.$route.query['type'] : null
      },
    },
    async created () {
      this.loading = true
      this.text = this.$route.query['search'] || this.text
      this.limit = Number.parseInt(this.$route.query['limit']) || this.limit
      await this.getTypes()
        .then(_ => {
          this.typeId = this.routeType
          const temp = this.selectProductsTypes.filter(x => x.value === this.typeId)
          if (this.typeId && temp) {
            this.selectedType = temp[0]
          }
          this.hasCreated = true
          this.refresh = true
          this.loading = false
        })
        .catch(e => {
          this.loading = false
        })
    },
    methods: {
      buildItem (product) {
        return {
          item: {
            id: product.id,
            title: product.name,
            description: product.description,
            image: product.image,
            owner: product.owner,
            files: product.files,
          },
          pathTo: `/products/${product.id}`,
        }
      },
      async filterItems (search, offset, limit) {
        this.refresh = false
        const params = {
          offset, limit, search,
        }
        if (!this.productsTypes || this.loading || !this.hasCreated) {
          return {
            items: [],
            count: 0,
          }
        }
        this.loading = true
        if (this.typeId) {
          params['typeId'] = this.typeId
        }
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
          this.productsTypes = result.types
          this.loading = false
          return result.types
        }).catch(e => {
          this.loading = false
          return []
        })
      },
      onUpdateSelected () {
        this.typeId = this.selectedType ? typeof (this.selectedType) === 'object' ? this.selectedType.value : this.selectedType : null
        this.refresh = true
      },
      async showAddLineProductDialog () {
        this.newProduct = await this.$store.dispatch('getNewLineProduct')
        this.addProduct = true
      },
    },
  }
</script>
