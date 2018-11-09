# 关于mpvue的拓展，官方地址(http://mpvue.com)

> ### 1、关于组件库，自己开发一个组件库的话，这个工程量无遗是庞大的，所以本项目中使用了minui这个组件库  

  (比较了weui，zanui，Wa-UI, wux, wetoast, 以及刚出来的iView等等)，minui还是能满足大部分的需求的， 
  
  >下面是使用方法：（minui使用方法：https://meili.github.io/min/docs/minui/index.html）  
  >> 1、安装min （npm install -g @mindev/min-cli）  查看安装是否成功： min -V  
      (注： 安装不成功可能是因为权限的原因，可以使用sudo npm install -g @mindev/min-cli)   
      
  >> 2、在项目中需要使用到组件的时候，需要使用min来安装，这里以panel为例，  
  >>   1、min install @minui/wxc-panel  
  >>   2、在main文件中添加：  
  >>    usingComponents: {    
                          'wxc-loadmore': '../../../dist/@minui/wxc-panel/dist/index'    
                        }    

> ### 2、关于设计h5代码跟小程序代码的复用：  

   我们h5的项目中，通过把px转换成rem的方式，设计图中是多少px，项目里就写多少px，所以复用的时候到了小程序里，
   无疑会比较麻烦，所以通过postcss做了一层转换，让px === rpx，所以在小程序的项目中，设计稿是多少px，你就可以
   直接写多少px了

> ### 3、关于api：  

  api主要是通过api.js封装了微信的request，以便于跟h5的代码复用，以下是例子：  
  
  import api from '@/utils/api'  
  import { API_GET_LIST } from '@/static/js/apis'  
  
  api(API_GET_LIST, paramData).then(data => {  
            console.log(data)  
          })  

  API_GET_LIST -----> 代表我的参数，详细如下：  

  export const API_FAST_LOGIN = {  
    method: 'post',  
    url: `${publicParam}/free/roomsearch/customer/rapidLogin/mobile`,  
  }  

  paramData -----> 代指是你项目的域名
  
> ### 4、关于static的放置问题：
  在src的目录下去放置我的静态文件，比如我的全局css重置文件，公共方法，变量的js，以及公共的图片等等

> ### 5、关于vuex：
  在mpvue中可以使用vuex，详细使用见src/pages/counter/index

> ### 6、关于路由传值问题：  
  在utils/index里面封装了getCurrentUrl方法，以下是例子：  

  import { getCurrentUrl } from '@/utils/index'  

  beforeMount() {  
        console.log(getCurrentUrl().url) ---> 获取当前路由  
        console.log(getCurrentUrl().urlWithArgs)  ----> 获取路由所带参数  
      }  

> ### 7、更新全局vuex值处理  

通过  this.$store.dispatch('test', 'sss') 来触发事件并改变值

