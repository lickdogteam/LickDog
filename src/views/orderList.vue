<template>
    <div id="order">
        <div style="height: 100px">
            <img style="width: 100%" src="../assets/img/background.png"/>
            <div style="position: absolute;font-size: 22px;color: #FFFFFF;top:30px;left: 20px;font-weight: bold">订单列表</div>
            <!--<div style="position: absolute;font-size: 18px;color: #FFFFFF;top:32px;right: 20px;">浙江科技学院西和公寓</div>-->
            <!--<div style="position: absolute;top: 36px;left: 156px"><img src="../assets/img/addr.png" height="15" width="15"/></div>-->
        </div>
        <div style="display: flex;justify-content: space-around;margin-bottom: 10px;background: white;font-weight: bold;font-size: 16px">
            <div :class="type===1?'title-border':''" style="line-height: 30px" @click="changeType(1)">挂号</div>
            <div :class="type===2?'title-border':''" style="line-height: 30px" @click="changeType(2)">美容</div>
        </div>
        <div v-if="type===1">
            <div style="margin-bottom: 10px;padding: 10px;background: white;display: flex" v-for="item in list">
                <div style="margin-right: 10px"><img :src="item.imgUrl" alt="" style="height: 60px;width: 60px;border-radius: 15px"></div>
                <div style="font-size: 13px">
                    <div style="display: flex;justify-content: space-between;">
                        <div>宠物：{{item.name}}</div>
                        <div>{{item.status}}</div>
                    </div>
                    <div style="margin-top: 5px">地址：{{item.address}}</div>
                    <div style="margin-top: 5px">时间：{{item.date}}</div>
                </div>
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
                        imgUrl:require("../assets/img/h1.png"),
                        name:'兔子',
                        status:'过期',
                        address:'浙江省杭州市下城区文晖路107号',
                        date:'2017-04-23 10:00 ~ 10:30'
                    },
                    {
                        imgUrl:require("../assets/img/h2.png"),
                        name:'兔子',
                        status:'过期',
                        address:'浙江省杭州市下城区文晖路107号',
                        date:'2017-04-24 10:00 ~ 10:30'
                    },
                    {
                        imgUrl:require("../assets/img/h3.png"),
                        name:'兔子',
                        status:'过期',
                        address:'浙江省杭州市下城区文晖路107号',
                        date:'2017-04-25 10:00 ~ 10:30'
                    },
                    {
                        imgUrl:require("../assets/img/h4.png"),
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