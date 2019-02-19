<template>
  <div :style="{width:allObj.width,height:allObj.height}">
      <baidu-map class="map" center="上海">
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      </baidu-map>
      <div class="p_right" @click="subPet">
          <span class="subText">发布</span>
      </div>
  </div>
</template>
<script>

export default {
  name: 'Mine',
  data () {
    return {
      msg: 'Hello Mine!',
      allObj: {
        width: 0,
        height: 0
      },
      value1: '',
      newWidth: {
        
      }
    };
  },
  methods: {
    subPet: function(){
      this.$router.push('/Message');
    }
  },
  mounted(){
  },
  beforeMount(){
    this.allObj.width = document.documentElement.clientWidth + 'px';
    this.allObj.height = document.documentElement.clientHeight + 'px';
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subText{
  font-size: 15px;
  font-weight: 500;
}
.p_right{
  width: 50px;
  height: 50px;
  background-color: aqua;
  position: absolute;
  top:100px;
  right: 30px;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
}
h1{
  color:rgba(228, 41, 135, 0.575);
}
.container{
    width:100%;
    height: 100%;
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    background-color: #eee;
}
.map{
  width: 100%;
  height: 100%;
}
</style>
