<template>
    <div id="partBlockContainer">
        <div class="container">
            <div class="title-container">
                <div>{{title}}</div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'partBlockContainer',
        props: {
            title:{
                require:true,
            },
        },
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
    .container{
        padding: 10px;
    }
    .title-container{
        display: flex;
        justify-content: space-between;
    }
</style>
