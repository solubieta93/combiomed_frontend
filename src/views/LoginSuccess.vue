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
            src="/ananda_icon.svg"
          >
          <v-text-field
            v-model="unique"
            label="Email or UserName"
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
                  round
                  color="primary"
                  dark
                  @click="login"
                >
                  Sign in
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="12"
              >
                <p>
                  or Sign In with Google
                  <br>
                  <button
                    class="social-button"
                    :href="socialLogin.google"
                  >
                    <img
                      width="100%"
                      alt="Google Logo"
                      src="/google.png"
                    >
                  </button>
                </p>
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
    name: 'LoginSuccess',
    data () {
      return {
        jwt: this.$route.params.jwt,
      }
    },
    computed: {
      ...mapGetters(['authError', 'user', 'token']),
    },
    watch: {
      user (value) {
        // if user value changes, redirect to home page
        if (value) {
          this.$router.push('/dashboard')
        }
      },
    },
    created () {
      if (this.$route.params.jwt) {
        localStorage.setItem('token', this.$route.params.jwt)
        this.$store.dispatch('setToken', this.$route.params.jwt)
        this.$router.push('/dashboard')
      } else {
        this.$store.dispatch('setAuthError', localStorage.getItem('authError'))
        this.$router.push('/login')
      }
    },
    methods: {
      setLayout (layout) {
        this.$store.commit('SET_LAYOUT', layout)
      },
    },
  }
</script>
