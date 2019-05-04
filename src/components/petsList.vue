<template>
    <div id="pets-list">
        <div style="display: flex;margin-bottom: 10px" v-for="item in petsList">
            <div>
                <img src="../assets/img/phone.png" alt="" style="">
            </div>
            <div style="flex: 1">
                <div style="border-bottom: 1px solid saddlebrown;display: flex;justify-content:space-between;padding: 10px">
                    <span style="line-height: 30px">{{item.name}}</span>
                    <mt-button style="background: aquamarine;width: 100px;height: 30px">健康记录</mt-button>
                </div>
                <div style="display: flex;justify-content:space-between;padding: 10px">
                    <span style="line-height: 30px">性别：{{item.sex}}</span>
                    <span style="line-height: 30px">品种：{{item.type}}</span>
                    <span style="line-height: 30px;color: aquamarine"><a href="">详细资料>></a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pets-list",
        props:{
            petsList:Array
        }
    }
</script>

<style scoped>

</style>