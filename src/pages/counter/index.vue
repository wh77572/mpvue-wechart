<template>
  <div class="counter-warp">
    <div class="myBackground">ddd</div>
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
    <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
      <view class="picker">
        当前选择: {{date}}
      </view>
    </picker>
    <view class="weui-msg">
      <view class="weui-msg__icon-area">
        <icon type="success" size="93"></icon>
      </view>
      <view class="weui-msg__text-area">
        <view class="weui-msg__title">操作成功</view>
        <view class="weui-msg__desc">内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
          <navigator url="" class="weui-msg__link">文字链接</navigator>
        </view>
      </view>
      <view class="weui-msg__opr-area">
        <view class="weui-btn-area">
          <button class="weui-btn" type="primary">推荐操作</button>
          <button class="weui-btn" type="default">辅助操作</button>
        </view>
      </view>
      <view class="weui-msg__extra-area">
        <view class="weui-footer">
          <view class="weui-footer__links">
            <navigator url="" class="weui-footer__link">底部链接文本</navigator>
          </view>
          <view class="weui-footer__text">Copyright © 2008-2016 weui.io</view>
        </view>
      </view>
    </view>
  </div>
</template>

<script>
  // Use Vuex
  import '@/../static/css/weui/style/weui.wxss';
  import store from './store';

  /*  import '../../weui/style/weui.wxss' */

  export default {
    data() {
      return {
        date: '2016-09-09'
      };
    },
    computed: {
      count() {
        return store.state.count;
      }
    },
    created() {
    },
    methods: {
      increment() {
        this.$http.authorList()
          .then((res) => {
            // console.log('请求');
            // console.log(res);
          });
        store.commit('increment');
      },
      decrement() {
        store.commit('decrement');
      },
      bindDateChange() {
      }
    }
  };

</script>
<style>
  .counter-warp {
    text-align: center;
    margin-top: 2px;
  }

  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>
