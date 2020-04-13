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

    <v-col
      v-if="!loading && product"
    >
      <v-row justify="center">
        <v-col md="8">
          <h1 style=" color: #C80000 ;  ">
            {{ product.name }}
          </h1>
          <p
            style="color:grey"
            class="text-uppercase"
          >
            {{ product.description }}
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col md="8">
          <v-img
            class="io"
            :src="product.image ? product.image : `${baseUrl}ampa- (1).png`"
            style="min-height:350px; max-height: 500px; border: red 2px solid; border-radius: 0;"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-row
      v-for="(item, i) in !loading && product ? product.details : []"
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
        >{{value}}</li>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'

  export default {
    components: {
      CarouselPortada,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        // absolute: true,
        // opacity: 0.46,
        // overlay: true,
        loading: false,
        product: null,
        error: null,
        snackbar: false,
      }
    },
    created () {
      this.getProduct()
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
              console.log(this.product, 'product fetched')
            } else if (res.notFound) {
              this.$router.push('/')
            } else {
              this.error = res.message
              this.snackbar = true
            }
          })
          .catch(e => {
            console.log(e)
            this.error = e
            this.snackbar = true
          }).finally(() => {
            this.loading = false
          })
      },
    },

  }
</script>

<style scoped>
io{

       background-color: transparent;

       background-repeat: repeat-x;
       background-attachment: scroll;
       background-position: 0px 92%;
       background-clip: border-box;
       background-origin: padding-box;
       background-size: auto auto;
}
div {
    position: relative;
}

div img{
	width:100%;
	height:100%;
}

.dd {
	margin:auto;
	width:60%;
}

.grid{
	display:grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 24px;
	grid-auto-rows:160px;
}

.grid div{
	overflow:hidden;
}
.item-2{
	grid-row: 1/3;
	grid-column: 3/3;
	height: 100%;
}

.item-9{

	grid-column: 2/4;
	height: 100%;
}

</style>
