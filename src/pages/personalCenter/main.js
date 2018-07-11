import Vue from 'vue';
import App from './index';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: '个人中心',
    usingComponents: {
      'wxc-loadmore': '../../../dist/@minui/wxc-loadmore/dist/index'
    }
  }
}
