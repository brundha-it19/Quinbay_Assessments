<template>
    <div>
        <h1> Cart Page </h1>
        <div  class="cart" v-for="(product,index) in get_data " :key="index">
            <p> {{ product.name}}</p>
            <p> {{ product.merchantName }}</p>
            <p> {{ product.brand}}</p>          
            <p> {{ product.itemcount}}</p>
            <p> {{ product.price.priceDisplay}}</p>      
            <p> {{ product.review.rating}}</p>
            <center><img :src="product.images[0]" width="200" height="200"/></center><br/> 
            <button class="inc" @click="increment(product)"> + </button><br/>
            <p> count : {{ product.count }} </p>     
            <!-- <input type="text" placeholder="quantity"/><br/> -->
            <button class="inc" @click="decrement(product)"> - </button><br/><br/>
            <button @click="remcart(product)" id="rem"> Remove from cart </button>
            <!-- <p> {{ totalPrice() }}</p> -->
            <!-- <p>{{ cart.brand }}</p>
            <p>{{ cart.price }}</p>
            <p>{{ cart.Storage }}</p>
            <p>{{ cart.ram }}</p> -->
        </div>
        <!-- <p>Sum is:</p> -->
        <!-- <button @click="totalPrice()"> price </button> -->
        <button id="order" @click="place()"> Place order </button>
    </div>
</template>
<script src="./js/cart.js">      
</script>
<style scoped>
@import '/Users/brundha/Documents/vue/router/src/components/cart.css'
</style>