<template>
    <div id="reservation">
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
