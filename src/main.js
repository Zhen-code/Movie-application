// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'reset.css'
import App from './App'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './store'
import Promise from 'promise-polyfill'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import '../static/custom.css'
import { Button, Table, Layout, MenuItem, Icon, Sider, Submenu, BreadcrumbItem, Input, List} from 'view-design'
Vue.use('ViewUI')
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Layout', Layout)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.component('Sider', Sider)
Vue.component('Submenu', Submenu)
Vue.component('BreadcrumbItem', BreadcrumbItem)
Vue.component('Input', Input)
Vue.component('List', List)
Vue.component('ListItem',List.ListItem)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
