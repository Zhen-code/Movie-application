<template>
<div id="box">
  <!-- 设置头部 -->
  <div class="header">
    <span @click="goback" class="back">&lt;返回</span>
    <h1 class="title">{{this.title}}</h1>
  </div>
         <div class="b-row">
        <scroller
  ref="myscroller"
  :noDataText="'没有了'"
  :on-infinite="infinite">
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
            <Button id="detail-btn" @click="godetail(data)">详情</Button>
          </b-col>
        </div>
        </b-row>
        </scroller>
    </div>
</div>	
</template>

<script type="text/javascript">
import Vue from 'vue'
import VueScroller from 'vue-scroller'
import {getData} from "../../api"
import {url, comingurl, topurl ,apikey} from '../../utils/constant'
Vue.use(VueScroller)
export default{
	 data(){
    return{
    	 title:'',
    	 url:'',
    	 items: [],
    	 start:0,
    	 count:6,
       total:0,
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
  methods:{
    godetail(data){
      this.$router.push({path:'/detail',query:{detail:data}})
    },
    goback(){
      this.$router.go(-1)
    },
    infinite(done){//上拉加载
    let self = this;
    let start = this.start+6;
　　setTimeout(() => {
  // 判断是否加载全部数据
　　　　　　if(start>=self.total){
　　　　　　　　self.$refs.myscroller.finishInfinite(true);
　　　　　　　　return
　　　　}else{
  // 未加载完毕则继续执行
        self.getNext(done)
}
　　}, 1500)
},
async getNext(done){
  var arr1=this.items
  let url=this.url
  let count=this.count
  let start=this.start+6
  var result=await getData(url,{apikey,start,count})
  var arr=result.subjects
  arr.forEach((item) => {
     arr1.push(item)
  })
  this.items=arr1
  this.start=start
  // 刷新后停止读取
   // this.$refs.myscroller.finishPullToRefresh();
   // 结束上拉回调
   done()
}
  },
  async mounted(){
    // 获取初始化start与count值
  	let start=this.start
  	let count=this.count
    // 获取初始话显示的数组
  	const result=await getData(this.url,{apikey,start,count})
  	this.items=result.subjects
    // 获取总的条数
  	this.total=result.total
}
}
</script>

<style scoped>
#box{
  margin-top: 6px;
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
.back{
 position: fixed;left: 60px;cursor: pointer;top: 70px;color: red;font-size: 20px;
}
.card-img-top{
  height: 200px;
}
.card-title{
  color: #fff;position: absolute;top:-30px;left: 0;text-align: left;line-height: 30px;
  font-size: 16px;width: 100%;height: 30px;background-color: rgba(0,0,0,.6);font-weight: bold;
}
.card-text{
  position: absolute;color: orange;font-size: 16px;font-style: italic;font-weight: bold;
  top:-30px;right: 6px;
}
.all-movie{
  position: absolute;left: 75%;line-height: 45px;
}
.card-body{
  height: 32px;position: relative;
}
.b-row{
  position: relative;height:600px;margin-top: 100px;
}
#detail-btn{
  width: 60px;height: 26px;
  color: green;font-weight: bold;position: absolute;
  top: 85%;left: 70px;}
</style>