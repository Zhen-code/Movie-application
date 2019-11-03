// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'reset.css'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import { Button, Table,Layout,MenuItem,Icon,Sider,Submenu,BreadcrumbItem } from 'view-design';
Vue.use('ViewUI')
Vue.component('Button', Button);
Vue.component('Layout', Layout);
Vue.component('MenuItem', MenuItem);
Vue.component('Icon', Icon);
Vue.component('Sider', Sider);
Vue.component('Submenu', Submenu);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
