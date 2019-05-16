<template>
    <div id="main-page">
        <!--<img src="../assets/img/background.png" alt="" style="height: 100px;display: block">-->
        <!--<div class="main-title-head">-->
            <!--<div style="font-size: 22px;color: #FFFFFF;line-height: 31px;margin-right: 140px">舔狗网</div>-->
            <!--<div style="font-size: 17px;color: #FFFFFF;line-height: 31px;display: flex;">-->
                <!--<div><img src="../assets/img/position.png" style="height:16px;width: 16px " alt=""></div>-->
                <!--<div>浙江科技学院</div>-->
            <!--</div>-->
        <!--</div>-->
        <div style="height: 100px">
            <img style="width: 100%" src="../assets/img/background.png"/>
            <div style="position: absolute;font-size: 22px;color: #FFFFFF;top:30px;left: 20px;font-weight: bold">舔狗</div>
            <div style="position: absolute;font-size: 18px;color: #FFFFFF;top:32px;right: 20px;">浙江科技学院西和公寓</div>
            <div style="position: absolute;top: 36px;left: 156px"><img src="../assets/img/addr.png" height="15" width="15"/></div>
        </div>
        <div class="main-title-img">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in bannerList">
                    <!--<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556208152704&di=62220fe501d076f1b60fd83e99e63f05&imgtype=0&src=http%3A%2F%2Fgc.zbj.com%2Fupimg%2F6%2F2016%2F0117%2F20160117130132_52469.jpg">-->
                    <img style="border-radius: 20px;" :src="item.imgUrl"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="main-entry-box">
            <div @click="goReserve()">
                <div><img src="../assets/img/doctor.png" height="60" width="60"/></div>
                <div class="entry-color">预约挂号</div>
            </div>
            <div>
                <div><img src="../assets/img/shower.png" height="60" width="60"/></div>
                <div class="entry-color">预约美容</div>
            </div>
            <div @click="goRecord()">
                <div><img src="../assets/img/foster.png" height="60" width="60"/></div>
                <div class="entry-color">宠物档案</div>
            </div>
            <div @click="goMessage()">
                <div><img src="../assets/img/pet-files.png" height="60" width="60"/></div>
                <div class="entry-color">个人中心</div>
            </div>
        </div>
        <part-block-container :title="'养宠小知识'" :subTitle="'更多文章'" @clickSubTitle="handleClickSubTitle()" style="margin: 10px 0;font-size: 18px;color:#414141">
            <div class="block-item" v-for="item in knowlageList">
                <div>
                    <img :src="item.imgPath">
                </div>
                <div style="margin-left: 20px;position: relative">
                    <div class="title">{{item.title}}</div>
                    <div style="font-size: 14px;height: 20px;position: absolute;bottom: 0">{{item.descrip}}</div>
                </div>
            </div>
        </part-block-container>
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
                searchValue:'',
                bannerList:[
                    {
                        imgUrl:require("../assets/img/banner.png")
                    },
                    {
                        imgUrl:require("../assets/img/banner@2x.png")
                    },
                    {
                        imgUrl:require("../assets/img/banner@3x.png")
                    },
                ],
                knowlageList:[
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557410629448&di=244ff660b3700c0bd59b64e305bea99c&imgtype=0&src=http%3A%2F%2Fg2.hexunimg.cn%2F2014-09-22%2F168723571.jpg',
                        title:'干货|自己在家怎么给狗狗剪毛',
                        descrip:'你剪个试试'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168005&di=c2e3a1d51156e93d4def4a590b7e2430&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201410%2F02%2F20141002011525_SPcLr.png',
                        title:'手把手教你如何正确养猫',
                        descrip:'你会养猫吗'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168007&di=7b8753698a91b2dd0243c1106e5dcbab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F14%2F20140714210050_M5BZc.jpeg',
                        title:'养猫秘籍！你不能错过的养猫',
                        descrip:'进来玩啊'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557410629448&di=244ff660b3700c0bd59b64e305bea99c&imgtype=0&src=http%3A%2F%2Fg2.hexunimg.cn%2F2014-09-22%2F168723571.jpg',
                        title:'干货|自己在家怎么给狗狗剪毛',
                        descrip:'你剪个试试'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168005&di=c2e3a1d51156e93d4def4a590b7e2430&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201410%2F02%2F20141002011525_SPcLr.png',
                        title:'手把手教你如何正确养猫',
                        descrip:'你会养猫吗'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168007&di=7b8753698a91b2dd0243c1106e5dcbab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F14%2F20140714210050_M5BZc.jpeg',
                        title:'养猫秘籍！你不能错过的养猫',
                        descrip:'进来玩啊'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557410629448&di=244ff660b3700c0bd59b64e305bea99c&imgtype=0&src=http%3A%2F%2Fg2.hexunimg.cn%2F2014-09-22%2F168723571.jpg',
                        title:'干货|自己在家怎么给狗狗剪毛',
                        descrip:'你剪个试试'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168005&di=c2e3a1d51156e93d4def4a590b7e2430&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201410%2F02%2F20141002011525_SPcLr.png',
                        title:'手把手教你如何正确养猫',
                        descrip:'你会养猫吗'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168007&di=7b8753698a91b2dd0243c1106e5dcbab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F14%2F20140714210050_M5BZc.jpeg',
                        title:'养猫秘籍！你不能错过的养猫',
                        descrip:'进来玩啊'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168005&di=c2e3a1d51156e93d4def4a590b7e2430&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201410%2F02%2F20141002011525_SPcLr.png',
                        title:'手把手教你如何正确养猫',
                        descrip:'你会养猫吗'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168007&di=7b8753698a91b2dd0243c1106e5dcbab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F14%2F20140714210050_M5BZc.jpeg',
                        title:'养猫秘籍！你不能错过的养猫',
                        descrip:'进来玩啊'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557410629448&di=244ff660b3700c0bd59b64e305bea99c&imgtype=0&src=http%3A%2F%2Fg2.hexunimg.cn%2F2014-09-22%2F168723571.jpg',
                        title:'干货|自己在家怎么给狗狗剪毛',
                        descrip:'你剪个试试'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168005&di=c2e3a1d51156e93d4def4a590b7e2430&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201410%2F02%2F20141002011525_SPcLr.png',
                        title:'手把手教你如何正确养猫',
                        descrip:'你会养猫吗'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168007&di=7b8753698a91b2dd0243c1106e5dcbab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F14%2F20140714210050_M5BZc.jpeg',
                        title:'养猫秘籍！你不能错过的养猫',
                        descrip:'进来玩啊'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168005&di=c2e3a1d51156e93d4def4a590b7e2430&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201410%2F02%2F20141002011525_SPcLr.png',
                        title:'手把手教你如何正确养猫',
                        descrip:'你会养猫吗'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168007&di=7b8753698a91b2dd0243c1106e5dcbab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F14%2F20140714210050_M5BZc.jpeg',
                        title:'养猫秘籍！你不能错过的养猫',
                        descrip:'进来玩啊'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557410629448&di=244ff660b3700c0bd59b64e305bea99c&imgtype=0&src=http%3A%2F%2Fg2.hexunimg.cn%2F2014-09-22%2F168723571.jpg',
                        title:'干货|自己在家怎么给狗狗剪毛',
                        descrip:'你剪个试试'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168005&di=c2e3a1d51156e93d4def4a590b7e2430&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201410%2F02%2F20141002011525_SPcLr.png',
                        title:'手把手教你如何正确养猫',
                        descrip:'你会养猫吗'
                    },
                    {
                        imgPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168007&di=7b8753698a91b2dd0243c1106e5dcbab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F14%2F20140714210050_M5BZc.jpeg',
                        title:'养猫秘籍！你不能错过的养猫',
                        descrip:'进来玩啊'
                    },
                ],
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
            },
            goRecord(){
                sessionStorage.removeItem('isReserve');
                this.$router.push({path:'/record',name:'record'});
            },
            //
            handleClickSubTitle(){
                console.log('jump to!');
                this.$router.push({path:'/knowlageList',name:'konwlageList'});
            },
            goMessage(){
                this.$router.push({path:'/message/index',name:'messageIndex'});
            }
        }
    }
</script>
<style scoped lang="less">
    .main-page{
        position: relative;
    }
    .main-title-head{
        position: absolute;
        padding: 20px;
        display: flex;
        top:0;
    }
    .main-title-img{
        background: white;
        padding: 10px 20px;
    }
    .entry-color{
        font-size: 14px;
        color: #414141;
    }
    .lkd-swiper-img-container{
        /*height: 200px;*/
        width: 100%;
    }
    .mint-swipe{
        height: 140px;
    }
    .mint-swipe img{
        width: 100%;
        height: auto;
    }
    .main-entry-box{
        background: white;
        padding: 0 20px 10px 20px;
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .block-item{
        display: flex;
        border-bottom: 1px solid rgba(187,187,187,0.5);
        padding: 10px 0;
        font-size: 14px;
        color: #999999;
        img{
            width: 50px;
            height: 50px;
            border-radius: 5px;
        }
        .title{
            /*width: 200px;*/
            overflow: hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            /*margin-top: 4px;*/
            font-size: 16px;
            color: black;
        }
    }
    /deep/.container{
        padding: 20px;
    }
</style>
