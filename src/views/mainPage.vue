<template>
    <div id="main-page">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <!--<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556208152704&di=62220fe501d076f1b60fd83e99e63f05&imgtype=0&src=http%3A%2F%2Fgc.zbj.com%2Fupimg%2F6%2F2016%2F0117%2F20160117130132_52469.jpg">-->
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556125630141&di=4b0d7ef00c1e67911c361fbd6d387d45&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fee17dfb9bedea354f7082697c6b280ab.jpeg"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556125697662&di=7a19ef9d7eb366411929aa80eebc96b1&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F8325030993%2F640" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556125760355&di=51d5dc16d6610075d9bf1e258da63196&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_ls%2F0%2F7969894780_640330%2F0"/>
            </mt-swipe-item>
        </mt-swipe>
        <div class="main-entry-box">
            <div @click="goReserve()">
                <div><img src="../assets/img/register.png" height="32" width="32"/></div>
                <div>预约挂号</div>
            </div>
            <div>
                <div><img src="../assets/img/surface.png" height="32" width="32"/></div>
                <div>预约美容</div>
            </div>
            <div>
                <div><img src="../assets/img/text.png" height="32" width="32"/></div>
                <div>宠物档案</div>
            </div>
        </div>
        <!--<part-block-container :title="'附近医院'">-->
            <!--<div>2222</div>-->
        <!--</part-block-container>-->
        <!--<mt-search v-model="searchValue"></mt-search>-->
    </div>
</template>
<script>
    import partBlockContainer from '../components/partBlockContainer.vue';
    export default {
        name: 'mainPage',
        props: {},
        components:{
            partBlockContainer
        },
        data () {
            return {
                searchValue:''
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            //预约挂号
            goReserve(){
                this.$router.push({path:'/reservation',name:'reservation'});
            }
        }
    }
</script>
<style scoped>
    .lkd-swiper-img-container{
        height: 200px;
        width: 100%;
    }
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe img{
        width: 100%;
        height: auto;
    }
    .main-entry-box{
        background: white;
        padding: 20px 0;
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
</style>
