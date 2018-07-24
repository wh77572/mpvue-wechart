<template>
  <div>
    <div
      class="ss"
      @click="goToPage"
    >
        跳转到新页面
    </div>

    <swiper
      autoplay
      interval="3000"
      circular
    >
      <swiper-item
        v-for="(item,index) in imgUrls"
        :key="index"
      >
        <image
          class="slide-image"
          width="355"
          height="150"
          :src="item"
        />
      </swiper-item>
    </swiper>

    <scroll-view
      class="scroll-area"
      scroll-y
      enable-back-to-top
      lower-threshold="10"
      @scrolltolower="scrollerLower"
    >
      <div class="ss">sss</div>
      <div class="ss">sss</div>
      <div class="ss">sss</div>
      <div class="ss">sss</div>
      <div class="ss">sss</div>
      <div class="ss">sss</div>
      <div class="ss">sss</div>
      <div class="ss">sss</div>
      <div class="ss">sss</div>
      <wxc-loadmore :is-end="true"></wxc-loadmore>
    </scroll-view>
  </div>
</template>

<script>
  // import { getCurrentUrl } from '@/utils/index'

  export default {
    name: 'index',
    data() {
      return {
        polyline: [{
          points: [{
            longitude: 113.32452,
            latitude: 23.099994
          }, {
            longitude: 113.5,
            latitude: 23.21229
          }],
          color: 'red',
          width: 10,
          arrowLine: true
        }],
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
      }
    },
    computed: {
    },
    onShareAppMessage(e) {
      return {
        title: '自定义转发标题',
        path: 'pages/personalCenter/main',
        onLoad() {
          // console.log('sss')
        }
      }
    },
    methods: {
      scrollerLower(e) {
        // console.log(e)
      },
      goToPage() {
        // wx.navigateTo({
        //   url: 'details/main?title=navigate'
        // })

        this.$store.dispatch('test', 'sss')
        // console.log(this.$store.state.test)
      }
    },
    beforeMount() {
      // console.log(getCurrentUrl().url)
      // console.log(getCurrentUrl().urlWithArgs)
    }
  };
</script>

<style scoped lang="less">
.ss{
  text-align: center;
  width: 660px;
  line-height: 90px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 50px;
}
  .sss{
    width: 100%;
    height: 800px;
  }
  .scroll-area{
    width: 100%;
    height: 500px;
  }
</style>
