import VueRouter from 'vue-router'
import product_info from './product_info.vue'
import student_detail from './student_detail.vue'
import product_description from './product_description.vue' 
import cart_component from './cart_component.vue'   
import place_order from './place_order.vue'

const routes=[  
        {
            path:'/home',
            name:"product_info",      
            component:product_info                
        },                          
        {           
            path:'/',        
            name:'student_detail',         
            component:student_detail              
        },
        {     
            path:'/des',
            name:'product_description',
            component:product_description                
        },
        {
            path: '/cart',
            name:'cart_component',
            component:cart_component
        },
        {
            path: '/placeorder',
            name:'place_order',
            component:place_order
        }
    ]     
const router=new VueRouter(
    {                            
        mode:"history",      
        routes
    }
) 
router.beforeEach((to,from,next) =>{
    console.log('Before each')
    console.log(to)
    console.log(from) 
    if(to.name=='product_info' && from.name!='student_detail') {
        alert("you are not authorized");
        return false
    }
    next()      
})                                       
router.beforeEach((to,from,next) =>{  
    console.log('Before each')
    console.log(to)
    console.log(from) 
    if(to.name=='product_description' && from.name!='product_info') {
        alert("you are not authorized");
        return false
    }
    next()
})
router.beforeEach((to,from,next) =>{  
    console.log('Before each')
    console.log(to)
    console.log(from) 
    if(to.name=='cart_component' && from.name!='product_info') {
        alert("you are not authorized");
        return false
    }
    next()
})
router.beforeEach((to,from,next) =>{  
    console.log('Before each')
    console.log(to)
    console.log(from) 
    if(to.name=='place_order' && from.name!='cart_component') {
        alert("you are not authorized");
        return false
    }
    next()
})


export default router;

