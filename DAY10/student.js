
export default{
    name:"student_detail",
    data()           
    {
        return{     
            name:"LOGIN PAGE",     
            student:{
                username:"",                     
                password:""
            },
            student_detail:[  
                {username:"Brundha",password:"12345"},
                {username:"abinaya",password:"12345"},
                {username:"anu",password:"12345"},
                {username:"admin",password:"admin"}
            ] 
        }
    },
    methods:{
        verify()     
        {           
             let val=this.student_detail.find(x =>  
            this.student.username === x.username  &&
             this.student.password === x.password);
            if(val)   
            {                     
            alert("login successfull");
            this.$router.push({name:"product_info"});
            }
            else{    
            alert("login failed");}      
            }
        }
    }




