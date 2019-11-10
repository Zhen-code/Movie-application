<template>
	<div>
 <div class="mid-class" v-if="flag">
	 <div class="art-right-w3ls">
		<h2>用户中心</h2>
		<form>
		   <div class="main">
			  <div class="form-left-to-w3l">
				 <input type="text" name="name" placeholder="用户名" v-model="username">
			  </div>
			  <div class="form-left-to-w3l ">
				 <input type="password" name="password" placeholder="密码" v-model="password">
				 <div class="clear"></div>
			  </div>
		   </div>
		   <div class="left-side-forget">
			  <input type="checkbox" class="checked">
			  <span class="remenber-me">保存用户信息</span>
		   </div>
		   <div class="right-side-forget">
			  <a href="#" class="for">忘记密码...?</a>
		   </div>
		   <div class="clear"></div>
		   <div class="btnn">
			  <button @click.prevent="login">登录</button>
		   </div>
		</form>
		<div class="w3layouts_more-buttn">
		   <h3>Don't Have an account..?
			  <a href="#content1">注册
			  </a>
		   </h3>
		</div>
	 </div>
  </div>
  <div v-if="!flag">
  	<MyInfo/>
  </div>
</div>
</template>

<script>
import {reqlogin} from '../../api'
import storage from '../../utils/storage'
import MyInfo from '../info/MyInfo.vue'
export default{
	data(){
		return{
			flag:true,
			username:'',
			password:''
		}
	},
	methods:{
   			async login(){
   				let username=this.username
   				let password=this.password
   				const result=await reqlogin(username,password)
   				if(result.code==0){
   				let	_id=result.data._id
 				let username=result.data.username
 				let password=result.data.password
 				storage.set('username',{_id,username,password})
 				this.$store.dispatch('setUserId',_id)
 				this.$router.push('/profile/info')
   				}else{
   					console.log('登录失败')
   				}
   			},
	},
	components:{
		MyInfo
	},
    mounted(){
    	addEventListener("load", function () { setTimeout(hideURLbar, 0); }, false); 
    	function hideURLbar() { window.scrollTo(0, 1); };
    	if(this.$store.state.userId!==''){
              this.flag=false
    	}else{
    		this.flag=true
    	}

    }
}
</script>

<style scoped>
a {
	text-decoration: none;
}
.txt-rt {
	text-align: right;
}
.txt-lt {
	text-align: left;
}
.txt-center {
	text-align: center;
}
.float-rt {
	float: right;
}
.float-lt {
	float: left;
}
.clear {
	clear: both;
}
.pos-relative {
	position: relative;
}
.pos-absolute {
	position: absolute;
}
.vertical-base {
	vertical-align: baseline;
}
.vertical-top {
	vertical-align: top;
}

nav.vertical ul li {
	display: block;
}
nav.horizontal ul li {
	display: inline-block;
}
body a {
	transition: 0.5s all;
	-webkit-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-o-transition: 0.5s all;
	-ms-transition: 0.5s all;
	text-decoration: none;
}

body a:hover {
	text-decoration: none;
}

body a:focus,
a:hover {
	text-decoration: none;
}
select,
input[type="email"],
input[type="text"],
input[type=password],
input[type="button"],
input[type="submit"],
textarea {
	font-family: 'Source Sans Pro', sans-serif;
	transition: 0.5s all;
	-webkit-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-o-transition: 0.5s all;
	-ms-transition: 0.5s all;
}
body {
	box-sizing: border-box;
	min-height: 100vh;
}
h1.header-w3ls {
	text-transform: capitalize;
	color: #ffffff;
	text-shadow: 2px 3px rgba(0, 0, 0, 0.42);
}
.mid-class {
	background:#009999;
	display: -webkit-flex;
	display: -webkit-box;
	display: -moz-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-justify-content: center;
	justify-content: center;
	text-align: center;
}
.art-right-w3ls {
	flex-basis: 60%;
	-webkit-flex-basis: 60%;
	box-sizing: border-box;
}
.form-left-to-w3l input[type="email"],
.form-left-to-w3l input[type="password"],
.form-left-to-w3l input[type="text"] {
	width: 100%;
	color: #000;
	outline: none;
	border: none;
	border-bottom: #00a1ff 2px solid;
	-webkit-appearance: none;
	background: #ffffff96;
	-moz-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	-ms-transition: all 0.5s ease-in-out;
	box-sizing: border-box;
}

::-webkit-input-placeholder {
	/* Chrome/Opera/Safari */
	color: #000;
}
::-moz-placeholder {
	/* Firefox 19+ */
	color: #000;
}
:-ms-input-placeholder {
	/* IE 10+ */
	color: #000;
}
:-moz-placeholder {
	/* Firefox 18- */
	color: #000;
}
.art-right-w3ls h2 {
	font-weight: 500;
	color: #ffffff;
}
button[type=submit] {
	background: #00a1ff;
	outline: none;
	color: #fff;
	font-size: 14px;
	font-weight: 400;
	border: none;
	padding: 11px 20px;
	letter-spacing: 1px;
	text-transform: capitalize;
	cursor: pointer;
	transition: 0.5s all;
	margin: 56px 0px 0px;
	-webkit-transition: 0.5s all;
	-o-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-ms-transition: 0.5s all;
}

button[type=submit]:hover {
	opacity: 0.8;
}

.remenber-me,
a.for {
	font-size: 14px;
	color: #fff;
	letter-spacing: 1px;
	text-transform: capitalize;
}

.remenber-me {
	padding-left: 22px;
}

.left-side-forget {
	float: left;
	position: relative;
}

.right-side-forget {
	float: right;
}

input.checked {
	display: inline-block;
	position: absolute;
	top: 5px;
	margin: 0px;
	cursor: pointer;
}

.w3layouts_more-buttn h3 {
	font-size: 18px;
	color: #fff;
	margin-top: 35px;
	font-weight: 500;
}

.w3layouts_more-buttn a {
	font-size: 14px;
	color: #ffffff;
	font-weight: 500;
	text-decoration: none;
	text-transform: capitalize;
	display: inline-block;
	letter-spacing: 2px;
	outline: none;
}
.popup-effect {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(152, 152, 152, 0.7);
	transition: opacity 0ms;
	visibility: hidden;
	opacity: 0;
	z-index: 99;
}

.popup-effect:target {
	visibility: visible;
	opacity: 1;
}

.popup {
	background: #eaeaeabf;
	border-radius: 4px;
	max-width: 430px;
	position: relative;
	margin: 11em auto;
	padding: 3em 2em;
	z-index: 999;
	text-align: center;
}

.popup .close {
	position: absolute;
	top: 5px;
	right: 15px;
	transition: all 200ms;
	font-size: 30px;
	font-weight: bold;
	text-decoration: none;
	color: #fff;
}

.popup .close:hover {
	color: #686de0;
}









/*--responsive--*/

@media(max-width:1920px) {
	.form-left-to-w3l input[type="email"],
	.form-left-to-w3l input[type="password"],
	.form-left-to-w3l input[type="text"] {
		font-size: 16px;
		padding: 1em 1em;
		margin: 0px 0px 30px;
	}
	.art-right-w3ls {
		padding: 19em 24em 8em 4em;
	}
	.art-right-w3ls h2 {
		font-size: 30px;
		margin-bottom: 48px;
	}
	h1.header-w3ls {
		font-size: 55px;
		letter-spacing: 3px;
	}
}

@media(max-width:1680px) {
	h1.header-w3ls {
		font-size: 53px;
	}
	.art-right-w3ls h2 {
		font-size: 28px;
	}
	.form-left-to-w3l input[type="email"],
	.form-left-to-w3l input[type="password"],
	.form-left-to-w3l input[type="text"] {
		font-size: 15px;
		margin: 0px 0px 26px;
	}
}

@media(max-width:1600px) {
	.art-right-w3ls {
		padding: 12em 24em 8em 4em;
	}
	h1.header-w3ls {
		font-size: 50px;
		letter-spacing: 3px;
		line-height: 66px;
	}
	.form-left-to-w3l input[type="email"],
	.form-left-to-w3l input[type="password"],
	.form-left-to-w3l input[type="text"] {
		font-size: 14px;
		padding: .8em 1em;
		margin: 0px 0px 25px;
	}
	.margin-zero input[type="password"] {
		margin: 0px !important;
	}
	.art-right-w3ls h2 {
		font-size: 28px;
		margin-bottom: 47px;
	}
}

@media(max-width:1440px) {
	.art-right-w3ls {
		padding: 6em 21em 8em 4em;
	}
	h1.header-w3ls {
		font-size: 48px;
	}
	.art-right-w3ls h2 {
		font-size: 26px;
		margin-bottom: 45px;
	}
}

@media(max-width:1366px) {
	button[type=submit] {
		margin: 50px 0px 0px;
	}
	.w3layouts_more-buttn h3 {
		font-size: 17px;
		margin-top: 33px;
	}
	.popup {
		margin: 8em auto;
	}
}

@media(max-width:1280px) {
	h1.header-w3ls {
		font-size: 46px;
		letter-spacing: 2px;
	}
}

@media(max-width:1080px) {
	.mid-class {
		flex-direction: column;
	}
	.art-right-w3ls {
		order: 2;
		padding: 2em 27em 2em 3em;
	}
	button[type=submit] {
		margin: 46px 0px 0px;
	}
	.art-right-w3ls h2 {
		font-size: 24px;
		margin-bottom: 41px;
	}
}

@media(max-width:1050px) {
	h1.header-w3ls {
		font-size: 44px;
	}
	.w3layouts_more-buttn h3 {
		font-size: 16px;
		margin-top: 31px;
	}
}

@media(max-width:1024px) {
	.art-right-w3ls {
		padding: 3em 27em 6em 4em;
	}
	.popup {
		margin: 3em auto;
	}
	.form-left-to-w3l input[type="email"],
	.form-left-to-w3l input[type="password"],
	.form-left-to-w3l input[type="text"] {
		padding: .7em .9em;
		margin: 0px 0px 22px;
	}
}

@media(max-width:991px) {
	h1.header-w3ls {
		font-size: 41px;
		line-height: 63px;
	}
	button[type=submit] {
		margin: 42px 0px 0px;
	}
}

@media(max-width:900px) {
	.form-left-to-w3l input[type="email"],
	.form-left-to-w3l input[type="password"],
	.form-left-to-w3l input[type="text"] {
		padding: .7em .7em;
	}
	.art-right-w3ls h2 {
		margin-bottom: 36px;
	}
}

@media(max-width:800px) {
	.art-right-w3ls {
		padding: 3em 19em 6em 4em;
	}
	h1.header-w3ls {
		font-size: 39px;
		line-height: 63px;
		letter-spacing: 1px;
	}
}

@media(max-width:768px) {
	.w3layouts_more-buttn h3 {
		font-size: 15px;
		margin-top: 28px;
	}
}

@media(max-width:767px) {
	button[type=submit] {
		padding: 10px 18px;
	}
	h1.header-w3ls {
		font-size: 37px;
	}
}

@media(max-width:736px) {
	.form-left-to-w3l input[type="email"],
	.form-left-to-w3l input[type="password"],
	.form-left-to-w3l input[type="text"] {
		margin: 0px 0px 20px;
	}
}

@media(max-width:667px) {
	.art-right-w3ls {
		padding: 3em 13em 6em 3em;
	}
}

@media(max-width:640px) {
	h1.header-w3ls {
		font-size: 35px;
	}
	.w3layouts_more-buttn h3 {
		margin-top: 25px;
	}
}

@media(max-width:600px) {
	.art-right-w3ls {
		padding: 3em 11em 6em 3em;
	}
	.art-right-w3ls h2 {
		font-size: 23px;
	}
}

@media(max-width:568px) {
	.form-left-to-w3l input[type="email"],
	.form-left-to-w3l input[type="password"],
	.form-left-to-w3l input[type="text"] {
		margin: 0px 0px 17px;
	}
}

@media(max-width:480px) {
	.art-right-w3ls {
		padding: 2.5em 6em 5em 3em;
	}
	button[type=submit] {
		margin: 37px 0px 0px;
	}
	.popup {
		max-width: 350px;
	}
	h1.header-w3ls {
		line-height: 54px;
	}
}

@media(max-width:440px) {
	h1.header-w3ls {
		font-size: 32px;
	}
	.art-right-w3ls h2 {
		margin-bottom: 31px;
	}
}

@media(max-width:414px) {
	.art-right-w3ls {
		padding: 2.5em 4em 4em 2em;
	}
	h1.header-w3ls {
		line-height: 41px;
		font-size: 30px;
	}
	.popup {
		max-width: 296px;
	}
}

@media(max-width:384px) {
	h1.header-w3ls {
		line-height: 46px;
		font-size: 28px;
	}
	.popup {
		max-width: 267px;
	}
}

@media(max-width:375px) {
	.art-right-w3ls h2 {
		font-size: 21px;
	}
}

@media(max-width:320px) {
	h1.header-w3ls {
		line-height: 42px;
	}
	.art-right-w3ls {
		padding: 2.5em 2em 4em 1em;
	}
	.popup {
		max-width: 239px;
		padding: 3em 1.5em;
	}
}


</style>