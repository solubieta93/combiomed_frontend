<template>
  <v-img
    src="../../../public/web-combiomed-productos-noticias&eventos-04.png"
    style="z-index: 2;"
  >
    <v-col
      cols="12"
      style="margin-top:10%;"
    >
      <v-row
        justify="center"
        style="color: grey;"
      >
        <v-col md="3">
          <hr style="color:#293D66;">
        </v-col>
        <v-col md="2">
          <v-row justify="center">
            <h3
              class="text-uppercase"
              style=" margin-top:-5%;margin-left: 16px; color:#293D66;"
            >
              líneas de productos
              <br>
            </h3>
          </v-row>
        </v-col>
        <v-col md="3">
          <hr style="color:#293D66;">
        </v-col>
      </v-row>
    </v-col>
    <v-container>
      <responsive-items
        :items="productsLine"
      />
    </v-container>
  

  <!-- TO ADD LINE PRODUCTS, ONLY ADMIN CAN DO IT -->
    <v-dialog
      v-model="addLineProduct"
      max-width="600px"
    >
      <product-add-line
        :line="newLineProduct"
        :mode="'creating'"
        :onSave="() => { addLineProduct = false; getTypes() }"
      />
    </v-dialog>
    
   <v-row
      v-if="isAdmin"
      justify="center"
    >
      <v-col cols="8">
        <v-row justify="end">
          <v-btn
            fab
            dark
            small
            right
            color="pink"
            @click="showAddLineProductDialog"
          >
             <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-row>
      </v-col>
   </v-row>

    <v-row
      v-if="isAdmin"
      justify="center"
    >
      <v-col cols="8">
        <v-row justify="end">
          <v-btn
            fab
            dark
            small
            right
            color="green"
            to="/products/editLine"
          >
            <v-icon dark>
              mdi-pencil
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    </v-img>
</template>

<script>
  import ResponsiveItems from '@/components/core/ResponsiveItems'
  import ProductAddLine from '@/components/product/ProductAddLine'
  import { mapGetters } from 'vuex'
  

  export default {
    components: {
      ResponsiveItems,
      ProductAddLine
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        productsTypes: [],
        addLineProduct: false,
        newLineProduct: [],
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      productsLine () {
        return this.productsTypes.map(x => this.buildItem(x))
      },
    },
    mounted: async function () {
      await this.getTypes()
    },
    methods: {
      async getTypes () {
        this.loading = true
        await this.$store.dispatch('getProductsTypes').then(result => {
          this.productsTypes = result.types
          return result.types
        }).catch(e => {
          return []
        })
      },
      buildItem (productType) {
        return {
          item: {
            id: productType.id,
            title: productType.title,
            description: productType.description,
            image: productType.image,
            owner: '',
          },
          pathTo: '/products' + (productType.id ? `?type=${productType.id}` : ''),
        }
      },
      async showAddLineProductDialog () {
        this.newLineProduct = await this.$store.dispatch('getNewLineProduct')
        this.addLineProduct = true
      },
    },
  }
</script>
