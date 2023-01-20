<template>
    <div>
        <h1> product description </h1>
        <h1>{{val().brand}}</h1>
        <p>{{val().price.priceDisplay}}</p>
        <p>{{ val().merchantName }}</p>
        <p>{{ val().itemcount }}</p>
        <p><img :src="val().images[0]" width="200" height="200"/></p>
    </div>
</template>
<script src="/Users/brundha/Documents/vue/router/src/components/js/product_description.js"> 
</script>  




