import { mapActions, mapGetters } from "vuex"
// import product_description from "./product_description";

export default{
    name: "cart_component",
    data()
    {
        return{
            // count:0
        }
    },
    computed:{
        ...mapGetters('cart_store',['get_data']),
        // totalPrice() {  
        //     let total = 0; 
        //      for(let p of this.state.get_data) {   
        //          total += (p.price * p.count); 
        //          }  
        //          return total;
        //         }
    },
    methods:{             
        ...mapActions('cart_store',['REMOVE_FROM_CART']),  
        ...mapActions('cart_store',['INCREMENT']),
        ...mapActions('cart_store',['DECREMENT']),
        remcart(product)                           
        {                       
            // this.$store.commit('remove_from_cart',this.product)     
            const arr=this.get_data;
            const index=arr.findIndex(obj => {
                return obj.name == product.name});     
                this.REMOVE_FROM_CART(index);
        },                                                                            
        place()
        {                   
            this.$router.push({name:"place_order"})             
        },
        increment(product)  
        {
            // const arr=this.get_data;
            // arr.findIndex(obj => {      
            //     return obj.name == product.name}); 
            //  this.count++;
           this.INCREMENT(product);
        },                                        
        decrement(product) {
            // const arr=this.get_data;
            // arr.findIndex(obj => {      
            //     return obj.name == product.name});       
            //  this.count--;   
            this.DECREMENT(product);   
        },
    //     cartTotalAmount() {
    //         this.GET_TOTAL();   
    // }
}
}