<template>
    <div id="message">
        <div style="height: 100px">
            <img style="width: 100%" src="../assets/img/background.png"/>
            <div style="position: absolute;font-size: 22px;color: #FFFFFF;top:30px;left: 20px;font-weight: bold">个人信息</div>
            <!--<div style="position: absolute;font-size: 18px;color: #FFFFFF;top:32px;right: 20px;">浙江科技学院西和公寓</div>-->
            <!--<div style="position: absolute;top: 36px;left: 156px"><img src="../assets/img/addr.png" height="15" width="15"/></div>-->
        </div>
        <div style="display: flex;padding: 10px;margin-bottom: 10px;background: white">
            <div><img src="../../src/assets/img/avatar.jpg" alt="" style="width: 50px;height: 50px;border-radius: 25px"></div>
            <div style="margin-left: 10px;position: relative">
                <div>冯驰坤</div>
                <div style="position: absolute;bottom: 0">137****3921</div>
            </div>
        </div>
        <part-block-container :title="'我的订单'" :subTitle="'更多'" @clickSubTitle="getMore()" style="margin: 10px 0">
            <div class="message-display" style="line-height: 30px">
                <div>宠物：{{list[0].name}}</div>
                <div style="height: 30px;width: 40px;">挂号</div>
                <div>{{list[0].status}}</div>
            </div>
            <div class="message-display">
                <div>地址：{{list[0].address}}</div>
            </div>
            <div class="message-display">
                <div>时间：{{list[0].date}}</div>
            </div>
        </part-block-container>
        <div style="background: white;padding: 10px 20px">
            <div class="message-display" style="border-bottom: 1px solid rgba(187,187,187,0.5);;padding-bottom: 10px">
                <div>其他</div>
            </div>
            <div class="message-display"  style="margin-top: 10px">
                <div>练习客服：45898745678765</div>
            </div>
        </div>
    </div>
</template>

<script>
    import partBlockContainer from '../components/partBlockContainer.vue';
    export default {
        name: "message",
        components:{
            partBlockContainer
        },
        data(){
            return{
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
                ],
                memberId:1
            }
        },
        created(){
            this.getOrderList();
        },
        methods:{
            getOrderList(){
                let args = {
                    "memberId":this.memberId
                };
                // window.$common.post("/table/reservation",args,res =>{
                //     console.log(res);
                //     // this.list=res.
                // })
            },
            getMore(){
                this.$router.push({path:'/message/order',name:'orderList'});
            }
        }
    }
</script>

<style scoped lang="less">
.message-display{
    display: flex;
    justify-content: space-between;
}
</style>