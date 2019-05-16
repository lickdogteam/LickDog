<template>
    <div id="reservation">
        <div style="height: 100px">
            <img style="width: 100%" src="../assets/img/background.png"/>
            <div style="position: absolute;font-size: 22px;color: #FFFFFF;top:30px;left: 20px;font-weight: bold">全部医院</div>
            <div style="position: absolute;font-size: 18px;color: #FFFFFF;top:32px;right: 20px;">浙江科技学院西和公寓</div>
            <div style="position: absolute;top: 36px;left: 156px"><img src="../assets/img/addr.png" height="15" width="15"/></div>
        </div>
        <HospitalList/>
    </div>
</template>

<script>
    import HospitalList from '../components/hospitalList.vue';
    export default {
        name: "reservation",
        components:{
            HospitalList
        }

    }
</script>

<style scoped>

</style>
