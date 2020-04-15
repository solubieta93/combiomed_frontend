<template>
    <v-container 
        fluid 
        class="white_back"
    >
        <div id="mycontainer" :style="margin_style">
            <v-col
                md="12"
                sm="12"
                lg="12"
                xl="12"
                xs="12"
            >
                <v-row
                    justify="center"
                    style="height: 50px; color:#818080;"
                >
                    <v-col md="3">
                        <hr style="color:#818080;">
                    </v-col>
                    <v-col md="2">
                        <v-row justify="center">
                            <h4
                                class="text-uppercase" 
                                style="margin-top: -14px; color:#818080;" 
                                @mouseover="mouse_over_contact" 
                                @click="click_contact"
                            >
                                contactos
                                <br>
                            </h4>
                        </v-row>
                    </v-col>
                    <v-col md="3">
                        <hr style="color:#818080;">
                    </v-col>
                </v-row>
            </v-col>

            <div id="contacts"> 
                <v-row justify="center">
                    <v-col 
                        md="6"
                        sm="12"
                        lg="4"
                        xl="4"
                        xs="12"
                    >
                    <div class="contactos">
                        <img src="../../../public/CONTACTOS/raider (4)a.png" alt="" width="250" height="260" id="p1">
                        <h4>Ing. Raider Figueras Texidor </h4>
                        <h4>JEFE DE AUTOMÁTICA</h4>
                        <h5><i class="fi-mail large"></i>  raider@icid.cu</h5>
                    </div>
                    </v-col>  
                    <v-col 
                        md="6"
                        sm="12"
                        lg="4"
                        xl="4"
                        xs="12"
                        justify="center"
                    >
                        <div class="contactos">
                            <img src="../../../public/CONTACTOS/norka (11).png" alt="" width="250" height="260" id="p2">
                            <h4>Ing. Norka Gonzáles </h4>
                            <h4>DIRECTORA COMERCIAL</h4>
                            <h5><i class="fi-mail large"></i>  nglopez@icid.cu</h5>
                        </div>
                    </v-col>
                    <v-col 
                        md="12"
                        sm="12"
                        lg="4"
                        xl="4"
                        xs="12"
                        justify="center"
                    >
                        <div class="contactos">
                            <img src="../../../public/CONTACTOS/abdel (2).png" alt="" width="280" height="260" id="p3">
                            <h4>Ing. Abdel Rodriguez Hernández </h4>
                            <h4>JEFE DE SERVICIO TÉCNICO</h4>
                            <h5><i class="fi-mail large"></i>  arodriguez@icid.cu</h5>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    props: {
        margin_style:{
            type: String,
            default: 'margin-top: -13%; margin-bottom: 1%;'
        }
    },
    data () {
      return {
            style_d:"height: 50px;",
	        show:false
      }
    }, 
    methods:{
        my:function(){
            var button = document.getElementById("contacts");
            if(this.show==false){
            this.show=true;
            button.className = "show";  
            }   
            else{
            button.className = "shownull";
            this.show=false;
            }
        }  ,
        mouse_over_contact:function(){
            this.style_d="height: 490px;"
            var button = document.getElementById("contacts");
            button.className = "show";  
            } , 
        click_contact:function () {
            this.style_d="height: 50px;"
            var button = document.getElementById("contacts");
            button.className = "shownull";
        } 
    },
}
</script>
<style scoped>
.white_back {
  background-color: white !important;
}
.mycontainer {
	margin:auto;
    margin-bottom: 10%;
	width:60%;
}
body {
    background-repeat: no-repeat;
    background-position-y: -25px;
    background-position-x: -50px;
    background-color: bisque;
}
#contacts {
    /* margin-top: 50px; */
    display: flex;

    text-align: center;
    justify-content: center;
    align-content: center;

    /* opacity: 0; */
    overflow: hidden;
    /* height: 400; */
}

.contactos {
    flex-basis: 22%;
}

#container, 
#p1,
#p2,
#p3 {
    border-radius: 155px;
}

i.small  { font-size: 0.8rem; }
i.medium  { font-size: 1rem; }
i.large  { font-size: 1.2rem; }

.show {
animation:acordeon 2s;
animation-fill-mode:forwards;
overflow: none;       
}

@keyframes acordeon {
0% {
    height:0;
    opacity: 0;
}

100% {
    height:400px;
    opacity: 1;
}
}

</style>