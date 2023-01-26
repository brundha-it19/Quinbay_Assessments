export default                  
{        
        state:{  
            cart_data: [],  
        },
        mutations:{
            add_to_cart(state,item){    
                // const cart_data =[{...product,count:1}];    
                state.cart_data.push(item);         
            },                                              
            remove_from_cart(state,product){      
                // let index=state.cart_data.indexof(product)
                state.cart_data.splice(product,1);       
            },          
            increment(state,item)                         
            {
                // const cart_data = {...product,count:1}
                    let index = state.cart_data.findIndex(i => i.name == item.name);
                    state.cart_data[index].count = state.cart_data[index].count + item.count  
            },
            decrement(state,item)    
            {      
                // let prod = state.cart_data.filter(i => i.name === item.name)
                // console.log('prod', prod);
                // let index = state.cart_data.findIndex(it => it.id === prod[0].id)
                // console.log('index', index);
                    let index = state.cart_data.findIndex(i => i.name == item.name);
                    state.cart_data[index].count = state.cart_data[index].count - item.count
                    
                    if(state.cart_data[index].count <= 0)
                    {
                        state.cart_data.splice(index,1); 
                    }
            }
        },   
        actions:{
            ADD_TO_CART({commit},product)        
            {
                const item={...product,count:1}
                commit('add_to_cart',item)
            },
            REMOVE_FROM_CART({commit},product)
            {
                commit('remove_from_cart',product)
            },
            INCREMENT({commit},product)
            {
                const item={...product,count:1}
                commit('increment',item)
            },
            DECREMENT({commit},product)
            {
                const item={...product,count:1}
                commit('decrement',item)
            }
        },
        getters:{
            get_data(state)   
            {
                return state.cart_data;
            }
        },
        namespaced: true       
    }