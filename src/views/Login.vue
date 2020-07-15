<template>
<!--  backgroundImage: `url(${baseUrl}combiomed/combiomed3.png)`-->
  <v-row
    style="background-size: cover;"
    :style="{
      backgroundAttachment: 'scroll, fixed',
      backgroundPosition: '0px, 0px, 50% 50%',

      backgroundImage: 'linear-gradient(red, white, red)'
    }"
    align="center"
    justify="center"
  >
    <v-overlay :value="showOverlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <div class="login">
      <v-card
        class="mx-auto"
        :style="cardStyle"
        elevation="0"
        style="background-color: transparent;"
      >
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
            outlined
            dense
            small
            rounded
          />
          <br>
          <v-text-field
            v-model="password"
            outlined
            dense
            small
            rounded
            :rules="[rules.required, rules.charactersLength(8), rules.validPassword]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contaseña"
            counter
            @click:append="show1 = !show1"
          />
          <v-row>
            <v-col>
              <v-btn
                block
                dense
                color="primary"
                dark
                @click="login"
              >
                Aceptar
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Rules from '../utils/rules'
  import { baseUrl } from '../utils/globalConstants';

  export default {
    name: 'Login',
    data () {
      return {
        baseUrl,
        unique: '',
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: Rules,
        showOverlay: false
      }
    },
    computed: {
      ...mapGetters(['authError', 'user']),

      cardStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'width: 90vw;'
          case 'sm': return 'width: 90vw;'
          case 'md': return 'width: 400px;'
          case 'lg': return 'width: 30vw;'
          case 'xl': return 'width: 40vw;'
        }
      },
    },
    watch: {
      user (value) {
        // if user value changes, redirect to home page
        if (value) {
          this.$router.push('/')
        }
      },
      password (v) {
        // console.log(v, '--v')
      },
      authError (v) {
        console.log(v, '---v');
        if (v) {
          console.log(v, 'entro');
          this.$notify({
            type: 'error',
            title: 'Error',
            group: 'auth',
            text: v,
            duration: 6000,
          })
        }

      },
    },
    methods: {
      login: async function () {
        this.showOverlay = true;
        await this.$store.dispatch('signinUser', {
          username: this.unique,
          password: this.password,
        })
        this.showOverlay = false;
      },
    },
  }
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
/*.login {*/
/*  margin-top: 10%;*/
/*  margin-bottom: 5%;*/
/*}*/
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
