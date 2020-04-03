<template>
  <v-row
    style="background-color: #8c3564;"
    align="center"
    justify="center"
  >
    <!-- Error Alert -->
    <!--    <v-row>-->
    <!--      <v-col-->
    <!--        cols="12"-->
    <!--        sm="6"-->
    <!--        offset-sm="3"-->
    <!--      >-->
    <!--      </v-col>-->
    <!--    </v-row>-->
    <div class="login">
      <form-alert
        v-if="authError"
        :message="authError"
      />
      <v-card>
        <v-card-text>
          <img
            style="margin-left: 25%"
            width="43%"
            src="/Símbolo - Contracción - Fondo blanco.svg"
          >
          <v-text-field
            v-model="unique"
            label="UserName"
            :rules="[rules.required]"
            clearable
          />
          <br>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 6 characters"
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
                  Sign in
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
  // import firebase from 'firebase'
  import { mapGetters } from 'vuex'
  import { api } from '../../globalConstants'
  // import * as axios from 'axios'

  export default {
    name: 'Login',
    data () {
      return {
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
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
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
