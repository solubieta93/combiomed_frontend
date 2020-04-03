<template>
  <v-card>
    <form-alert
        v-if="saveError"
        :message="saveError"
    />
    <v-card-title
    v-if="mode==='creating'"
    >
      <h3>Add a New Product</h3>
    </v-card-title>
    <v-card-title
    v-if="mode==='editing'"
    >
      <h3>Edit Product</h3>
    </v-card-title>
    <v-card-text>
      <v-form class="px-3">
        <v-text-field
          v-model="product.name"
          :rules="[rules.required]"
          label="Name"
        />
        <v-textarea
          v-model="product.description"
          :rules="[rules.required]"
          label="Description" 
          prepend-icon="edit"
        />
        <v-btn 
          class="red white--text"
          @click="saveProduct()"
        >
          Save
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
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
        saveError: '',
        overlay: false,
        rules: {
          required: value => !!value || 'Required.',
        }
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
          this.saveError = 'Please fill the required fields'
        } else {
          this.mode = 'show'
          if (!!this.onSave) this.onSave()
        }
      },
    },
  }
</script>