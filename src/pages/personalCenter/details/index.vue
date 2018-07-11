<template>
  <div>
    sss
  </div>
</template>

<script>
  // import { getCurrentUrl } from '@/utils/index'

  export default {
    name: 'index',
    onShareAppMessage(e) {
      return {
        title: '自定义转发标题',
        path: 'pages/personalCenter/main',
        onLoad() {
          // console.log('sss')
        }
      }
    },
    beforeMount() {
      // console.log(getCurrentUrl().param)
    },
  };
</script>

<style scoped lang="less">
  div{
    width: 200px;
    height: 200px;
    background: red;
  }
</style>
