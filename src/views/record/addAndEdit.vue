<template>
    <div id="add">
        <div>
            <mt-cell title="头像" to="//github.com" is-link>
                <span><img slot="icon" src="../../assets/img/phone.png" width="24" height="24"></span>
            </mt-cell>
            <mt-cell title="姓名" to="//github.com" is-link>
                <span>请输入名字</span>
            </mt-cell>
            <mt-cell title="性别" is-link><span>公</span></mt-cell>
            <mt-cell title="品种" is-link><span>哈士奇</span></mt-cell>
            <mt-cell title="生日" is-link @click.native="showDatePicker"><span>{{selectedValue}}</span></mt-cell>
            <mt-cell title="是否绝育" is-link><span>否</span></mt-cell>
            <mt-button type="primary" style="width: 90%;margin: 5%" @click="savePets()">保存</mt-button>
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