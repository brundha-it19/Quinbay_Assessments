import axios from "axios"

export default
{
    getProducts({success, failure,proid})     
    {
        axios.get(`https://www.blibli.com/backend/product-detail/products/ps--${proid}/_summary`)   
        .then(
            (data)=>           
            {      
                success(data)                                               
            }      
        )
        .catch((error) => {
            failure(error)
        }                
            )
    }   
}