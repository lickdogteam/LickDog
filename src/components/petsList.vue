<template>
    <div id="pets-list">
        <div style="display: flex;margin-bottom: 10px;background: white;padding:0 15px;border-radius: 5px" v-for="item in petsList" @click="choosePet(item)">
            <div style="padding-top:16px">
                <img src="../assets/img/dog@3x.png" alt="" style="height: 50px;width:50px;">
            </div>
            <div style="flex: 1;font-size: 14px;margin-left: 20px">
                <div style="display: flex;justify-content:space-between;padding: 5px">
                    <span style="line-height: 30px">{{item.name}}</span>
                    <div style="padding-top: 6px"><img style="width: 15px" src="../assets/img/female.png"/></div>
                    <mt-button v-if="!isReserve" style="background: aquamarine;width: 100px;height: 30px">健康记录</mt-button>
                </div>
                <div style="display: flex;justify-content:space-between;padding: 5px">
                    <span style="line-height: 30px">性别：{{item.sex}}</span>
                    <span style="line-height: 30px">品种：{{item.type}}</span>
                    <span v-if="!isReserve" style="line-height: 30px"><a>详细资料>></a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pets-list",
        props:{
            petsList:Array,
            isReserve:Boolean
        },
        created(){
            console.log(this.isReserve,'111');
        },
        methods:{
            //选择宠物
            choosePet(pet){
                if(sessionStorage.getItem('isReserve')){
                    sessionStorage.setItem('petName',pet.name);
                    this.$router.push({path:'/confirm',name:'confirm'});
                }
            }
        }
    }
</script>

<style scoped lang="less">
    #pets-list{
        img{
            border-radius: 25px;
        }
    }
</style>
