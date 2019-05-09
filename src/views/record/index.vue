<template>
    <div id="record-index" style="margin: 5%">
        <div class="record-box" v-if="petsList.length===0">
            <img src="" alt="暂无宠物" style="margin: 10px">
        </div>
        <div v-else>
            <PetsList :petsList="petsList"/>
        </div>
        <mt-button type="primary" style="width: 90%;margin: 5%" @click="editPets()">添加宠物</mt-button>
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
            }
        },
        created(){

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