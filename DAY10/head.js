import productcard_component from "/Users/brundha/Documents/vue/router/src/components/productcard_component.vue"
import axios from 'axios';
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
// import { PluginAPI } from "@vue/cli-service";
export default{         
    name: "product_info",      
    components:              
    {
        productcard_component         
    },                               
    data()                               
    { 
        return{  
            title:'Products List',
            filters:'Filter section',
            // searchResult : [],  
            filt_table: [    
                { 
                    mobilename:"Oppo f11 pro",  
                    brand:"oppo",
                    price:"23000",
                    ram:"8",
                    Storage:"64",
                    image:"http://reliabledukan.com/wp-content/uploads/2020/07/Oppo-F11-pro-matte-2.jpeg"
                },
                {
                    mobilename:"Vivo y16",
                    brand:"vivo",
                    price:"28000",
                    ram:"8",
                    Storage:"64",
                    image:"https://fdn2.mobgsm.com/vv/bigpic/oppo-f11-pro-.jpg"
                },
                {
                    mobilename:"samsung s20",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"128",
                    image:"https://m.media-amazon.com/images/I/71RxOftVoQL._SL1500_.jpg"
                },
                {
                    mobilename:"vivo y19",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"256",
                    image:"https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1572868801146/cc4fe54a5e9b44c5a1b28c44bb309ccc.png"
                },
                {
                    mobilename:"poco c5",
                    brand:"poco",
                    price:"21000",
                    ram:"6",
                    Storage:"32",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"samsung galaxy s21",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"64",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco M5",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"64",
                    image:"https://s3b.cashify.in/gpro/uploads/2021/12/06101415/poco-m5-front-2.jpg"
                    
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"32",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"Realme c33",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"128",
                    image:"https://cdn1.smartprix.com/rx-iIa55V4wF-w1200-h1200/Ia55V4wF.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"64",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"64",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"samsung galaxy s21",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"64",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                }
            ],
            
            Products:[
                { 
                    mobilename:"Oppo f11 pro",
                    brand:"oppo",
                    price:"23000",
                    ram:"8",
                    Storage:"64",
                    image:"http://reliabledukan.com/wp-content/uploads/2020/07/Oppo-F11-pro-matte-2.jpeg"
                },
                {
                    mobilename:"Vivo y16",
                    brand:"vivo",
                    price:"28000",
                    ram:"8",
                    Storage:"64",
                    image:"https://fdn2.mobgsm.com/vv/bigpic/oppo-f11-pro-.jpg"
                },
                {
                    mobilename:"samsung s20",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"128",
                    image:"https://m.media-amazon.com/images/I/71RxOftVoQL._SL1500_.jpg"
                },
                {
                    mobilename:"vivo y19",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"256",
                    image:"https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1572868801146/cc4fe54a5e9b44c5a1b28c44bb309ccc.png"
                },
                {
                    mobilename:"poco c5",
                    brand:"poco",
                    price:"21000",
                    ram:"6",
                    Storage:"32",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"samsung galaxy s21",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"64",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco M5",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"64",
                    image:"https://s3b.cashify.in/gpro/uploads/2021/12/06101415/poco-m5-front-2.jpg"
                },
                {
                    mobilename:"Realme c33",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"32",
                    image:"https://cdn1.smartprix.com/rx-iIa55V4wF-w1200-h1200/Ia55V4wF.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"128",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"64",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:"21000",
                    ram:"6",
                    Storage:"64",
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                }
            ],
            search_item: {
                brand: "", price: "", itemcount: "", merchantName: ""
            }, 
            search:" ",             
            props:{
                name:String
            },
            dummy:{mobilename:"",brand:"",ram:"",storage:"",price:""}        
        }
    },
    computed:
    {
        ...mapGetters('prostore',['retrieve']),
        ...mapGetters('userstore',['user'])   
    },
    mounted()           
    {
        this.getProd({                 
            success: this.onSuccessOfProduct,
            fail:this.onFailOfProduct
        }),
        this.Fetch_products();
    },
                                                    
    methods:{     
        ...mapActions('prostore',['getProd']),
        
        onSuccessOfProduct(data) {               
            this.filt_table= data;
        },
        filter()      
        {   
            this.filt_table=this.Products.filter(x =>  
                (this.dummy.mobilename ? x.mobilename == this.dummy.mobilename :true)  &&
                (this.dummy.brand ? x.brand == this.dummy.brand :true)  &&
                (this.dummy.ram ? x.ram ==this.dummy.ram :true)  &&
                (this.dummy.storage ? x.Storage==this.dummy.storage :true) &&
                (this.dummy.price ? x.price===this.dummy.price :true )) 
            console.log(this.filt_table)   
        },
    //     callApi(){        
    //         axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${this.search}&start=0&itemPerPage=24`)
    //         .then((res)=>{                                
    //                 console.log(res);                   
    //                 this.onSearchSuccess(res.data.data.products)         
    //         })                                 
    //         .catch((rej)=>{                            
    //             console.log(rej)
    //         })        
    // },                                   
    onSearchSuccess(data) {        
        this.filt_table = data;    
    },
   
        api()     
        {
                axios.put(`https://63c8ecef904f040a9652af79.mockapi.io/users/users/${4}`,{name:"Brundha"})
                .then(
                    (res) => {  
                    console.log("changed",res);
                    }       
                ).catch(    
                {                     
                    function()
                    {
                        console.log("not changed");
                    }
                }
                )    
        },  
        cart()
        {
            this.$router.push({name:"cart_component"})                     
        },
    //     watch:{
    //     retrieve (newValue) {
    //         console.log(newValue)
    //         this.fil_detail= newValue;
    //     }
    // }
    Fetch_products()
    {   
        this.getProd({      
            success:this.onSuccessOfProduct,
            fail:this.onFailOfProduct,
            data:this.search
        })
       console.log("search")  
    }
    

        // watch: {                                    
        //     search() {                                             
        //         this.filt_table = this.products.filter(product => (this.search ? product.brand === this.search : true))
        //         this.callApi();
        //     } 
                   
        // }
    }
}