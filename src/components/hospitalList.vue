<template>
    <div id="hospitalList">
        <div class="hospital-box" @click="goToDetail()">
            <div class="hospital-img">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556125630141&di=4b0d7ef00c1e67911c361fbd6d387d45&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fee17dfb9bedea354f7082697c6b280ab.jpeg"/>
            </div>
            <div>
                <div class="hospital-name">舔狗宠物医院小和山分院</div>
                <div class="hospital-address">
                    <div><img src="../assets/img/location.png"/></div>
                    <div>浙江·杭州市留和路318号</div>
                </div>
                <div class="hospital-service">
                    <div class="service-box">疫苗</div>
                    <div class="service-box">洗澡</div>
                    <div class="service-box">美容</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hospitalList",
        props:{
            hospitalList: Array
        },
        methods:{
            //跳转医院详情
            goToDetail(){
                this.$router.push({path:'/hospitalDetail',name:'hospitalDetail'});
            }
        }
    }
</script>

<style scoped lang="less">
    .hospital-img{
        width: 80px;
        height: 80px;
        margin-right: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .hospital-box{
        display: flex;
        padding: 15px;
        margin: 10px;
        background: white;
        border-radius: 10px;
    }
    .hospital-name{
        font-size: 18px;
    }
    .hospital-address{
        font-size: 14px;
        color: #999999;
        margin-top: 5px;
        display: flex;
        img{
            height: 20px;
        }
    }
    .hospital-service{
        display: flex;
        margin-top: 10px;
    }
    .service-box{
        width: auto;
        border-radius: 10px;
        background: rgba(200,200,200,1);
        color: white;
        text-align: center;
        font-size: 12px;
        padding: 0 5px;
        margin-right: 5px;
    }
</style>
