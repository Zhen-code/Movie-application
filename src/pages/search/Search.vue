<template>
	<div>
<div class="header">
	 <Input  enter-button  placeholder="找影视剧，影人，影院" id="header-input" v-model="keywords" clearable  @on-enter="goSearch()"/>
	<Icon type="ios-search" size="40" color="black" @click="goSearch()" class="search-icon"/>
</div>
<div>
  <b-jumbotron lead="电影列表信息" class="jumbotron">
    <div>
  <b-card-group>
  	<b-row v-if="initflag">
  		<b-col cols="3" v-for="(item,index) in allFilms" :key="index">
  			<b-card :title="item.title" :img-src="imgurl+item.images[0]" img-top :img-alt="item.title">
  				<b-card-text class="average">
  					{{item.average}}
  				</b-card-text>
            </b-card>
  		</b-col>
  	</b-row>
  	<div v-if="searchflag">
  	<b-row v-show="searcharr.length==0?0:1">
  		<b-col cols="6" v-for="(item,index) in searcharr" :key="index" v-if="searcharr.length==1">
  			<b-card :title="item.title" :img-src="imgurl+item.images[0]" img-top :img-alt="item.title">
  				<b-card-text class="average">
  					{{item.average}}
  				</b-card-text>
            </b-card>
  		</b-col>
  		<b-col cols="3" v-for="(item,index) in searcharr" :key="index" v-else>
  			<b-card :title="item.title" :img-src="imgurl+item.images[0]" img-top :img-alt="item.title">
  				<b-card-text class="average">
  					{{item.average}}
  				</b-card-text>
            </b-card>
  		</b-col>
  	</b-row>
  	<h4 class="not-title" v-show="searcharr.length==0?1:0">暂未收索到相关信息</h4>
  	</div>	
     </b-card-group>
</div>
  	</b-row>
  </b-jumbotron>
</div>
</div>
</template>

<script>
import {reqMovies} from '../../api'
import {formateDate} from '../../utils/date'
export default{
	data(){
		return{
			    initflag:true,
			    searchflag:false,
                searcharr:[],
				keywords:'',
				allFilms:[],
				imgurl:'http://localhost:8081/public/images/2019-11-05/',
				date:new Date()
		}
	},
	methods:{
		goSearch(){
			this.initflag=false
			this.searchflag=true
	          var arr=[]
			  this.allFilms.forEach((item) => {
			  if(item.title.includes(this.keywords)){
			  	arr.push(item)
			  }
			})
			this.searcharr=arr
	}
	},
	computed:{
       searchmovies(){
       	return this.searcharr
       }
   },
	async mounted(){
		const result=await reqMovies()
		if(result.code===0){
        this.allFilms=result.data
        
		}else{
			console.log(result.msg)
		}
	}
}
</script>

<style scoped>
.header{
	width: 100%;height: 200px;background: #333333;position: relative;
}

#header-input{
	width: 400px;position: absolute;left: 50%;top: 50%;margin-left: -150px;margin-top: -20px;height: 60px;
}	
.jumbotron{
	height:100%;
}
.card{
	margin-top: 12px;
}
.card-img-top{
	height:300px;
}
.card-body{
	background:rgba(0,0,0,.8);color: #fff;font-size: 20px;
	height:80px;
}
.card-title{
	text-align: left;
}
.card-text{
  position: absolute;color: red;top: 0;
}
.average{
	position: absolute;color: red;top: 90%;right: 12px;font-style: italic;
}
.search-icon{
	position: absolute;top:45%;z-index: 100;margin-left: 180px;
}

.row{
	width: 100%;
}
.not-title{
	position: absolute;left: 50%;transform: translateX(-50%);margin-top: 10px;
}
</style>