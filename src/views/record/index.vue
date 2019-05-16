<template>
    <div id="record-index">
        <div style="height: 100px">
            <img style="width: 100%" src="../../assets/img/background.png"/>
            <div style="position: absolute;font-size: 22px;color: #FFFFFF;top:30px;left: 20px;font-weight: bold">我的宠物</div>
            <!--<div style="position: absolute;font-size: 18px;color: #FFFFFF;top:32px;right: 20px;">浙江科技学院西和公寓</div>-->
            <!--<div style="position: absolute;top: 36px;left: 156px"><img src="../../assets/img/addr.png" height="15" width="15"/></div>-->
        </div>
        <div class="record-box" v-if="petsList.length===0">
            <img src="" alt="暂无宠物" style="margin: 10px">
        </div>
        <div v-else>
            <PetsList :petsList="petsList" :isReserve="isReverse"/>
        </div>
        <mt-button type="primary" style="width: 90%;margin: 5%;background: #70A1EA " @click="editPets()">添加宠物</mt-button>
    </div>
</template>

<script>
    import PetsList from "../../components/petsList.vue"
    export default {
        name: "index",
        components:{
            PetsList
        },
        data(){
            return{
                petsList:[
                    {
                        name:'rabbit1号',
                        sex:'公',
                        type:'哈士奇'
                    },
                    {
                        name:'rabbit2号',
                        sex:'公',
                        type:'哈士奇'
                    },
                    {
                        name:'rabbit3号',
                        sex:'公',
                        type:'哈士奇'
                    },
                ],
                isReverse:''
            }
        },
        created(){
            console.log(this.$route.params,'params');
            this.isReserve=this.$route.params.isReserve?this.$route.params.isReserve:false;
            console.log(this.isReserve);
        },
        methods:{
            editPets(){
                this.$router.push({path:'/record/edit'})
            }
        }
    }
</script>

<style scoped>
    .record-box{
        padding: 5%;
    }
</style>
