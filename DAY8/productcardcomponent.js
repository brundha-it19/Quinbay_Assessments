import { mapActions } from "vuex"

export default
{
    name: "productcard_component",
    data()
    {
        return{
            
        }
    },
    methods:{   
        ...mapActions('cart_store',['ADD_TO_CART']), 
        
        des()
        {                    
            this.$router.push({name:"product_description",query:{val:this.product_val}})
        },                                              
        addtocart()
        { 
            this.ADD_TO_CART(this.product_val)
        }                       
    },      
    props:
    {                             
        product_val : {
            type: Object,
            default: {}      
        }
    }         
                                                
}




