<template>
  <v-toolbar
    dense
    min-width="200px"
    max-width="300px"
    class="mx-auto"
  >
    <v-text-field
      v-model="text"
      hide-details
      :placeholder="$t(placeHolder)"
      single-line
      :disabled="loading"
      :loading="loading"
      rounded
      clearable
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
        default: 'buscar',
      },
      searchText: {
        type: Function,
        default: (text) => {},
      },
      onKeyUpFunction: {
        type: Function,
        default: (text) => {},
      },
    },
    data () {
      return {
        text: '',
      }
    },
    watch: {
      text (value) {
        this.onKeyUpFunction(value)
      },
    },
    methods: {
      search () {
        this.searchText(this.text)
      },
    },
  }
</script>

<style scoped>

</style>