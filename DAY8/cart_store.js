export default                  
{        
        state:{
            cart_data: []                         
        },
        mutations:{
            add_to_cart(state,product){
                state.cart_data.push(product);
            }
        },
        actions:{
            ADD_TO_CART({commit},product)
            {
                commit('add_to_cart',product)
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