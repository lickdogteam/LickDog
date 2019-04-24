<template>
    <div id="main-page">
        <div>index</div>
        <mt-search
                v-model="value"
                cancel-text="取消"
                placeholder="搜索医院、医生">
        </mt-search>
    </div>
</template>
<script>
    export default {
        name: 'mainPage',
        props: {},
        data () {
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {}
    }
</script>
<style scoped>

</style>
