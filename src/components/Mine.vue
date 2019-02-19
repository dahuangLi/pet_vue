<template>
  <div :style="{width:allObj.width,height:allObj.height}">
        <baidu-map class="map" center="上海">
          <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        </baidu-map>
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
      newWidth: {
        
      }
    };
  },
  methods: {
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
