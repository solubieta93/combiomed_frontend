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
  </v-img>
</template>

<script>
  import ResponsiveItems from '@/components/core/ResponsiveItems'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      ResponsiveItems
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        productsTypes: [],
      }
    },
    computed: {
      productsLine () {
        console.log('estoy en b')
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
          console.log(e, 'error getTypes')
          return []
        })
      },
      buildItem (productType) {
        return {
          item: {
            id: productType.id ,
            title: productType.title,
            description: productType.description,
            image: productType.image,
            owner: '',
          },
          pathTo: '/products' + (productType.id ? `?type=${productType.id}` : ''),
        }
      },
    },
  }
</script>
