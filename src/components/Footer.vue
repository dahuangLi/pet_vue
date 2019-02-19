<template>
  <footer class="footer">
      <div class="footerItem" 
        v-for="(item,index) in bottomTabs" 
        :key="index"
        :style="distanceObj"
        @click="imgTab(index)"
        >
        <img v-if="imgNum==index" class="footerImg" :src="activeBottomImgArr[index]" alt="图片">
        <img v-else class="footerImg" :src="bottomImgArr[index]" alt="图片">
        <span class="bottomText">{{item}}</span>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'bottomView',
  data () {
    return {
      bottomTabs: ['首页', '消息', '我的'],
      imgNum: 0,
      bottomImgArr: [require('../assets/homePage/home2.png'),
        require('../assets/homePage/message2.png'),
        require('../assets/homePage/mine.png')],
      activeBottomImgArr: [require('../assets/homePage/home3.png'),
        require('../assets/homePage/message.png'),
        require('../assets/homePage/mine2.png')],
      routerArr: ['/', '/Message', '/Mine'],
      distanceObj: {
        marginLeft: '',
        marginRight: ''
      }
    };
  },
  methods: {
    imgTab(index){
      this.imgNum = index;
      this.$router.push(this.routerArr[index]);
    }
  },
  beforeMount(){
    const leftWidth = document.body.clientWidth - this.bottomTabs.length * 30;
    this.distanceObj.marginLeft = leftWidth / ((this.bottomTabs.length) * 2) + 'px';
    this.distanceObj.marginRight = leftWidth / ((this.bottomTabs.length) * 2) + 'px';
  }
};
</script>

<style>
.bottomText{
  font-size: 12px;
}
.footer .footerImg{
  width: 25px;
  height: 25px;
}
.footerItem{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer{
  position: absolute;
  left:0;
  bottom: 0;
  display: flex;
  flex: 1;
  height: 55px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-top: 1px solid #e5e5e9;
  margin-top: 10px;
}
</style>
