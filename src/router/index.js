import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/homepage/HomePage.vue'
import Profile from '@/pages/profile/Profile.vue'
import Search from '@/pages/search/Search.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass:'active',
  routes: [
    {
      path: '/homepage',
      name: 'HomePage ',
      component: HomePage 
    },
    {
    	path:'/profile',
    	name:'Profile',
    	component:Profile
    },
    {
    	path:'/search',
    	name:'Search',
    	component:Search
    },
    {
    	path:'/',
    	redirect:'/homepage'
    }
  ]
})
