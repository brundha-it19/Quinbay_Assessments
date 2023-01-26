import { mapActions, mapGetters } from "vuex"

export default
{
    name: "productcard_component",
    data()
    {
        return{
            
        }
    },
    computed:{
        ...mapGetters('product_description',['getProducts']),
    },
    methods:{   
        ...mapActions('cart_store',['ADD_TO_CART']), 
        des()
        {                    
            this.$router.push({name:"product_description",query:{val:this.product_val.id}})
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




