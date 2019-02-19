import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Message from '@/components/Message';
import Mine from '@/components/Mine';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
});
