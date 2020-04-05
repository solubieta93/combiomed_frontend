<template>
    
        <v-img src="../../../public/ampa- (1).png">
            <v-overlay :absolute="true" :value="true" :opacity="0.46" color="#001A33"  style="height:141px; left: 0px; top: 60px;">
                    <div>
                <h3 class="text-uppercase">{{post.title}}</h3>
                <h3>{{post.abstract}}</h3>
                <h3>Autor: {{post.owner}}</h3>
                    </div>
            </v-overlay>	
        </v-img>
   
</template>

<script>
export default {
    props: {
        post: {
            id: Number,
            title: String,
            owner: String,
            context: String,
            image: null,
            news: Boolean,
            default: null,
      },
    }
}
</script>
