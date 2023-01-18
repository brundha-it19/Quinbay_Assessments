<template>
    <div class="container">
        <div >   
            <img  class="des" src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" width="130px" height="100px;"> 
        <form id="form">
            <br>        
            <label style="font-family
            :monospace;font-size: 50px;">LOGIN PAGE</label><br><br>
            <label for="email" style="font-size: 20px;color:cadetblue"><b>USERNAME </b></label><br>
            <input v-model="email" type="text" id="input"/><br><br>
            <label for="password" style="font-size: 20px;color:cadetblue"><b>PASSWORD</b> </label><br>
            <input v-model="password" type="password" id="input"/><br><br>
            <input type="checkbox"/> Remember Me<br><br>
            <button  @click="verify" id="b1" type="button" >Login</button>
        </form>
        </div>
    </div>   
    </template>
    
    
    <script src="./js/login.js">
    
    </script>

    <style scoped>
    .des
    {
        margin-top: 30px;
    }
    
    .container
    {
        border: 3px solid pink;
        margin-top: 30px;
        height: 630px;
        border-radius: 20px;
        width: 500px;
        margin-left: 500px;
        box-shadow: 30px;
    }
    label{
        font-family: fantasy;
    }
    #input{
        border: 3px solid black;
        border-radius: 10px;
        margin-top: 30px;
        height: 40px;
        width:300px;
    }
    #b1
    {
        /* border: 3px solid black;
        padding: 12px 30px 12px 30px;
        border-radius: 5px;
        color: light green; */
        display: inline-block;
        outline: 0;
        border: 0;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        cursor: pointer;
        background-image: linear-gradient(to right,#e052a0,#f15c41)!important;
        border-radius: 3px;
        padding: 16px 18px 15px;
        white-space: nowrap;
    }
    #b1:hover
    {
       /* color:tan;
       background-color:darkgoldenrod; */
       background-color: #e6375a;
        background-image: none!important;
    }
    #form{
        
    }
    </style>