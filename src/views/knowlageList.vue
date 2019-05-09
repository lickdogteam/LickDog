<template>
    <div id="knowlage">
        <div>
            <mt-search
                    v-model="keywords"
                    cancel-text="取消"
                    placeholder="搜索">
            </mt-search>
        </div>
        <div style="padding: 10px">
            <ul
                    v-infinite-scroll="loadMore"
                    :infinite-scroll-disabled="loading"
                    :infinite-scroll-distance="maxNum">
                <li class="block-item" v-for="item in list">
                    <div>
                        <img :src="item.imgPath">
                    </div>
                    <div style="margin-left: 20px;position: relative">
                        <div class="title">{{item.title}}</div>
                        <div style="font-size: 14px;height: 20px;position: absolute;bottom: 0">{{item.descrip}}</div>
                    </div>
                </li>
            </ul>
            <!--<div class="block-item" v-for="item in list">-->
                <!--<div>-->
                    <!--<img :src="item.imgPath">-->
                <!--</div>-->
                <!--<div style="margin-left: 20px;position: relative">-->
                    <!--<div class="title">{{item.title}}</div>-->
                    <!--<div style="font-size: 14px;height: 20px;position: absolute;bottom: 0">{{item.descrip}}</div>-->
                <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import { InfiniteScroll, Search } from 'mint-ui';
    export default {
        name: "knowlage-list",
        components:{
            InfiniteScroll,
            Search
        },
        data(){
            return{
                list:[
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
                loading:false,
                maxNum:10,
                keywords:''
            }
        },
        methods:{
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                        this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            }
        }
    }
</script>

<style scoped lang="less">
    .block-item{
        display: flex;
        border-bottom: 1px solid rgba(187,187,187,0.5);
        padding: 10px 0;
        font-size: 14px;
        /*color: #999999;*/
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
            font-size: 18px;
            font-weight: bold;
            color: black;
        }
    }
    /deep/.mint-search{
        height: auto;
    }
</style>