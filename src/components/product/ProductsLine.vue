<template>
  <!-- <v-img
    src="../../../public/web-combiomed-productos-noticias&eventos-04.png"
    style="z-index: 2;"
  > -->
  <div style="margin-bottom:5%;">
    <v-col
      cols="12"
      style="margin-top:5%;"
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
              {{ $t('linesProduct') }}
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
            to="/products/newLine"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
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
  </div>
  <!-- </v-img> -->
</template>

<script>
  import ResponsiveItems from '@/components/core/ResponsiveItems'
  import { mapGetters } from 'vuex'
  import { i18n } from '@/plugins/i18n'
  export default {
    components: {
      ResponsiveItems,
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
      locale () {
        return i18n.locale
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
      // id: productType.id,
      // title: productType.title,
      // description: productType.description,
      // image: productType.image,
      // owner: '',
      buildItem (productType) {
        return {
          item: { ...productType },
          pathTo: '/products' + (productType.id ? `?type=${productType.id}` : ''),
        }
      },
    },
  }
</script>
