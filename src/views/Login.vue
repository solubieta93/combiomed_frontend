<template>
<!-- #8c3564 -->
  <v-row
    style="background-color: white;"
    align="center"
    justify="center"
  >
    <div class="login">
      <form-alert
        v-if="authError"
        :message="authError"
      />
      <v-card class="mx-auto" style="width:400px;">
        <v-card-text>
          <img
            style="margin-left: 25%"
            width="43%"
            :src="`${baseUrl}Símbolo - Contracción - Fondo blanco.svg`"
          >
          <v-text-field
            v-model="unique"
            label="Nombre de Usuario"
            :rules="[rules.required]"
            clearable
          />
          <br>
          <v-text-field
            v-model="password"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contaseña"
            hint="Como mínimo 6 caracteres"
            counter
            @click:append="show1 = !show1"
          /> 
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-btn
                  rounded
                  color="primary"
                  dark
                  @click="login"
                >
                  Aceptar
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </div>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Login',
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        unique: '',
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 6 || 'Min 6 characters',
          emailMatch: () => "The email and password you entered don't match",
        },
      }
    },
    computed: {
      ...mapGetters(['authError', 'user']),
    },
    watch: {
      user (value) {
        // if user value changes, redirect to home page
        if (value) {
          this.$router.push('/dashboard')
        }
      },
    },
    mounted () {
      this.setLayout('simple-layout')
    },
    methods: {
      login: async function () {
        await this.$store.dispatch('signinUser', {
          username: this.unique,
          password: this.password,
        })
      },
      setLayout (layout) {
        this.$store.commit('SET_LAYOUT', layout)
      },
    },
  }
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 10%;
  margin-bottom: 5%;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 25%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
