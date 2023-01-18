export default{
    name:"student_detail",
    data()
    {
        return{      
            student:{
                username:"",
                password:""
            },
            student_detail:[  
                {username:"Brundha",password:12345},
                {username:"abinaya",password:12345},
                {username:"anu",password:12345}
            ] 
        }
    },
    methods:{
        verify()
        {           
             let xx=this.student_detail.find(x =>  
            this.student.username === x.username  &&
             this.student.password === x.password);
            if(xx)
            {                     
            alert("login successfull");}
            else{
            alert("login failed");}
                
            }
        }
    }




