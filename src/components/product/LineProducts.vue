<template>
    <v-img src="../../../public/web-combiomed-productos-noticias&eventos-04.png" style="z-index: 2;" >
        <v-col cols="12" style="margin-top:10%;">
            <v-row
                justify="center"
                style="color: grey;"
            >
                <v-col md="3">
                <hr>
                </v-col>
                <v-col md="2">
                <v-row justify="center">
                    <h3
                        class="text-uppercase"
                        style=" margin-top:-5%;margin-left: 16px;"
                    >
                        líneas de productos
                        <br>
                    </h3>
                </v-row>
                </v-col>
                <v-col md="3">
                <hr>
                </v-col>
            </v-row>
        </v-col>
        <v-container>
            <v-row
            justify="center"
            align="center"
            >
            <v-row
                justify="center"
                align="center"
                style="max-width: 80vw"
            >
                <v-col
                v-for="(item, i) in productsLine"
                :key="i"
                >
                <item-preview
                    :item="item.item"
                    :pathTo="item.pathTo"
                ></item-preview>
                </v-col>
            </v-row>
            </v-row>
        </v-container>
    </v-img>
</template>



<script>
    import ItemPreview from '@/components/core/ItemPreview'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            ItemPreview,
        },
        data () {
            return {
                baseUrl: process.env.BASE_URL,
                imagesClients: [
                    {
                        name:"Diagnóstico y Rehabilitacion Cardiovascular",
                        image:'productImages/product1.png',
                        // path: '/products/' 
                    },                        
                    {
                        image:'productImages/product2.png',
                        name: "Monitorización de Pacientes y Soporte de Vida"
                    },
                    {
                        image:'productImages/product5.png',
                        name: "Soluciones para la Atención Primaria de Salud"
                    },
                    {
                        image:'productImages/product3.png',
                        name: "Estimulación Eléctrica"
                    },
                    {
                        image:'productImages/product4.png',
                        name: "Diagnóstico de Enfermedades Respiratorias Crónicas"
                    }
                ],
            }
        },
        computed: {
            productsLine () {
                console.log('estoy en b')
                return this.imagesClients.map(x => this.buildItem(x))
            },
        },
        methods: {
            buildItem (product) {
                return {
                item: {
                    id: 0,
                    title: product.name,
                    description: '',
                    image: product.image,
                    owner: '',
                },
                pathTo: `/products/${product.id}`,
                }
            },
        },        
  }
</script>