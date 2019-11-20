<template>
    <div class="container">
    <Table border :columns="columns12" :data="data">
        <template slot-scope="{ row }" slot="name">
            <strong>{{ row.filmname }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(row,index)">详情</Button>
            <Button type="success" size="small" @click="remove(index)">支付</Button>
            <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
    </Table>
    <Button type="primary" style="margin-top: 30px" @click="logout">退出登录</Button>
     <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        >
        <p>影片名--{{filminfo.filmname}}</p>
        <p>下单时间--{{time}}</p>
        <p>票价:--{{filminfo.price}}</p>
    </Modal>
</div>
</template>
<script>
import storage from '../../utils/storage.js'
import session from '../../utils/sessionStorage'
import {reqOrder} from '../../api'
import {formatDate} from '../../utils/date.js'
import {mapActions} from 'vuex'
   export default {
    props:{
        
    },
        data () {
            return {
                time:'',
                filminfo:{},
                modal1:false,
                columns12: [
                    {
                        title: '订单信息',
                        slot: 'name'
                    },
                    {
                        title: '票价',
                        key: 'price'
                    },
                    {
                        title: '数量',
                        key: 'num'
                    },
                    {
                        title: '时间',
                        key: 'time',
                        render:(h,param)=>{
                            return h('div',formatDate(param.row.time))   
                        }
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 225,
                        align: 'center'
                    }
                ],
                data: []
            }
        },
        methods: {
            ...mapActions(['unsetUser']),
            show(row,index){
                this.filminfo=row
                this.time=formatDate(row.time)
                this.modal1=true
            },
            ok(){
                this.modal1=false
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            // 退出登录移除本地存储与vuex用户信息存储
            logout(){
                storage.remove('username')
                this.unsetUser()
                this.$router.back('-1')
            }
        },
        created(){
            //获取session用户信息
            const userSession=session.get('userinfo')
            this.$store.dispatch('setUserId',userSession._id)
        },
        async mounted(){
            // 获取本地用户信息是否存在
            const userinfo=storage.get('username')
             // 获取vuex用户信息是否存在
            const userId=this.$store.state.userId
            if(userinfo||userId){
                const orderid=userId||userinfo._id
                const result=await reqOrder(orderid)
                this.data=result.data
            }else{
                console.log('未登录')
            }
        },
        beforeUpdate(){

        },
        updated(){
            this.$router.replace('/profile/info')
        }
    }
</script>
<style scoped>
    .container{
        width: 100%;height: 800px;position: relative;
    }
</style>