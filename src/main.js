import Vue from 'vue';
import App from './App';
import ApiPlugin from './utils/api';

Vue.use(ApiPlugin); // 使用组件库
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/personalCenter/details/main', '^pages/personalCenter/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#606060',
      selectedColor: '#f5a623',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: 'static/img/icon_home.png',
        selectedIconPath: 'static/img/icon_home_active.png'
      }, {
        pagePath: 'pages/logs/main',
        text: '收益',
        iconPath: 'static/img/icon_coupons.png',
        selectedIconPath: 'static/img/icon_coupons_active.png'
      }, {
        pagePath: 'pages/logs/main',
        text: '我',
        iconPath: 'static/img/icon_me.png',
        selectedIconPath: 'static/img/icon_me_active.png'
      }]
    }
  }
};
