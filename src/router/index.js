import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/homepage/HomePage.vue'
import Profile from '../pages/profile/Profile.vue'
import Search from '../pages/search/Search.vue'
import MoreList from '../pages/morelist/MoreList.vue'
import MyInfo from '../pages/info/MyInfo.vue'
import NotFound from '../components/404/NotFound.vue'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/homepage',
      name: 'HomePage ',
      component: HomePage   
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      children:[
      {
      path:'info',
      name: MyInfo,
      component: MyInfo
      },
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path:'/morelist',
      name:MoreList,
      component:MoreList
    },
    {
      path: '/',
      redirect: '/homepage'
    }
  ]
})
