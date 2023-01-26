import apiService from '/Users/brundha/Documents/vue/router/src/components/services/apiService.js'

export default                  
{        
        state:{
         pro_data: {}                            
        },
        mutations:{
         setProd(state,pro_data){         
           state.pro_data=pro_data;       
         },
        },       
       actions:{                              
         getProd:({commit},{success,fail})=>
         {                          
           apiService.getProducts({                                                              
            success: (detail)=>  
            {
             console.log(detail)  
             commit('setProd',detail.data.data.products) 
             success(detail.data.data.products)                            
            },
            failure: (error) => {  
              commit('setProd',[])    
              fail(error)
            }
           })
         }
       },
       getters:{      
         retrieve(state){
            console.log(state.pro_data)
            return state.pro_data
         }
       },
       namespaced: true         
}