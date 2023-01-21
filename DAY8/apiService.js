import axios from "axios"

export default
{
    getProducts({success, failure})
    {
        axios.get(`https://www.blibli.com/backend/search/products?searchTerm=dress&itemPerPage=24`)   
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