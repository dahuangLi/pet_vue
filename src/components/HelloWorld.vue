<template>
  <div class="container">
    <header class="header">
      <div v-for="(item,index) in tabs" 
           :key="index" 
           :class="index==num?'opacityBackground':'headerButton'"
           @click="tab(index)"
      >
        <span class="headerText">{{item}}</span>
      </div>
      <div class="add"><span class="spanAdd">+</span></div>
    </header>
    <nav class="nav">
      <div class="afterSale">
        <span class="afterSaleText">售后部</span>
        <img class="afterImg" :src="setImg" alt="图片">
      </div>
      <div class="shop">
        <div class="shopItem"
          v-for="(item,index) in shops"
          :key="index"
        >
          <span>{{item.number}}</span>
          <span>{{item.text}}</span>
        </div>
      </div>
    </nav>
    <section class="middle">
      <div class="personal">
        <span class="newCar">新车销售部个人任务</span>
        <img class="personalImg" :src="personalImg" alt="图片">
      </div>
      <swiper :options="swiperOption">
        <swiper-slide>
            <div class="circle" style="width:345px;">
              <div class="circleItem" 
                v-for="(item,index) in  circleArr"
                :key="index"
              >
                  <circle-progress
                    :id="index"
                    :width="58"
                    :radius="7"
                    :progress="item.rate"
                    :delay="200"
                    :duration="1000"
                    :barColor="'#4189ff'"
                    :backgroundColor="'#f3fafd'"
                    :isAnimation="true"
                    :timeFunction="'cubic-bezier(0.99, 0.01, 0.22, 0.94)'"
                  />
                  <span class="circleText">{{item.text}}</span>
                  <div class="inside">
                        <span>{{item.leftText}}/{{item.rightText}}</span>
                    </div>
              </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="circle" style="width:345px;">
              <div class="circleItem" 
                v-for="(item,index) in  circleArr"
                :key="index"
              >
                  <circle-progress
                    :id="index"
                    :width="58"
                    :radius="7"
                    :progress="item.rate"
                    :delay="200"
                    :duration="1000"
                    :barColor="'#4189ff'"
                    :backgroundColor="'#f3fafd'"
                    :isAnimation="true"
                    :timeFunction="'cubic-bezier(0.99, 0.01, 0.22, 0.94)'"
                  />
                  <span class="circleText">{{item.text}}</span>
                  <div class="inside">
                        <span>{{item.leftText}}/{{item.rightText}}</span>
                    </div>
              </div>
            </div>
        </swiper-slide>
      </swiper> 
      <div class="personalBottom"></div>
    </section>
    <section class="bottom">
        <div class="bottomItem"
          v-for="(item,index) in bottomArr"
          :key="index"
        >
            <img class="bottomItemImg" :src="item.imgUrl" alt="图片">
            <span class="bottomItemText">{{item.text}}</span>
            <div v-if="item.cornerText" class="corner">{{item.cornerText}}</div>
        </div>
    </section>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';// //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
// require("swiper/dist/css/swiper.css");
export default {
  name: 'HelloWorld',
  components: { 
    circleProgress: require('./circle-progress.vue').default,
    swiper, 
    swiperSlide
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tabs: ['新车', '保险', '售后'],
      shops: [{text: '店铺排名', number: 1}, {text: '完成订单', number: 2301}, {text: '好评率', number: '98%'}],
      circles: [
        {leftText: 65, rightText: 106, text: '留档量'},
        {leftText: 14, rightText: 46, text: '邀约试驾'},
        {leftText: 35, rightText: 47, text: '回访数量'}
      ],
      num: 0,
      imgNum: 0,
      setImg: require('../assets/homePage/set.png'),
      personalImg: require('../assets/homePage/c0.png'),
      progress: 20,
      allWidth: document.body.clientWidth - 30 + 'px',
      bottomImgUrl: require('../assets/homePage/blue.png'),
      bottomArr: [
        {imgUrl: require('../assets/homePage/blue.png'), text: '新车审批', cornerText: '2'},
        {imgUrl: require('../assets/homePage/blue.png'), text: '新车审批'},
        {imgUrl: require('../assets/homePage/blue.png'), text: '新车审批'},
        {imgUrl: require('../assets/homePage/blue.png'), text: '新车审批', cornerText: '5'}
      ],
      swiperOption: {
        autoplay: false,
        speed: 2000,
        loop: true,
        pagination: {
          el: '.personalBottom',
          clickable: true,
          bulletElement: 'p',
          bulletClass: 'bullet',
          bulletActiveClass: 'bulletActive'
        }
      }
    };
  },
  computed: {
    circleArr: function(){
      return this.circles.map((item, index) => {
        item.rate = Math.floor((item.leftText / item.rightText) * 100);
        console.log(item);
        return item;
      });
    }
  },
  methods: {
    tab(index){
      this.num = index;
    },
    imgTab(index){
      this.imgNum = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.corner{
  position: absolute;
  left:70px;
  top:10px;
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: #fc2e2e;
  border:1px solid #fff;
  color:#fff;
  font-size: 1px;
  line-height: 15px;
  text-align: center;
}
.personalBottom{
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 25px;
}
.bottomItemText{
  font-size: 13px;
  color: #333;
}
.bottomItemImg{
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
}
.bottomItem{
  display: flex;
  height: 90px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  position: relative;
}
.bottom{
  display: flex;
  flex-direction: row;
  background-color: #fff;
  flex-wrap: wrap;
  margin-top: 15px;
  position: relative;
}
.circleText{
  font-size: 13px;
  color:#4189ff;
}
.inside{
  position: absolute;
  left: 13px;
  top: 22px;
  color: #4189ff;
  font-size: 10px;
}
.circleItem{
  display: flex;
  height: 80px;
  width: 60px;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.circle{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
}
.personalImg{
  width: 15px;
  height: 15px;
}
.newCar{
  color: #333;
  font-size: 14px;
}
.personal{
  display: flex;
  width:100%;
  flex:1;
  flex-direction: row;
  align-items: center;
  color:#333;
  height: 30px;
  justify-content: flex-start;
  border-bottom: 1px  solid #f3f3f3;
}
.middle{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 15px;
  padding: 0 15px;
  background-color: #fff;
}
.shopItem{
  display: flex;
  height: 55px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.shop{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color:#fff;
  margin-top: 15px;
}
.afterImg{
  width: 15px;
  height: 15px;
  margin-left: 3px;
}
.afterSaleText{
  color: #fff;
  font-size: 13px;
}
.afterSale{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav{
  width: 340px;
  margin: 0 auto;
  height: 120px;
  margin-top: 13px;
  padding: 10px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(left, #3399ff , #51d8e3);
}
.spanAdd{
  font-size: 30px;
  color:#fff;
}
.add{
  height: 53px;
  position: absolute;
  right:10px;
  bottom:-2px;
  display: flex;
  align-items: center;
}
.opacityBackground{
  background-color: #fff;
  width: 70px;
  height: 24px;
  border-radius: 12px;
  color:rgb(75,131,254);
}
.headerText{
  font-size: 15px;
}
.headerButton{
  width: 70px;
  height: 24px;
  border-radius: 12px;
  color:#fff;
}
.header{
  display: flex;
  flex:1;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  height: 63px;
  background-color: #69f;
  padding-bottom: 10px;
  position: relative;
}
.container{
  display: flex;
  flex:1;
  flex-direction: column;
  background-color: #f4f4f8;
  overflow: hidden;
}
</style>
