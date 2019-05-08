<template>
    <div id="partBlockContainer">
        <div class="container">
            <div class="title-container" @click="subtitleJump()">
                <div class="title-style">{{title}}</div>
                <div class="subtitle-container" v-if="subTitle">
                    <span class="subTitle">{{subTitle}}</span>
                </div>
            </div>
            <div class="body-container">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'partBlockContainer',
        props: {
            title:{
                require:true,
            },
            subTitle:{
                require:true,
            }
        },
        data () {
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {
            subtitleJump(){
                this.$emit("clickSubTitle")
            }
        }
    }

    /**
     * Attributes
     * 参数 / 说明 / 类型 / 可选值 / 默认值
     * title / 主标题 / String / -- / ""
     * subTitle / 副标题 / String / -- / ""
     *
     * Events
     * 事件名称 / 说明 / 回调参数
     * clickSubTitle / 点击副标题触发 / --
     */
</script>
<style scoped>
    .container{
        padding: 10px;
        background-color: #fff;
    }
    .title-container{
        display: flex;
        justify-content: space-between;
    }
    .subtitle-container{
        position: relative;
    }
    .subTitle{
        font-size: 10px;
        padding-right: 5px;
        color: #777;
    }
    .subTitle:after{
        content: '';
        position: relative;
        top: -1px;
        left: 3px;
        height: 0;
        width: 0;
        display: inline-block;
        padding: 2px;
        border: 1px solid;
        border-color:#777 #777 transparent transparent;
        transform:rotate(45deg);
        -ms-transform:rotate(45deg); 	/* IE 9 */
        -moz-transform:rotate(45deg); 	/* Firefox */
        -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
        -o-transform:rotate(45deg); 	/* Opera */
    }
    .body-container{
        margin-top: 12px;
    }
</style>
