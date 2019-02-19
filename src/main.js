import Vue from 'vue';
import App from './App';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import router from './router';
import BaiduMap from 'vue-baidu-map';

Vue.use(BaiduMap, {
  ak: '1qo1ZrgDs2F7fxV7LbQGaF4k0TCcPq3g'
});
Vue.use(MintUI);
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
