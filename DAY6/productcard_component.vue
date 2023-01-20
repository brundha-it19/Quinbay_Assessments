<template>
    <div>
    <div class="card" @click="des()">
            <p>{{ product_val.mobilename }}</p><br/>
            <p>{{ product_val.brand }}</p><br/>
            <p>{{ product_val.price.priceDisplay }}</p><br/>
            <p>{{ product_val.itemcount }}</p><br/>
            <p>{{ product_val.merchantName }}</p><br/>
            <center><img :src="product_val.images[0]" width="200" height="200"/></center><br/>
            <button class="btn"> Add to cart </button>             
            <br/>
            <br/>
    </div>
    </div>
</template>
<script src="./js/productcardcomponent.js">
</script>

<style scoped>
@import './productcardcomponent.css'
</style>