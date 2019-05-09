<template>
    <div id="pets-list">
        <div style="display: flex;margin-bottom: 10px;background: white;padding:0 5px;border-radius: 5px" v-for="item in petsList" @click="choosePet(item)">
            <div style="padding-top:26px">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412455780&di=e1f847a07b72602db4c8c3b429edad70&imgtype=0&src=http%3A%2F%2Fwww.chachaba.com%2Fnews%2Fuploads%2F190507%2F5304_190507152704_1.jpg" alt="" style="height: 50px;width:50px;">
            </div>
            <div style="flex: 1;font-size: 14px;margin-left: 20px">
                <div style="border-bottom: 1px solid saddlebrown;display: flex;justify-content:space-between;padding: 10px">
                    <span style="line-height: 30px">{{item.name}}</span>
                    <mt-button v-if="!isReserve" style="background: aquamarine;width: 100px;height: 30px">健康记录</mt-button>
                </div>
                <div style="display: flex;justify-content:space-between;padding: 10px">
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
