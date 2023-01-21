import { mapGetters } from "vuex"

export default{
    name: "cart_component",
    data()
    {
        return{
            
        }
    },
    computed:{
        ...mapGetters('cart_store',['get_data'])
    },
    methods:{
        remcart()
        {
            
        },
        place()
        {
            this.$router.push({name:"place_order"})    
        }
    }
}