
<template>
    <div class="container">
        <h3 id="head"> Login page </h3>
        <form>
            <label  id="name" for="username" style="font-size:20px;color:pink">Enter username:</label><br/><br/>
            <input  placeholder="Enter username" v-model="student.username" type="text"/><br/><br/>
            <label id="name" for="password" style="font-size:20px;color:pink">Enter password:</label><br/><br/>
            <input  placeholder="Enter password" v-model="student.password" type="text"/><br/><br/>
            <input  type="checkbox"/> Remember Me<br/><br/>
            <button class="btn" @click="verify" id="b1" type="button"> Login </button><br/>
        </form>
    </div>
</template>
<script src="./js/student.js">

</script>
<style scoped>
@import './student.css'
</style>

