export default
{
        state:{
         user: {}
        },
        mutations:{
         setUser(state,user){
           state.user=user;
         }
        },
       actions:{
         getUser:({commit},user)=>
         {
           commit('setUser',user)
         },
         log_out:({commit})=>{
           commit('logOut')
         }
       },
       getters:{
         user(state){
           return state.user
         }
       },
       namespaced:true
     
}