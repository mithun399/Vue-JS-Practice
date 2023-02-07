const app=Vue.createApp({
    data() {
        return {
            showbooks:true,
            title:'Learn Vue ',
            author:'Mithun',
            age:'24'
        }
    },
    methods: {
        changeTitle(title){
            // this.title='Something Else'
            this.title=title
            
        },
      
        toggleShow(){
            this.showbooks=! this.showbooks;
        }
    },

})
app.mount('#app')