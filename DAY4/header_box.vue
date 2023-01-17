<template>
    <div>
        <header>
            <h3>{{ title }}</h3>
        </header>
        <div>
            <p>{{filters}}</p>
            <p>{{ form }}</p> 
        </div>
        <grid>
        <div class="card">
            <br/>
            <label> Brandname :</label>
            <input type="text" placeholder="enter brand name" v-model="form.Brandname"/>
            <br/>
            <br/>
            <label> RAM Size :</label>
            <input type="text" placeholder="enter RAM" v-model="form.RAM"/>
            <br/>
            <br/>
            <label> Storage :</label>
            <input type="text" placeholder="enter Storage" v-model="form.Storage"/>
            <br/>
            <br/>
            <label> Price :</label>
            <input type="text" placeholder="enter Price" v-model="form.price"/>
            <br/>
            <br/>
            <button @click="addmob" class="btn" Type="button">  Add mobile </button>
            <br/>
            <br/>
        </div>
        <div class="card" v-for="(product,index) in Products" :key="index">
            <p>{{ product.mobilename }}</p>
            <p>{{ product.brand }}</p>
            <p>{{ product.price }}</p>
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

<style scoped>
    header{
        background-color:aqua;
        padding: 20px;
        width:1400px;
        height: 50px;
        text-align:center;
        color:black;
        border:5px solid black;
    } 
    
    form{
        width:150px;
        color:black;
        text-align: center;
        background-color:aqua;

    }
    .btn{
        background-color:salmon;
    }   
    .card{
        display:grid;
        border: 3px solid black;
        background-color:aqua;
        border-radius:20px;
        
    }
    
     grid{
        grid-template-columns: auto auto auto auto auto auto;
        display: grid;
        row-gap:5px;
        column-gap:20px;
        margin-left:20px;
        height:500px;
        
     }    
</style>
