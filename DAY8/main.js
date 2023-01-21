import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './components/router';
import Vuex from 'vuex';
import userstore from '/Users/brundha/Documents/vue/router/src/components/js/store/userstore.js'
import prostore from '/Users/brundha/Documents/vue/router/src/components/js/store/prostore.js'
import cart_store from '/Users/brundha/Documents/vue/router/src/components/js/store/cart_store.js';
import {Store} from 'vuex'



Vue.use(VueRouter)  
Vue.use(Vuex)
Vue.config.productionTip=false   


const store=new Store({
    modules:
    {
        userstore,prostore,cart_store
    }
})

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')     

