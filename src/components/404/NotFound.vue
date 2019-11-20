<template>
	<div>
  <b-jumbotron>
    <template v-slot:header>当前页面未找到</template>

    <template v-slot:lead>
     <span>请检查当前路径是否有误</span>
    </template>
    <hr class="my-4">
    <b-button variant="primary" href="#" @click="goback">返回首页</b-button>
  </b-jumbotron>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
	},
	methods:{
		goback(){
			this.$router.go(-1)
		}
	}
	}
</script>
<style scoped></style>