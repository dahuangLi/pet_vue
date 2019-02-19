<template>
  <div class="container" :style="allObj">
      <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      msg: 'Hello Message!',
      allObj:{
          width:'',
          height:''
      }
    }
  },
  methods:{
  },
  beforeMount(){
      this.allObj.width = document.body.width;
      this.allObj.height = document.body.height;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color:rgba(228, 41, 135, 0.575);
}
.container{
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    background-color: #eee;
}
</style>
