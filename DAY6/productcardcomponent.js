export default
{
    name: "productcard_component",
    data()
    {
        return{

        }
    },
    methods:{         
        des()
        {                    
            this.$router.push({name:"product_description",query:{val:this.product_val}})
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




