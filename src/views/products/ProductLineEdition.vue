<template>
  <v-container
    fluid
    class="pa-0 ma-0"
    style="background-color: white"
  >
    <carousel-portada />

    <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      style="margin-top: -46px"
    />
    <v-row
      justify="center"
      align="center"
    >
      <v-progress-circular
        v-if="loading"
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      />
      <v-alert
        v-if="!loading && !snackbar && error"
        outlined
        type="error"
        color="primary"
        dense
      >
        {{ error }}
      </v-alert>
    </v-row>

    <v-row 
      v-if="modeEdition"
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
                :items="selectProductsTypes"
                hide-details
                clearable
                solo
                flat
                dense
                color="#8b0000"
                :loading="loading"
                :label="selectedType ? null : 'Seleccione una linea'"
                @change="onUpdateSelected"
            />
          </v-col>
          <v-divider />
          <v-spacer />
        </v-row>
      </v-col>
    </v-row>

    <product-line-form
      v-if="!loading"
      :line="modeEdition ? productType : line"
      :on-save="saved"
      :mode="modeEdition ? 'editing' : 'creating'"
    />
  </v-container>
</template>


<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'
  import ProductLineForm from '@/components/product/ProductLineForm'

  import { mapGetters } from 'vuex'

  export default {
    name: 'ProductEdition',
    components: {
      CarouselPortada,
      ProductLineForm,
    },
    props: {
      modeEdition: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        loading: false,
        line: null,
        error: null,
        snackbar: false,
        productId: null,

        productsTypes: [],
        text: '',
        typeId: null,
        refresh: false,
        selectedType: undefined,

        // modeEdition: true,
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
      productType() {
        return this.typeId && this.productsTypes ? this.productsTypes.filter(x => x.id.toString() === this.typeId)[0] : null
      }
    },
    // created () {
    //   this.modeEdition = !!this.$route.params.productId
    // },
    async mounted () {
      console.log(this.modeEdition, 'modeEdition')
      if (this.modeEdition) {
        this.loading = true
        await this.getTypes()
        .then(_ => {
            this.loading = false
        })
        .catch(e => {
            this.loading = false
        })
      } else {
        this.buildProduct()
      }
    },
    methods: {
      async getTypes () {
        this.loading = true
        await this.$store.dispatch('getProductsTypes')
        .then(result => {
          console.log(result.types, 'types')
          this.productsTypes = result.types
          this.loading = false
          return result.types
        }).catch(e => {
          this.loading = false
          return []
        })
      },
      
      onUpdateSelected (e) {
        console.log(typeof e, 'e')
        this.typeId = e || null
        if (this.typeId === null) {
          this.buildProduct()
        }
      },

      buildProduct () {
        this.loading = true
        this.$store.dispatch('getNewLineProduct').then(x => {
          this.line = x
          this.loading = false
        })
      },      

      saved() {
        this.$router.push('/')
      }
    },
  }
</script>

