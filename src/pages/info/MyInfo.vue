<template>
    <div class="container">
    <Table border :columns="columns12" :data="data">
        <template slot-scope="{ row }" slot="name">
            <strong>{{ row.filmname }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
            <Button type="success" size="small" @click="remove(index)">支付</Button>
            <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
    </Table>
    <Button type="primary" style="margin-top: 30px">退出登录</Button>
</div>
</template>
<script>
import storage from '../../utils/storage.js'
import {reqOrder} from '../../api'
import {formatDate} from '../../utils/date.js'
   export default {
    props:{
        
    },
        data () {
            return {
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
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        },
        created(){
           
        },
        async mounted(){
            const userinfo=storage.get('username')
            const orderid=userinfo._id
            const result=await reqOrder(orderid)
            this.data=result.data
             console.log(this.$store.state.userId)
        }
    }
</script>
<style scoped>
    .container{
        width: 100%;height: 800px;position: relative;
    }
</style>