<template>
    <div>
       <div class="card">
            <h4>{{ product_val?.name }}</h4>
            <hr/>
            <p>{{ product_val?.brand }}</p><br/>
            <p>{{ product_val?.price?.priceDisplay }}</p><br/>
            <p>{{ product_val?.itemcount }}</p><br/>
            <p>{{ product_val?.merchantName }}</p><br/>
            <p>{{ product_val?.review?.rating }}</p>
             <center><img :src="product_val?.images[0]" width="200" height="200"/></center><br/> 
            <button @click="addtocart()" class="btn"> Add to cart </button>
            <br/>
            <br/>  
            <button @click="des()" class="button">Show Description</button>           
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