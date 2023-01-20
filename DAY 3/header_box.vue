<template>
    <div>
        <div id="header">
            <h3>{{ title }}</h3>
            <button id="but1"> shopping cart </button>
        </div>
        <div>  
            <p class="para">{{filters}}</p>
            <p>{{ form }}</p> 
        </div>
        <grid>
        <div class="card">   
            <br/>
            <label> Mobilename :</label>
            <input type="text" placeholder="enter brand name" v-model="dummy.mobilename"/>
            <br/> 
            <br/>
            <label> Brandname :</label>
            <input type="text" placeholder="enter brand name" v-model="dummy.brand"/>
            <br/>
            <br/>
            <label> RAM Size :</label>
            <input type="text" placeholder="enter RAM" v-model="dummy.ram"/>
            <br/>
            <br/>
            <label> Storage :</label>
            <input type="text" placeholder="enter Storage" v-model="dummy.storage"/>
            <br/>
            <br/>
            <label> Price :</label>
            <input type="text" placeholder="enter Price" v-model="dummy.price"/>
            <br/>
            <br/>
            <button  @click="filter()" class="btn" Type="button">  Filter </button>
            <br/>
            <br/>
        </div>

        <div class="card" v-for="(product,index) in filt_table" :key="index">
            <p>{{ product.mobilename }}</p>
            <p>{{ product.brand }}</p>
            <p>{{ product.price }}</p>
            <p>{{ product.Storage }}</p>
            <p>{{ product.ram }}</p>
            <center><img :src="product.image" width="200" height="200"/></center>
            <br/>
            <button class="btn"> Add to cart </button>
            <br/>

        </div>
    </grid>
        </div>

</template>

<script src="./js/head.js">
</script>

<style scoped >
 @import '/Users/brundha/Documents/vue/vue_day1/src/components/style.css';   
   
</style>
