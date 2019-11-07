<template>
	<div>
	 <div class="header">
    <span class="title" :style="color">{{this.title}}</span>
    <a class="all-movie" :style="color" @click="toMore(title)">全部&gt;</a>
  </div>
    <div v-if="this.movies.length" >
      <b-row class="bv-example-row">
        <div v-for="data in movies" v-bind:key="data.index">
          <b-col>
            <b-card
              v-bind:title="data.title"
              v-bind:img-src="data.images.small"
              img-alt="data.original_title"
              img-top
              tag="article"
              style="max-width:10rem;"
              class="mb-2">
              <b-card-text>{{data.rating.average==0?'':data.rating.average}}</b-card-text>
              <b-button href="#" class="goBuy">购票</b-button>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </div>
    <div v-else>
      <h5>获取当前电影列表失败</h5>
    </div>
</div>
</template>

<script>
import PubSub from 'pubsub-js'
	export default{
		props:{
			movies:Array,
			title:String,
			titleColor:String
		},
		data(){
			return{
				color:{
					color:this.titleColor
				}
			}
		},
    methods:{
      toMore(title){
         this.$router.push({path:'/morelist',query:{name:title}})
      }
    },
    mounted(){
    var cardbody=document.getElementsByClassName('card-body')
      for(var i=0;i<cardbody.length;i++){
      cardbody[i].onmouseenter=function(){
        this.style.background = 'red'
      }
      cardbody[i].onmouseleave=function(){
        this.style.background = '#fff'
      }
    }
      this.$store.dispatch('getNowTitle',this.title)
    }
  }
</script>

<style scoped>
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
.header{
  width: 100%;height: 30px;position: relative;
}
.title{
 position: absolute;left: 0px;line-height: 30px;font-size: 20px;
}
.all-movie{
  position: absolute;left: 75%;line-height: 45px;
}
.card-body{
  height: 30px;
}
.goBuy{
  background:none;border: none;color:orange;position: absolute;top: 80%;left: 30%;
}
</style>