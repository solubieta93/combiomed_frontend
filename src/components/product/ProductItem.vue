<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" />

    <v-alert
      v-if="!!saveError"
      dense
      dismissible
      outlined
      type="error"
    >
      {{ saveError }}
    </v-alert>

    <v-card-title
      v-if="mode==='show'"
      v-text="product.name"
    />

    <v-card-actions>
      <v-btn
        v-if="isAdmin && mode!=='creating'"
        icon
        color="purple"
        text
        @click="editing = !editing"
      >
        <v-icon> {{ 'mdi-pencil' }} </v-icon>
      </v-btn>

      <v-btn
        v-if="isAdmin && mode!=='creating'"
        color="purple"
        icon
        @click="deleteProduct"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>

      <v-spacer />

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />

        <v-card-text v-text="product.description" />
      </div>
    </v-expand-transition>

    <v-dialog
      v-model="editing"
      max-width="600px"
    >
      <product-add-item
        :product="product"
        :mode="'editing'"
        :onSave="() => { editing = false }"
      /> 
    </v-dialog>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProductAddItem from './ProductAddItem'

  export default {
    components: {
      ProductAddItem,
    },
    props: {
      product: {
        id: Number,
        name: String,
        owner: String,
        description: String,
        default: null,
      },
      mode: {
        type: String,
        default: 'show',
      },
      onSave: Function,
    },
    data () {
      return {
        show: false,
        editing: false,
        saveError: '',
        overlay: false,
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin () {
        return this.user && this.user.is_superuser
      },
    },
    methods: {
      deleteProduct: function () {
        const res = this.$store.dispatch('delProduct', {
          id: this.product.id,
        })
        if (!res.success) {
          this.saveError = res.message
        }
      },
      saveProduct: async function () {
        const actionToDo = this.mode === 'editing' ? 'patchProduct' : 'postProduct'
        this.saveError = ''
        const res = await this.$store.dispatch(actionToDo, this.product)
        if (!res.success) {
          this.saveError = res.message
        } else {
          this.mode = 'show'
          if (this.onSave) this.onSave()
        }
      },
    },
  }
</script>
