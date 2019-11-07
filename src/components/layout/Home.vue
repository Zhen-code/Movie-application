<template>
 <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%',top:'0px',zIndex:'200'}">
                <Menu mode="horizontal" active-name="1" :style="{background:'#ccc'}">
                    <div class="layout-nav">
                        <MenuItem name="1" class="menu-item">
 <router-link :to="{path:'/homepage'}"exact><Icon type="ios-navigate"></Icon>电影</router-link>   
                        </MenuItem>
                        <MenuItem name="2" class="menu-item">
<router-link :to="{path:'/search'}"exact> <Icon type="ios-keypad"></Icon>搜索</router-link>
                        </MenuItem>
                        <MenuItem name="3" class="menu-item">
<router-link :to="{path:'/profile'}"exact><Icon type="ios-analytics"></Icon>我的</router-link>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '10px 20px', background: '#fff', height: '100%',position:'relative'}">
                <router-view/>
            </Content>
            <Footer class="layout-footer-center">推荐使用Chrome浏览器浏览</Footer>
        </Layout>
    </div>
</template>

<script>
window.onload= function(){
  var menuItem= document.getElementsByClassName('menu-item')
	for (var i=0;i< menuItem.length;i++) {
		menuItem[i].onmouseenter=function (){
			this.style.fontSize='26px'
		}
		menuItem[i].onmouseleave=function(){
			this.style.fontSize='20px'
		}
	}
}
export default {
    methods:{
    	goTo(path){
    		this.$route.replace(path)
    	}
    }
}
</script>

<style scoped>
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
    	position: relative;
        width: 100%;
        margin: 0 auto;
        margin-right: 20px;
        display: flex;
        text-align: center;
        height: 60px;
        align-items: center;
    }
    .menu-item{
    	font-size: 20px;
    	float: left;
    	width: 33%;
    	color: #000000
    }
    .layout-footer-center{
        text-align: center;
    }
    .active{
    	color: black;
    }
</style>
