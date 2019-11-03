# film-project
初始话项目
# 全局安装 vue-cli
$ cnpm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack film-project
# 这里需要进行一些配置，默认回车即可

? Project name film-project
? Project description A Vue.js project
? Vue build standalone
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? Yes

   vue-cli · Generated "film-project".

   To get started:
   
     cd film-project
     npm install
     npm run dev

> A Vue.js project

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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## 1. 项目开发准备
    项目描述:此项目实现电影的影片列表，影片搜索，个人中心管理
    技术选型：vue全家桶+iview+express+mongodb
    API接口:豆瓣平台接口,后台数据接口

## 2. 开启项目开发
    使用脚手架创建项目
    `webpack init film-project`
    安装所有依赖/指定依赖
    `npm install`
    开发环境运行
    `npm run dev`
    生产环境打包与发布
    `npm run build`
#页面布局的搭建与功能的规划，配置路由模式
