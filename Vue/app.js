const app=Vue.createApp({
    data() {
        return {
            showbooks:true,
            // title:'Learn Vue ',
            // author:'Mithun',
            // age:'24',
            x:0,
            y:0,

            books:[
                {title: 'name of the wind',author:'Mithun',age:24},
                {title: 'the way of king',author:'Sonia',age:22},
                {title: 'the final empire',author:'MS',age:23},

            ]
        }
    },
    methods: {
        changeTitle(title){
            // this.title='Something Else'
            this.title=title
            
        },
      
        toggleShow(){
            this.showbooks=! this.showbooks;
        },
        handleEvent(e,data){
            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouse(e){
            this.x=e.offsetX
            this.y=e.offsetY
        }
    },

})
app.mount('#app')