<template>
   <div class="div_news">
    <div class='container'>
		<div class='grid'>
			<div class='item-0'>
			<v-img src="../../../public/ampa- (1).png">
                <v-overlay :absolute="true" :value="true" :opacity="0.46" color="#001A33"  style="height:141px; left: 0px; top: 60px;">
                        <div>
                    <h3 class="text-uppercase">Lorem Ipsum</h3>
                    <h3>Scingelit, sed diam nonummy nibh euismod tincidunt ut laoree dolore magna ali....</h3>
                    <h3> 12.04.2020</h3>
                        </div>
                </v-overlay>	
            </v-img>		
			</div>
			<div class='item-1'>
				<img src="../../../public/ampa- (1).png">
			</div>
			<div class='item-2'>
				<img src="../../../public/ampa- (1).png">
			</div>
			<div class='item-3'>
				<img src="../../../public/ampa- (1).png">
			</div>
			<div class='item-4'>
				<img src="../../../public/ampa- (1).png">
			</div>
            <div class='item-5'>
				<img src="../../../public/ampa- (1).png">
			</div>
		</div>
		
	</div>
   </div>
</template>

<style scoped>

div_news{
	font-family: helvetica;
	font-size: 18px;
}

div img{
	width:100%;
	height:100%;
}

.container {
	margin:auto;
	width:80%;
}

.grid{
	display:grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 24px;
	grid-auto-rows:200px;
}

.grid div{	
	overflow:hidden;
}


</style>