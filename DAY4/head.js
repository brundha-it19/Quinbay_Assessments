export default{
    data()
    {
        return{
            title:'Vue js application',
            filters:'Add mobiles',
            Brand:'Brand',
            form:{      
                Brandname:' ',
                RAM:' ',
                Storage:' ',
                price:' '
            },
            Products:[
                { 
                    mobilename:"Oppo f11 pro",
                    brand:"oppo",
                    price:23000,
                    ram:8,
                    image:"http://reliabledukan.com/wp-content/uploads/2020/07/Oppo-F11-pro-matte-2.jpeg"
                },
                {
                    mobilename:"Vivo y16",
                    brand:"vivo",
                    price:28000,
                    ram:8,
                    image:"https://fdn2.mobgsm.com/vv/bigpic/oppo-f11-pro-.jpg"
                },
                {
                    mobilename:"samsung s20",
                    brand:"samsung",
                    price:21000,
                    ram:6,
                    image:"https://m.media-amazon.com/images/I/71RxOftVoQL._SL1500_.jpg"
                },
                {
                    mobilename:"vivo y19",
                    brand:"samsung",
                    price:21000,
                    ram:6,
                    image:"https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1572868801146/cc4fe54a5e9b44c5a1b28c44bb309ccc.png"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:21000,
                    ram:6,
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:21000,
                    ram:6,
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:21000,
                    ram:6,
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:21000,
                    ram:6,
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:21000,
                    ram:6,
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:21000,
                    ram:6,
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                },
                {
                    mobilename:"poco c5",
                    brand:"samsung",
                    price:21000,
                    ram:6,
                    image:"https://fdn.gsmarena.com/imgroot/news/22/11/poco-c50-india-launch-november/inline/-1200x900m/gsmarena_001.jpg"
                }
            ]
        }
    },
    methods:{
        addmob()
        {
            console.warn(this.form)
        }
    }
}