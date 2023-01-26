import service from '../../services/service.js'

export default                  
{        
        state:{
         pro_desc_data: {}                            
        },
        mutations:{
         setProd(state,pro_desc_data){         
           state.pro_desc_data=pro_desc_data;       
         },
        },       
       actions:{       
        getProducts:({commit},{success,fail,proid})=>          
         {   
          console.log(proid)                             
           service.getProducts({                                                              
            success: (detail)=>  
            {
             console.log(detail)  
             commit('setProd',detail)
             success(detail)     
            },
            failure: (error) => {  
              commit('setProd',[])    
              fail(error)       
            },
            proid
           })
         }
       },
       getters:{      
        //  retrieve(state){
        //     console.log(state.pro_desc_data)
        //     return state.pro_desc_data
        //  
        get_data(state)   
        {
           console.log(state.pro_desc_data)
            return state.pro_desc_data;
        }
      },
        namespaced: true         
       }
      