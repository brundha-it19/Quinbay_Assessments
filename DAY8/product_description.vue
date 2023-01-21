<template>
    <div>
        <h1> Product Description Page </h1>    
        <div class="description">
        <h1>{{val().name }}</h1>
        <p>{{val().brand}}</p>   
        <p>{{val().price.priceDisplay}}</p>
        <p>{{val().merchantName }}</p>
        <p>{{val().itemcount }}</p>
       
        <p><img :src="val().images[0]" width="200" height="200"/></p>
    </div>
    </div>
</template>
<script src="/Users/brundha/Documents/vue/router/src/components/js/product_description.js"> 
</script>  
<style scoped>
@import '/Users/brundha/Documents/vue/router/src/components/productdescription.css'
</style>




