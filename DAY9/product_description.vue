<template>
    <div>
        <h1> Product Description Page </h1>    
        <div class="description">
        <h1>{{get_data.data.data.name }}</h1>
        <p>{{get_data.data.data.brand.name }}</p>
        <p>{{get_data.data.data.brand.code }}</p>
        <p>{{get_data.data.data.price.offered }}</p>
        <p>{{get_data.data.data.merchant.name }}</p>
        <p>{{get_data.data.data.masterCategories[0].name}}</p>
        <p>{{get_data.data.data.fulfillmentTypes.Delivery}}</p>
        <p>{{get_data.data.data.merchant.location }}</p>
        <p><img :src="get_data.data.data.images[0].full" width="200" height="200"/></p>

        <!-- <p>{{get_data.data.data.images[0].full}}</p> -->
        <!-- <p>{{val().brand}}</p>   
        <p>{{val().price.priceDisplay}}</p>
        <p>{{val().merchantName }}</p>
        <p>{{val().itemcount }}</p>
        <p><img :src="val().images[0]" width="200" height="200"/></p>
    </div>
    <div>
        <p>{{ get_data?.name }}</p> -->
    </div>
    </div>
</template>
<script src="/Users/brundha/Documents/vue/router/src/components/js/product_description.js"> 
</script>  
<style scoped>
@import '/Users/brundha/Documents/vue/router/src/components/productdescription.css'
</style>




