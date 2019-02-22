<template>
  <div :style="{width:allObj.width,height:allObj.height}">
      <div id="allmap" class="map"></div>
      <div class="p_right" @click="subPet">
          <span class="subText">发布</span>
      </div>
      <el-dialog
        title="选择城市"
        :visible.sync="dialogVisible"
        width="80%"
        >
        <div class="row_city">
          <div class="cityItem" @click="changePoint(item.lat,item.lon,index,city)" v-for="(item,index) in cityArr" :key='index' >{{item.city}}</div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="closeDialog">确 定</el-button>
        </span>
      </el-dialog>
      <div class="city" @click="dialogVisible = true">{{city}}</div>
  </div>
</template>
<script>

const cityArr = [
  {city: '北京', lat: '116.395645038', lon: '39.9299857781'},
  {city: '上海', lat: '121.487899486', lon: '31.24916171'},
  {city: '深圳', lat: '114.025973657', lon: '22.5460535462'},
  {city: '广州', lat: '113.307649675', lon: '23.1200491021'},
  {city: '成都', lat: '104.067923463', lon: '30.6799428454'},
  {city: '杭州', lat: '120.219375416', lon: '30.2592444615'},
  {city: '重庆', lat: '106.530635013', lon: '29.5446061089'},
  {city: '武汉', lat: '114.316200103', lon: '30.5810841269'},
  {city: '苏州', lat: '120.619907115', lon: '31.317987368'},
  {city: '西安', lat: '108.953098279', lon: '34.2777998978'},
  {city: '天津', lat: '117.210813092', lon: '39.1439299033'},
  {city: '南京', lat: '118.778074408', lon: '32.0572355018'},
  {city: '郑州', lat: '113.64964385', lon: '34.7566100641'},
  {city: '长沙', lat: '112.979352788', lon: '28.2134782309'},
  {city: '沈阳', lat: '123.432790922', lon: '41.8086447835'},
  {city: '青岛', lat: '120.384428184', lon: '36.1052149013'},
  {city: '宁波', lat: '121.579005973', lon: '29.8852589659'},
  {city: '东莞', lat: '113.763433991', lon: '23.0430238154'},
  {city: '无锡', lat: '120.305455901', lon: '31.5700374519'},
  {city: '厦门', lat: '118.140129', lon: '24.499614'}
];

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
      dialogVisible: false,
      city: '北京',
      lat: 116.331398,
      lon: 39.897445,
      cityArr: cityArr
    };
  },
  methods: {
    subPet: function(){
      this.$router.push('/Message');
    },
    changePoint: function(lat, lon, index, city){
      this.lat = lat;
      this.lon = lon;
      this.city = city;
    },
    openCity: function(){
      this.dialogVisible = true;
    },
    closeDialog: function(){
      this.initMap(false);
      this.dialogVisible = false;
    },
    initMap: function(selfPoint = true){
      const self = this;
      var map = new BMap.Map('allmap');
      var point = new BMap.Point(self.lat, self.lon);
      map.centerAndZoom(point, 12);
      map.addControl(new BMap.GeolocationControl());    
      map.addControl(new BMap.NavigationControl());
      map.setCurrentCity(self.city);
      var marker = new BMap.Marker(point); // 创建标注    
      map.addOverlay(marker); // 添加标注到地图

      // 页面初次加载调用获取自身定位
      if (selfPoint){
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          if (this.getStatus() == 0){
            self.city = r.address.city;
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            self.city = r.address.city;
          }
          else {
            alert('failed' + this.getStatus());
          }        
        });
      }
    }
  },
  beforeMount(){
    this.allObj.width = document.documentElement.clientWidth + 'px';
    this.allObj.height = document.documentElement.clientHeight + 'px';
  },
  mounted() {
    this.initMap();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cityItem{
  width: 25%;
}
.row_city{
  width:100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
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
.city{
  position: absolute;
  top:30px;
  left: 30px;
  color:violet;
  font-weight: 600
}
</style>
