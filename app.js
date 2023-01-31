const app=Vue.createApp({
   
    data(){
        return{
            name:'Mithun',
            email:'ms@gmail.com',
            gender:'male',
            picture:'img.jpg'
        }
    },
    methods: {
       async getUser(){
        const res=await fetch('https://randomuser.me/api')
        const {results} = await res.json()
        console.log(res)

            this.name=results[0].name.first;
            this.name=results[0].name.last;

            this.email=results[0].email;
            this.gender=results[0].gender;
            this.picture=results[0].picture.large
        }
    },
})
app.mount('#app')