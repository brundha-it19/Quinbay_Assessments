<template>
    <div>
        <form>
            <label for="username">Enter username:</label><br/>
            <input v-model="student.username" type="text"/><br/>
            <label for="password">Enter password:</label><br/>
            <input v-model="student.password" type="text"/><br/>
            <input type="checkbox"/> Remember Me<br><br><br/>
            <button @click="verify" id="b1" type="button"> Login </button><br/>
        </form>
    </div>
</template>
<script src="./js/student.js">

</script>

