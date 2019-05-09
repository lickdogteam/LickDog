<template>
    <div id="main-page">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <!--<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556208152704&di=62220fe501d076f1b60fd83e99e63f05&imgtype=0&src=http%3A%2F%2Fgc.zbj.com%2Fupimg%2F6%2F2016%2F0117%2F20160117130132_52469.jpg">-->
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557377157760&di=ad721031a79b9c234df1981b57df5f3e&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi2%2F1070877094%2FTB2AS9QXHBnpuFjSZFGXXX51pXa_%2521%25211070877094-0-headline_editor.jpg"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557377157760&di=ad721031a79b9c234df1981b57df5f3e&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi2%2F1070877094%2FTB2AS9QXHBnpuFjSZFGXXX51pXa_%2521%25211070877094-0-headline_editor.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557377157760&di=ad721031a79b9c234df1981b57df5f3e&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi2%2F1070877094%2FTB2AS9QXHBnpuFjSZFGXXX51pXa_%2521%25211070877094-0-headline_editor.jpg"/>
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
            <div @click="goRecord()">
                <div><img src="../assets/img/text.png" height="32" width="32"/></div>
                <div>宠物档案</div>
            </div>
        </div>
        <part-block-container :title="'养宠小知识'" :subTitle="'更多文章'" @clickSubTitle="handleClickSubTitle()" style="margin: 10px 0">
            <div class="block-item">
            <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557410629449&di=cf29bde83e2791892dd3398dc9678fa2&imgtype=0&src=http%3A%2F%2Fwww.bhsyzx.cn%2FStudent%2FUploadFiles_8721%2F201305%2F2013052812433897.jpg">
            </div>
            <div style="margin-left: 20px">
                <div class="title">寄生虫已到达战场，铲屎官驱虫迫在眉睫</div>
                <div>Are you ready?</div>
            </div>
        </div>
            <div class="block-item">
                <div>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557410629448&di=244ff660b3700c0bd59b64e305bea99c&imgtype=0&src=http%3A%2F%2Fg2.hexunimg.cn%2F2014-09-22%2F168723571.jpg">
                </div>
                <div style="margin-left: 20px">
                    <div class="title">干货|自己在家怎么给狗狗剪毛</div>
                    <div>你剪个试试</div>
                </div>
            </div>
            <div class="block-item">
                <div>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168005&di=c2e3a1d51156e93d4def4a590b7e2430&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201410%2F02%2F20141002011525_SPcLr.png">
                </div>
                <div style="margin-left: 20px">
                    <div class="title">手把手教你如何正确养猫</div>
                    <div>你会养猫吗</div>
                </div>
            </div>
            <div class="block-item">
                <div>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412168007&di=7b8753698a91b2dd0243c1106e5dcbab&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F14%2F20140714210050_M5BZc.jpeg">
                </div>
                <div style="margin-left: 20px">
                    <div class="title">养猫秘籍！你不能错过的养猫</div>
                    <div>无</div>
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
            },
            goRecord(){
                this.$router.push({path:'/record',name:'record'});
            },
            //
            handleClickSubTitle(){
              console.log('jump to!');
            }
        }
    }
</script>
<style scoped lang="less">
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
            width: 200px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            margin-top: 4px;
            font-size: 16px;
            color: black;
        }
    }
</style>
