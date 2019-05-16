<template>
    <div id="add">
        <div style="height: 100px">
            <img style="width: 100%" src="../../assets/img/background.png"/>
            <div style="position: absolute;font-size: 22px;color: #FFFFFF;top:30px;left: 20px;font-weight: bold">添加宠物</div>
            <!--<div style="position: absolute;font-size: 18px;color: #FFFFFF;top:32px;right: 20px;">浙江科技学院西和公寓</div>-->
            <!--<div style="position: absolute;top: 36px;left: 156px"><img src="../../assets/img/addr.png" height="15" width="15"/></div>-->
        </div>
        <div>
            <mt-cell title="头像" to="//github.com" is-link>
                <span><img slot="icon" src="../../assets/img/dog@3x.png" style="width: 40px"></span>
            </mt-cell>
            <mt-cell title="姓名" to="//github.com" is-link>
                <span>请输入名字</span>
            </mt-cell>
            <mt-cell title="性别" is-link><span>公</span></mt-cell>
            <mt-cell title="品种" is-link><span>哈士奇</span></mt-cell>
            <mt-cell title="生日" is-link @click.native="showDatePicker"><span>{{selectedValue}}</span></mt-cell>
            <mt-cell title="是否绝育" is-link><span>否</span></mt-cell>
            <mt-button type="primary" style="width: 90%;margin: 5%;background: #70A1EA " @click="savePets()">保存</mt-button>
        </div>
        <!--<div>-->
            <!--<mt-datetime-picker-->
                    <!--v-model="pickerVisible"-->
                    <!--type="date"-->
                    <!--year-format="{value} 年"-->
                    <!--month-format="{value} 月"-->
                    <!--date-format="{value} 日">-->
            <!--</mt-datetime-picker>-->
            <!--<div class="pickerPop" @touchmove.prevent>-->
                <!--&lt;!&ndash; 年月日时分选择 &ndash;&gt;-->
                <!--<mt-datetime-picker-->
                        <!--lockScroll="true"-->
                        <!--ref="datePicker"-->
                        <!--v-model="dateVal"-->
                        <!--class="myPicker"-->
                        <!--type="datetime"-->
                        <!--year-format="{value}"-->
                        <!--month-format="{value}"-->
                        <!--date-format="{value}"-->
                        <!--hour-format="{value}"-->
                        <!--minute-format="{value}"-->
                        <!--second-format="{value}"-->
                        <!--@confirm="dateConfirm()">-->
                <!--</mt-datetime-picker>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "add-and-edit",
        data(){
            return{
                dateVal:'',
                selectedValue:'',
                pickerVisible:false,//日期选择器
            }
        },
        methods:{
            showDatePicker(){
                console.log(111);
                this.pickerVisible=true;
            },
            savePets(){
                console.log(222);
            }
        }
    }
</script>

<style scoped>

</style>
