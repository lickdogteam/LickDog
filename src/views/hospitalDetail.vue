<template>
    <div id="hospitalDetail">
        <div class="hospital-background">
            <div class="hospital-name">舔狗宠物医院小和山分院</div>
            <div class="hospital-intro">杭州市舔狗有限公司小和山分公司</div>
        </div>
        <div class="hospital-address">
            <div style="display: flex"><img src="../assets/img/location.png" style="height: 24px"/></div>
            <div style="flex: 1;font-size: 14px">地址：浙江·杭州市留和路318号</div>
            <div class="line"></div>
            <div style="display: flex"><img src="../assets/img/phone.png"/></div>
        </div>
        <div class="date-table-box">
            <table class="date-table">
                <tr>
                    <th>4月21日</th>
                    <th>4月22日</th>
                    <th>4月23日</th>
                    <th>4月24日</th>
                    <th>4月25日</th>
                    <th>4月26日</th>
                    <th>4月27日</th>
                </tr>
            </table>
        </div>

        <DoctorList/>
    </div>
</template>

<script>
    import DoctorList from '../components/doctorList.vue';
    export default {
        name: "hospitalDetail",
        components:{
            DoctorList
        }
    }
</script>

<style scoped lang="less">
    .hospital-background{
        background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556125630141&di=4b0d7ef00c1e67911c361fbd6d387d45&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fee17dfb9bedea354f7082697c6b280ab.jpeg");
        height: 150px;
        width: 100%;
        background-size: 100%;
    }
    .hospital-name{
        color: white;
        position: absolute;
        top: 140px;
        left: 20px;
    }
    .hospital-intro{
        color: white;
        position: absolute;
        top: 160px;
        left: 20px;
        font-size: 14px;
    }
    .hospital-address{
        display: flex;
        height: 50px;
        line-height: 50px;
        padding-right: 20px;
        img{
            height: 20px;
            margin: auto 0;
            align-self: center;
        }
    }
    .line{
        height: 60%;
        align-self: center;
        margin-right: 20px;
        border-left: 1px solid rgba(187,187,187,1);
    }
    .date-table-box{
        height: 50px;
        border-width: 1px 0 1px 0;
        border-style: dashed;
        border-color: rgba(187,187,187,0.8);
        width: 100%;
        overflow-x: scroll;
    }
    ::-webkit-scrollbar{
        display:none;
    }
    .date-table{
        width: 660px;
        height: 100%;
    }

</style>
