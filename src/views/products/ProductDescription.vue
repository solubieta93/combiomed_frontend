<template>
  <v-container
    fluid
    class="pa-0 ma-0"
    style="background-color: white"
  >
    <carousel-portada
      :folder-name="product.name_json.es ? product.name_json.es : 'products'"
      :count-items="2"
    />

    <!-- <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      style="margin-top: -46px"
    /> -->
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
      <v-snackbar
        v-model="snackbar"
        color="red"
        :timeout="6000"
        top
      >
        {{ error }}
        <v-btn
          dark
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
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
      v-if="!loading && product && isAdmin"
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
            @click="goToEdit"
          >
            <v-icon dark>
              mdi-pencil
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row
      v-if="!loading && product && isAdmin"
      justify="center"
    >
      <v-col cols="8">
        <v-row justify="end">
          <v-btn
            fab
            dark
            small
            right
            color="red"
            @click="deleteProduct= !deleteProduct"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog
      v-model="deleteProduct"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Eliminar
        </v-card-title>
        <v-card-text>¿Está seguro que desea eliminar?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="deletedProduct(product.id)"
          >
            Si
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteProduct = false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- BUTTON DOWNLOAD PRODUCT PDF    -->
    <v-row
      v-if="!loading && product"
      justify="center"
    >
      <v-col cols="8">
        <v-row justify="end">
          <v-btn
            fab
            dark
            small
            right
            color="red"
            target="Descargar"
            :href="`${baseUrl}pdfs/${localeLang}/${product.name}.pdf`"
          >
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-col
      v-if="!loading && product"
    >
      <v-row justify="center">
        <v-col md="8">
          <h1 style=" color: #C80000 ;  ">
            {{ localeLang === 'es' ? product.name_json.es : product.name_json.en }}
          </h1>
          <p
            style="color:grey"
            class="text-uppercase"
          >
            {{ localeLang === 'es' ? product.description_json.es : product.description_json.en }}
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col
          sm="6"
          md="5"
          lg="4"
          xl="3"
          cols="12"
        >
          <v-img
            :src="product.images ? product.images[product.defaultImage] : product.image "
            style="min-height:350px; max-height: 500px;"
            :contain="true"
          />
        </v-col>
      </v-row>

      <v-row
        v-if="product.images"
        justify="center"
        align="center"
      >
        <v-col
          sm="10"
          md="8"
          lg="8"
          xl="5"
          cols="12"
        >
          <v-img
            justify="center"

            :src="`${baseUrl}web-combiomed-historia-03.png`"
            height="10%"
            width="100vw"
            max-height="10%"
          />
        </v-col>
      </v-row>

      <v-row
        v-if="product.images"

        justify="center"
      >
        <v-col
          v-for="(item, i) in imagesUrlFiltered"
          :key="i"
          sm="6"
          md="5"
          lg="3"
          xl="2"
          cols="12"
        >
          <v-card
            height="200"
            max-height="200"
            max-width="100%"
            min-width="250"
            class="mx-auto"
          >
            <v-img
              :src="item[0] || `${baseUrl}ampa- (1).png`"
              style="height: 100%; width: 100%"
              aspect-ratio="16/9"
              fill-height
            />
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-row
      v-for="(item, i) in !loading && product ? localeLang === 'es' ? product.details_es : product.details_en ? product.details_en : [] : []"
      :key="i"
      justify="center"
      align="center"
    >
      <v-col
        cols="8"
      >
        <h2>{{ item.text }}</h2>
        <li
          v-for="(value, index) in item.items"
          :key="index"
        >
          {{ value }}
        </li>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'
  import { mapGetters } from 'vuex'
  import { i18n } from '@/plugins/i18n'
  export default {
    components: {
      CarouselPortada,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        loading: false,
        product: null,
        error: null,
        snackbar: false,
        deleteProduct: false,
      }
    },
    created () {
      this.getProduct()
    },
    // eslint-disable-next-line vue/order-in-components
    computed: {
      ...mapGetters(['user']),
      isAdmin () {
        return this.user && this.user.is_superuser
      },
      localeLang() {
        return i18n.locale;
      },
      imagesUrlFiltered () {
        const a = this.product.images.map((x, i) => [x, i]).filter(x => x[1] !== this.product.defaultImage)
        return a
      },
      imgStyles () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'margin-top:-23%;'
          case 'sm': return 'margin-top:-15%;'
          case 'md': return 'margin-top:-15%;'
          case 'lg': return 'margin-top:-7%;'
          case 'xl': return 'margin-top:-10%;'
        }
      },
      rowStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'width:70%;'
          case 'sm': return 'width:100%;'
          case 'md': return 'width:100%;'
          case 'lg': return 'width:70%;'
          case 'xl': return 'width:70%;'
        }
      },
    },
    methods: {
      getProduct: function () {
        this.loading = true
        this.error = null
        this.snackbar = false
        const id = this.$route.params['productId']
        this.$store.dispatch('getProduct', id)
          .then(res => {
            if (res.success) {
              this.product = res.product
            } else if (res.notFound) {
              this.$router.push('/')
            } else {
              this.error = res.message
              this.snackbar = true
            }
          })
          .catch(e => {
            this.error = e
            this.snackbar = true
          }).finally(() => {
            this.loading = false
          })
      },
      goToEdit () {
        this.$router.push(`/products/${this.$route.params.productId}/edit`)
      },
      async deletedProduct () {
        console.log(this.product.id, 'id')
        const { success, message } = await this.$store.dispatch('delProduct', this.product.id)
        console.log(success, 'success')
        if (!success) { this.$router.push('/') }
        this.$router.push('/products')
      },
    },
  }
</script>

<style scoped>
.mycontainer {
	margin:auto;
	width:70%;
}
</style>
