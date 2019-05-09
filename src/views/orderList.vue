<template>
    <div id="order">
        <div style="display: flex;justify-content: space-around;margin-bottom: 10px;background: white;font-weight: bold;font-size: 16px">
            <div :class="type===1?'title-border':''" style="line-height: 30px" @click="changeType(1)">挂号</div>
            <div :class="type===2?'title-border':''" style="line-height: 30px" @click="changeType(2)">美容</div>
        </div>
        <div v-if="type===1">
            <div style="margin-bottom: 10px;padding: 10px;background: white" v-for="item in list">
                <div style="display: flex;justify-content: space-between">
                    <div>宠物：{{item.name}}</div>
                    <div>{{item.status}}</div>
                </div>
                <div>地址：{{item.address}}</div>
                <div>时间：{{item.date}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order-list",
        data(){
            return{
                type:1,//1.挂号 2.美容
                list:[
                    {
                        name:'兔子',
                        status:'过期',
                        address:'浙江省杭州市下城区文晖路107号',
                        date:'2017-04-23 10:00 ~ 10:30'
                    },
                    {
                        name:'兔子',
                        status:'过期',
                        address:'浙江省杭州市下城区文晖路107号',
                        date:'2017-04-24 10:00 ~ 10:30'
                    },
                    {
                        name:'兔子',
                        status:'过期',
                        address:'浙江省杭州市下城区文晖路107号',
                        date:'2017-04-25 10:00 ~ 10:30'
                    }
                ]
            }
        },
        methods:{
            changeType(val){
                this.type=val;
            }
        }
    }
</script>

<style scoped lang="less">
.title-border{
    border-bottom: 2px solid green;
}
</style>