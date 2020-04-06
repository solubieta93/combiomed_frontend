<template>
  <v-file-input
    v-model="files"
    counter
    :label="label"
    :multiple="multiple"
    :placeholder="placeholder"
    prepend-icon="mdi-paperclip"
    outlined
    :show-size="1000"
    :accept="accept"
  >
    <template v-slot:selection="{ index, text }">
      <v-chip
        v-if="index < 2"
        label
        small
      >
        {{ text }}
      </v-chip>

      <span
        v-else-if="index === 2"
        class="overline mx-2"
      >
        +{{ files.length - 2 }} File(s)
      </span>
    </template>
  </v-file-input>
</template>

<script>
  export default {
    name: 'FilesInputComponent',
    props: {
      label: {
        type: String,
        default: 'Files input',
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      placeholder: {
        type: String,
        default: 'Select your Files',
      },
      accept: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      files: null,
    }),
    watch: {
      files (value) {
        this.$emit('files:changed', value)
      },
    },
  }
</script>

<style scoped>

</style>
