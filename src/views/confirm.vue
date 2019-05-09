<template>
    <div id="confirm">
        <div class="doctor">
            <div class="doctor-info-box">
                <div class="info-top">
                    <div style="align-self: center">
                        <img class="avatar" style="align-self: center" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556125760355&di=51d5dc16d6610075d9bf1e258da63196&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_ls%2F0%2F7969894780_640330%2F0"/>
                    </div>
                    <div style="align-self: center;margin-left: 20px">
                        <div>陈钰琪 医生</div>
                        <div class="doctor-info">
                            <div><img src="../assets/img/age.png" style="height: 18px"/></div>
                            <div style="margin: 0 10px 0 5px">医龄1年</div>
                            <div><img src="../assets/img/reserve.png" style="height: 18px"/></div>
                            <div style="margin: 0 10px 0 5px">预约25次</div>
                        </div>
                    </div>
                </div>
                <div class="good-box">
                    <div class="good-title">医生擅长：</div>
                    <div class="good-content">猫内科疾病，营养相关，行为相关问题</div>
                </div>
                <div class="line-r"></div>
                <div class="good-box">
                    <div class="good-title">就诊地址：</div>
                    <div class="good-content">留和路318号</div>
                    <div style="width: 50px;display: flex">
                        <div class="line-c"></div>
                        <div style="display: flex"><img style="align-self: center" src="../assets/img/location.png"/></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list-item" @click="goChoosePet">
                <div class="title">宠物</div>
                <div style="width: 100px;text-align: right">{{petName}}&nbsp;</div>
                <div> > </div>
            </div>
            <div class="list-item">
                <div class="title">称呼</div>
                <div>HelloWorld</div>
            </div>
            <div class="list-item">
                <div class="title">联系方式</div>
                <div>13758257159</div>
            </div>
        </div>
        <div style="text-align: center">
            <button @click="goConfirm">确认预约</button>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        name: "confirm",
        data(){
            return{
                petName:sessionStorage.getItem('petName')?sessionStorage.getItem('petName'):'点击选择'
            }
        },
        methods:{
            // 选择宠物
            goChoosePet(){
                sessionStorage.setItem('isReserve',true);
                // this.$router.push({path:'/record',name:'record',params:{isReserve:true}})
                this.$router.push({path:'/record',name:'record'})
            },
            // 确认预约
            goConfirm(){
                console.log('12212');
                let that=this;
                // Toast('预约成功');
                // this.$router.push({path:'/',name:'index'});
                // window.$common.post('/table/reservation', {
                //     "args":{
                //         "reservationType":1
                //     }
                // })
                // .then(function (response) {
                //     console.log(response);
                //     Toast('预约成功');
                //     this.$router.push({path:'/',name:'index'});
                // })
                // .catch(function (error) {
                //     console.log(error);
                // });

                let args = {
                    "reservationType":1
                };
                window.$common.post("/table/reservation",args,res =>{
                    Toast('预约成功');
                    that.$router.push({path:'/',name:'index'});
                })
            },
        }
    }
</script>

<style scoped lang="less">
    .doctor{
        background: white;
    }
    .doctor-info-box{
        background: white;
        padding: 20px;
    }
    .info-top{
        display: flex;
    }
    .avatar{
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
    .doctor-info{
        margin-top: 5px;
        display: flex;
        font-size: 14px;
        color: #999999;
    }
    .good-box{
        display: flex;
        font-size: 14px;
        margin-top: 10px;
        line-height: 32px;
    }
    .good-title{
        width: 80px;
    }
    .good-content{
        flex: 1;
        color: #999999;
    }
    .line-r{
        width: 100%;
        border-bottom: 1px solid rgba(187,187,187,0.5);
        margin: 15px auto;
    }
    .line-c{
        height: 60%;
        align-self: center;
        margin-right: 20px;
        border-left: 1px solid rgba(187,187,187,1);
    }
    .list{
        margin-top: 10px;
        padding: 20px;
        background: white;
    }
    .list-item{
        display: flex;
        color: #999999;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid rgba(187,187,187,0.5);;
        .title{
            /*color: #999999;*/
            color: black;
            flex: 1;
        }
    }
    button{
        width: 80%;
        background:rgba(77,162,248,0.8);
        border: none;
        color: white;
        border-radius: 20px;
        height: 40px;
        line-height: 40px;
        margin-top: 20px;
        outline: none;
    }
</style>
