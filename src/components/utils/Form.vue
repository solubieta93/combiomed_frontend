<template>
  <v-img
    :class="{
      'xsOnlyStyle' : $vuetify.breakpoint.xsOnly,
      'smAndDownStyle' : $vuetify.breakpoint.smOnly,
      'mdAndUpStyle' : $vuetify.breakpoint.mdAndUp,
      'xlOnlyStyle' : $vuetify.breakpoint.xlOnly
    }"
    :src="`${baseUrl}web-combiomed-futer-04-04.png`"
  >
    <v-row 
      justify="center"
      :class="{
      'xsOnlyRowStyle' : $vuetify.breakpoint.xsOnly,
      'smAndDownRowStyle' : $vuetify.breakpoint.smOnly,
      'mdAndUpRowStyle' : $vuetify.breakpoint.mdAndUp
    }"
    >
      <v-col
        md="12"
        sm="12"
        lg="12"
        xl="12"
        xs="1"
        cols="12"
      >
        <v-row
          justify="center"
          :style="imageHeight"
        >
          <v-col 
            md="4"
            sm="3"
            lg="3"
            xl="3"
            xs="1"
            cols="12"
            >
            <v-row justify="center">
              <img src="../../../public/ICONOS/map-marker.png" >
            </v-row>
            <v-row justify="center">
              <v-col cols="10">
                <p class="body-2 font-italic font-weight-bold">
              Calle 202 No.1704 entre 17 y 19. Siboney. Playa. La Habana. Cuba
            </p>
              </v-col>
              
            </v-row>
          </v-col>

          <v-col 
            md="3" 
            sm="3"
            lg="3"
            xl="3"
            xs="1"
            >
            <v-row justify="center">
              <img src="../../../public/ICONOS/email.png" >
            </v-row>
            <v-row justify="center">
              <v-col 
              md="7"
              cols="6">
              <p class="body-2 font-italic font-weight-bold">
                E-mail: combio@icid.cu
              </p>
              </v-col>
            </v-row>
          </v-col>

          <v-col 
            md="4"
            sm="3"
            lg="3"
            xl="3"
            xs="1"
            >
            <v-row justify="center">
              <img src="../../../public/ICONOS/phone.png" >
            </v-row>
            <v-row justify="center">
              <v-col cols="9">
              <p class="caption font-italic font-weight-bold">
                Telf:(+53) 7 2739088, (+53)7 2719132
              </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-form ref="form" v-model="valid">
          <v-row justify="center" >
            <v-col 
              md="4"
              sm="3"
              lg="5"
              xl="3"
              xs="1"
            >
              <v-text-field
                label="Nombre"
                single-line
                outlined
                hide-details
                color="red"
                dense
                v-model="emailDetail['name']"
              />
            </v-col>
            <v-col 
              md="4"
              sm="3"
              lg="5"
              xl="3"
              xs="1"
            >
              <v-text-field
                label="E-mail"
                single-line
                outlined
                dense
                color="red"
                v-model="emailDetail['email']"
              />
            </v-col>

            <v-col
              md="4"
              sm="3"
              lg="10"
              xl="3"
              xs="1"
            >
              <v-text-field
                label="Asunto"
                single-line
                outlined
                dense
                color="red"
                v-model="emailDetail['summary']"
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
              md="12"
              sm="9"
              lg="10"
              xl="9"
              xs="1"
            >
              <v-textarea
                label="Introduzca su mensaje"
                single-line
                outlined
                dense
                color="red"
                counter
                maxlength="1000"
                v-model="emailDetail['message']"
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
              md="12"
              sm="9"
              lg="10"
              xl="9"
              xs="1"
            >
              <v-btn
                color="#001A33"
                block
                @click="validateAndSubmit"
              >
                <h5 style="color: white;">
                  Enviar ahora
                </h5>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
  import Rules from '../../utils/rules'
  import { VueReCaptcha } from "vue-recaptcha-v3";
  Vue.use(VueReCaptcha, { siteKey: "6LctefsUAAAAAPoxInSZX4fbW7eQuXXtxfLDeHK5" });
  export default {
    components: {
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        rules: Rules,
        valid: true,
        disableSubmit: true,
        emailDetail: { email: "", message: "", summary: "", name: ""}
      }
    },
    computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'margin-top: 20%;"'
          case 'sm': return 'margin-top: 8%;"'
          case 'md': return 'margin-top: 120px;"'
          case 'lg': return 'margin-top: 135px;"'
          case 'xl': return 'margin-top: 300px;"'
        }
      },
    },
    methods: {
      validateAndSubmit() {
        if (this.$refs.form.validate()) {
          this.disableSubmit = true;
          this.$recaptcha("contactus").then(token => {
            console.log('CAPTCHA DONE')
            console.log(this.emailDetail)
            // this.parseContactInfo(this.emailDetail);
            // parse & store data. Method can be housed in Vuex store
            // show confirmation message

            router.push("/");
            // navigate to home page after processing  data
          });
        }
      }
    }
  }
</script>

<style scoped>
.back {
  background-color: white;
}
.mycontainer {
  margin:auto;
  width:80%;
}
.xsOnlyStyle {
  margin-bottom: -9%; 
  z-index:1;
}
.smAndDownStyle {
  margin-bottom: -5%; 
  z-index:1;
}
.mdAndUpStyle {
  margin-bottom: -3%;
}
.xlOnlyStyle {
  height: 50%;
}
.xsOnlyRowStyle {
  margin-bottom: 8%;
}
.smAndDownRowStyle {
  margin-bottom: 3%;
}
.mdAndUpRowStyle  {
  margin-bottom: 5%;
}
</style>
