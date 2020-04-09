<template>
  <v-toolbar
    dense
  >
    <v-text-field
      v-model="text"
      hide-details
      :placeholder="placeHolder"
      single-line
      :disabled="loading"
      :loading="loading"
      rounded
      @keydown.enter="search"
    ></v-text-field>
    <v-btn
      icon
      :disabled="loading"
      :loading="loading"
      @click="search"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      absolute
      bottom
      color="#294A9B"
    ></v-progress-linear>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'QuerySearch',
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      placeHolder: {
        type: String,
        default: 'Buscar',
      },
      onKeyUp: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        text: '',
      }
    },
    watch: {
      text (value) {
        if (this.onKeyUp) {
          console.log('key up')
          this.$emit('search:text', this.text)
        }
      },
    },
    methods: {
      search () {
        this.$emit('search:text', this.text)
      },
    },
  }
</script>

<style scoped>

</style>