<template>
<div id="app">
  <!-- 设置头部 -->
  <div class="header">
    <h1 class="title">{{this.title}}</h1>
  </div>
         <div class="b-row">
     <b-row class="bv-example-row">
        <div v-for="(data,index) in items" v-bind:key="index">
          <b-col>
            <b-card
              v-bind:title="data.title"
              v-bind:img-src="data.images.small"
              img-alt="data.original_title"
              img-top
              tag="article"
              style="max-width:10rem;"
              class="mb-3">
              <b-card-text>{{data.rating.average==0?'':data.rating.average}}</b-card-text>
            </b-card>
          </b-col>
        </div>
     </b-row>
    </div>
</div>	
</template>

<script type="text/javascript">
import Vue from 'vue'
import {getData} from "../../api"
import {url, comingurl, topurl ,apikey} from '../../utils/constant'
export default{
	 data(){
    return{
    	 title:'',
    	 url:'',
    	 items: [],
    	 start:0,
    	 count:6
    }
  },
  created(){
       this.title=this.$route.query.name
       switch (this.title) {
      case '正在上映的电影-北京':
        this.url=url
        break;
      case '即将上映的电影':
        this.url=comingurl
        break;
      case '豆瓣电影Top250':
        this.url= topurl
        break;  
      default:
        this.url=url
        break;
    }
  },
  async mounted(){
  	let start=this.start
  	let count=this.count
  	const result=await getData(this.url,{apikey,start,count})
  	this.items=result.subjects
  	 console.log(this.start)
},
methods:{
	 
}
}
</script>

<style scoped>
html, body {
  margin: 0;height:100%;
}
.header {
  position: fixed;
  top: 58px;
  left: 0;
  height: 44px;
  width: 100%;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
  background-color: #fff;
  z-index: 1000;
  color: #666;
}
.card-img-top{
  height: 200px;
}
.card-title{
  color: #fff;position: absolute;top: 66%;left: 0;text-align: left;line-height: 30px;
  font-size: 16px;width: 100%;height: 30px;background-color: rgba(0,0,0,.6);font-weight: bold;
}
.card-text{
  position: absolute;color: orange;font-size: 16px;font-style: italic;font-weight: bold;
  top: 70%;right: 6px;
}
.all-movie{
  position: absolute;left: 75%;line-height: 45px;
}
.card-body{
  height: 30px;
}	
</style>