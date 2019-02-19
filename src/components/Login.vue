<template>
  <div class="container" v-bind:style='allObj'>
      <div class="headerBox"></div>
      <div class="loginBox">
        <div class="phoneBox">
          <span>手机号</span>
          <input type="number" v-model="phoneNumber" class="phoneItem" placeholder="请输入手机号.">
        </div>
        <div class="phoneBox">
          <span>验证码</span>
          <input type="number" v-model="mCode" class="phoneItem" placeholder="请输入验证码.">
          <div class="codeBox" @click="getCode">获取</div>
        </div>
        <div @click="login" class="loginButton">登录</div>
      </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Hello Login!',
      allObj: {
        width: '',
        height: ''
      },
      phoneNumber: '',
      loginResultData: {},
      mCode: ''
    };
  },
  methods: {
    // 获取验证码
    getCode: function(){
      const self = this;
      if (this.phoneNumber == ''){
        Toast({
          message: '请输入手机号',
          duration: 1500
        });
        return;
      }
      let code = this.setCode();
      this.$ajax.post('/api/getCheckNumber', {
        phoneNumber: this.phoneNumber,
        number: code
      })
        .then(function (response) {
          console.log(response.data);
          self.loginResultData = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 设置6位验证码
    setCode: function(){
      let nArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let code = '';
      for (var i = 0; i < 6; i++){
        let number = Math.floor(Math.random() * 9);
        code = code + nArr[number];
      }
      return code;  
    },
    login: function(){
      console.log(this);
      this.$router.push('/Mine');
      // if (this.mCode == this.loginResultData.checkNumber){
      //   this.$router.push('/Mine');
      // }
    }
  },
  beforeMount(){
    this.allObj.width = window.screen.width + 'px';
    this.allObj.height = window.screen.height + 'px';
  },
  mounted(){
    
  }
};
</script>

<style scoped>
input:focus{
  outline: none;
}
.phoneItem{
  border:none;
  box-shadow: none;
}
.phoneBox{
  display: flex;
  flex-direction: row;
}
.headerBox{
  width: 50px;
  height: 50px;
  background-color: #69f;
}
.loginBox{
  width: 80%;
  background-color: #f4f4f8;
  flex-direction: column;
}
h1{
  color:rgba(228, 41, 135, 0.575);
}
.container{
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    height: 100%
}
.loginButton{
  margin-top: 20px;
}
</style>
