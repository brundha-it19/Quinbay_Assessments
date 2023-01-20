<template>
    <div class="design">
        <div>
        <div id="header">
            <h3>{{ title }}</h3>                       
            <button id="but1"> shopping cart </button>
           <!--<button @click="api()"> mock api </button>-->
            <input type="text" placeholder="search here..!" class="search" v-model="searchquery" />     
            <button  type="button" id="search_button" class="search" @click="callApi">
         search
      </button>
        </div>
        <div>  
            <p class="para">{{filters}}</p>
            <p>{{ form }}</p> 
        </div>  
    </div>
    <div class="des" >
        <div class="form" >   
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
            <br/>
            <input type="text" placeholder="enter Price" v-model="dummy.price"/>
            <br/>
            <br/>
            <button @click="filter()" id="btn" Type="button">  Filter </button>
            <br/>
            <br/>
        </div>   
    <div class="grid">
        <productcard_component v-for="(y,index) in filt_table" :key="index" :product_val="y">
        </productcard_component>
    </div>
</div>
</div>

</template>

<script src="./js/head.js">
</script>

<style scoped >
 @import '/Users/brundha/Documents/vue/vue_day1/src/components/style.css';   
</style>



