# 使用mpvue来搭建的小程序

[http://mpvue.com/](http://mpvue.com/)

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


#minui使用方法：(https://meili.github.io/min/docs/minui/index.html)
1、安装min （npm install -g @mindev/min-cli）  查看安装是否成功： min -V
2、在项目中需要使用到组件的时候，需要使用min来安装，这里以panel为例，
 [ --------
    1、min install @minui/wxc-panel
    2、在main文件中添加：
    usingComponents: {
                      'wxc-loadmore': '../../../dist/@minui/wxc-panel/dist/index'
                    }
 ---------------]
