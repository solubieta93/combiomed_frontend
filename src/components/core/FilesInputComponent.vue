<template>
  <div>
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
      @change="change"
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
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Error
        </v-card-title>

        <v-card-text>
          Por favor, inserte una imagen de menos de {{ size }}MB
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
      size: {
        type: Number,
        default: 3,
      },
    },
    data: () => ({
      files: [],
      dialog: false,
    }),
    methods: {
      change (value) {
        if (value && value.length && value[0].size >= 1000000 * this.size) {
          this.files = []
          this.dialog = true
        } else {
          this.$emit('files:changed', this.files)
        }
      },
    },
  }
</script>

<style scoped>

</style>
