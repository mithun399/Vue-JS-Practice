const app=Vue.createApp({
    data() {
        return {
            url:'https://github.com/mithun399',
            showbooks:true,
            // title:'Learn Vue ',
            // author:'Mithun',
            // age:'24',
            x:0,
            y:0,

            books:[
                {title: 'name of the wind',author:'Mithun',age:24 , img:'img/book.jpg'},
                {title: 'the way of king',author:'Sonia',age:22 , img:'img/book1.jpg'},
                {title: 'the final empire',author:'MS',age:23, img:'img/images.jpeg'},

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