<template>
    <div id="hospitalList">

        <div class="hospital-box" @click="goToDetail()">
            <div class="hospital-img">
                <img src="../assets/img/h2@3x.png"/></div>
            <div>
                <div class="hospital-name">舔狗宠物医院小和山分院</div>
                <div class="hospital-address">
                    <div><img src="../assets/img/location.png" style="border-radius: 15px"/></div>
                    <div>浙江·杭州市留和路318号</div>
                </div>
                <div class="hospital-service">
                    <div class="service-box">疫苗</div>
                    <div class="service-box">洗澡</div>
                    <div class="service-box">美容</div>
                </div>
            </div>
        </div>
        <div class="hospital-box" @click="goToDetail()">
            <div class="hospital-img">
                <img src="../assets/img/h1@3x.png"/></div>
            <div>
                <div class="hospital-name">舔狗宠物医院小和山分院</div>
                <div class="hospital-address">
                    <div><img src="../assets/img/location.png" style="border-radius: 15px"/></div>
                    <div>浙江·杭州市留和路318号</div>
                </div>
                <div class="hospital-service">
                    <div class="service-box">疫苗</div>
                    <div class="service-box">洗澡</div>
                    <div class="service-box">美容</div>
                </div>
            </div>
        </div>
        <div class="hospital-box" @click="goToDetail()">
            <div class="hospital-img">
                <img src="../assets/img/h3@3x.png"/></div>
            <div>
                <div class="hospital-name">舔狗宠物医院小和山分院</div>
                <div class="hospital-address">
                    <div><img src="../assets/img/location.png" style="border-radius: 15px"/></div>
                    <div>浙江·杭州市留和路318号</div>
                </div>
                <div class="hospital-service">
                    <div class="service-box">疫苗</div>
                    <div class="service-box">洗澡</div>
                    <div class="service-box">美容</div>
                </div>
            </div>
        </div>
        <div class="hospital-box" @click="goToDetail()">
            <div class="hospital-img">
                <img src="../assets/img/h4@3x.png"/></div>
            <div>
                <div class="hospital-name">舔狗宠物医院小和山分院</div>
                <div class="hospital-address">
                    <div><img src="../assets/img/location.png" style="border-radius: 15px"/></div>
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
        /*border-radius: 10px;*/
        background: #ECF2F7;
        /*border-radius: 15px;*/
        border-radius: 11.5px;
        text-align: center;
        font-size: 12px;
        padding: 0 5px;
        margin-right: 5px;
    }
</style>
