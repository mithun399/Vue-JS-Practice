<template>
 <h1> {{title}}</h1>

 <!-- <input type="text" ref="name">
 <button @click="handleClick">Ckick Me</button> -->
 <Modal />
</template>

<script>
import Modal from './components/Modal.vue'



export default{
  name: 'App',
  components: { Modal },
  data(){
    return{
    title: 'My First Vue Cli App :)'
    }
  },
//   methods: {
//     handleClick(){
//     console.log(this.$refs.name)
//     this.$refs.name.classList.add('active')
//     this.$refs.name.focus()
//   }
// }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  display: inline-block;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
  
</style>
