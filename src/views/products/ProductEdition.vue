<template>
  <v-container
    fluid
    class="pa-0 ma-0"
    style="background-color: white"
  >
    <carousel-portada />

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
    <product-form
      v-if="!loading && !!product"
      :product-base="product"
      :on-save="saveProduct"
      :editing="modeEdition"
    />
  </v-container>
</template>

<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'
  import ProductForm from '@/components/product/ProductForm'
  import { mapGetters } from 'vuex'
  export default {
    name: 'ProductEdition',
    components: {
      CarouselPortada,
      ProductForm,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        loading: false,
        product: null,
        error: null,
        snackbar: false,
        productId: null,
        modeEdition: true,
      }
    },
    computed: {
      ...mapGetters(['user']),
    },
    created () {
      this.modeEdition = !!this.$route.params.productId
    },
    mounted () {
      console.log(this.modeEdition, 'modeEdition')
      if (this.modeEdition) {
        this.getProduct()
      } else {
        this.buildProduct()
      }
    },
    methods: {
      getProduct () {
        this.loading = true
        this.error = null
        this.snackbar = false
        this.productId = this.$route.params.productId
        this.$store.dispatch('getProduct', this.$route.params.productId)
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
            console.log(e)
            this.error = e
            this.snackbar = true
          }).finally(() => {
            this.loading = false
          })
      },
      async saveProduct (changes) {
        this.loading = true
        const prepared = await this.prepareChanges(changes)
        if (!prepared.success) {
          this.loading = false
          return
        }
        const payload = this.modeEdition ? { changes, id: this.product.id } : { ...changes }
        console.log(payload, 'payload')
        const res = await this.$store.dispatch(this.modeEdition ? 'patchProduct' : 'postProduct', payload)
        if (res.success) {
          this.loading = false
          this.$router.push(`/products/${res.id}`)
        } else {
          this.loading = false
          this.error = res.message
        }
      },
      prepareChanges: async function (changes) {
        console.log(changes, 'changes')
        if (changes.json_images) {
          const images = []
          for (const item of changes.json_images){
            console.log(item, 'item')
            const uploadRes = await this.$store.dispatch('uploadFile', item)
            if (uploadRes.success) {
              images.push(uploadRes.src)
              // changes.json_images = uploadRes.src
            } else {
              this.error = 'Error subiendo la imagen'
              return {
                success: false,
                changes: changes,
              }
            }
          }
          changes.json_images = JSON.stringify(images)
        }
        if (changes.files && changes.files.length) {
          const files = []
          for (let item of changes.files) {
            if (item.file) {
              const uploadFile = await this.$store.dispatch('uploadFile', item.file)
              if (uploadFile.success) {
                files.push({
                  text: item.text,
                  src: uploadFile.src,
                })
              } else {
                this.error = 'Error subiendo el archivo'
              }
            }
          }
          if (!files || !files.length) {
            return {
              success: false,
              changes: changes,
            }
          } else {
            changes.json_files = JSON.stringify({
              files,
            })
          }
        }
        if (this.modeEdition) {
          changes['owner'] = this.user.id
        }
        return {
          success: true,
          changes,
        }
      },
      buildProduct () {
        this.loading = true
        this.$store.dispatch('getNewProduct').then(x => {
          this.product = x
          this.loading = false
        })
      },
    },
  }
</script>

<style scoped>

</style>
