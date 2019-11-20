<template>
<div class="container">
	<h2 class="film-head">{{data.title}}</h2>
	<div class="film-body">
		<div class="film-img">
			<img :src="data.images.medium">
		</div>
		<div class="detail">
			<p><span>导演:</span>{{data.directors[0].name}}</p>
			<p><span>编剧:</span></p>
			<p><span>主演:</span>{{data.casts[0].name}}</p>
			<p><span>类型:</span>{{data.genres[0]}}</p>
			<p><span>官方网站:</span></p>
			<p><span>制片国家:</span>{{data.pubdates[1]}}</p>
			<p><span>语言:</span></p>
			<p><span>上映日期:</span>{{data.year}}</p>
			<p><span>片长:</span>{{data.durations[0]}}</p>
			<p><span>又名:</span></p>
			<p><span>IMDB链接:</span></p>
		</div>
		<div class="rating">
			<h6>豆瓣评分</h6>
			<div class="score">
			<div class="s-l">{{data.rating.average}}</div>
			<div class="rating-count">
				<div class="ratings" v-for="(item,index) in stars">
					<img :src="item">
				</div>
				<div class="comments-count"></div>
			</div>
			</div>
			<ul class="rating-wrap">
			<li class="list-item">
				<span>1</span>
				<img src="">
				<span>{{data.rating.details['1']}}%</span>
			</li>  
			<li class="list-item">
				<span>2</span>
				<img src="">
				<span>{{data.rating.details['2']}}%</span>
			</li>  
			<li class="list-item">
				<span>3</span>
				<img src="">
				<span>{{data.rating.details['3']}}%</span>
			</li>  
			<li class="list-item">
				<span>4</span>
				<img src="">
				<span>{{data.rating.details['4']}}%</span>
			</li>  
			<li class="list-item">
				<span>5</span>
				
				<span>{{data.rating.details['5']}}%</span>
			</li>  
			</ul>
		</div>
	</div>
</div>	
</template>

<script type="text/javascript">
	export default{
        data(){
        	return{
        	 data:{}
        	}
        },
        computed:{
        stars(){
        let starArr=[]
 		const average=this.data.rating.average
 		if(average){
 		const redStar=parseInt(Math.floor(average/2))
 		const huiStar=5-redStar
 		let honUrl=require("../../assets/img/honse.svg")
 		let huiUrl=require("../../assets/img/huise.svg")
 		for(var i=0;i<redStar;i++){
 			starArr.push(honUrl)
 		}
 		for(var j=0;j<huiStar;j++){
 			starArr.push(huiUrl)
 		}
 		return starArr
 		}
        }
        },
		beforeMount(){
			this.data=this.$route.query.detail;
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
*{
	margin: 0;padding: 0;
}
.container{
	min-width: 375px;
	padding-left: 100px;
	padding-top: 100px;
}
.film-head{
	font-size:26px;
}
.film-body{
	display: flex;flex-flow: row|nowrap;
	justify-content: center;justify-content: space-around;
    box-sizing: border-box;
}
.film-img{
	width: 20%;
}
.film-img img{
width: 136px;height: 202px;
}
.detail{
	width: 60%;padding-left: 16px;text-align: left;

}
.detail p{
	color: #3377aa;font-size: 16px;
}
.detail p span{
	color: #000000;font-size: 16px;
}
.rating{
	width: 20%;height:224px;
	padding-right: 0.6rem;
}
.rating::before{
	 content: ' ';
      position: absolute;
      width: 200%;
      height: 200%;
      border: 1px solid #ccc;
      left: 0;
      top: 0;
      transform: scale(0.5, 0.5);
      transform-origin: left top;
      box-sizing: border-box;
      border-top: none;
      border-right: none;
      border-left: none;
}
.rating h6{
	color: #9b9b9b;font-size: 16px;
}
.rating .score{
	display: flex;justify-content: space-between;align-items: center;
}
.rating .score .s-l{
	width: 20%;font-size: 20px;
}
.rating .score .rating-count{
	width: 80%;display: flex;flex-direction: row;
	align-content: space-between;
}
.rating .score .rating-count .ratings img{
  width: 16px;height: 16px;
}
.rating .score .rating-count .comments-count{
	color: #9b9b9b;font-size: 16px;
}
.rating-wrap{
	list-style: none;width: 160px;
	height: 90px;
	position: relative;
}
.rating-wrap::before {
      content: ' ';
      position: absolute;
      width: 200%;
      height: 200%;
      border: 1px solid #ccc;
      left: 0;
      top: 0;
      transform: scale(0.5, 0.5);
      transform-origin: left top;
      box-sizing: border-box;
      border-top: none;
      border-right: none;
      border-left: none; }
.rating-wrap .list-item{
	height: 17px;
	font-size: 13px;color: #9b9b9b;
}


</style>