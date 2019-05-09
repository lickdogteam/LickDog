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
            <div style="display: flex"><a href="tel:13758257159"><img src="../assets/img/phone.png"/></a></div>
        </div>
        <div class="date-table-box">
            <table class="date-table">
                <tr>
                    <th>5月11日</th>
                    <th>5月12日</th>
                    <th>5月13日</th>
                    <th>5月14日</th>
                    <th>5月15日</th>
                    <th>5月16日</th>
                    <th>5月17日</th>
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
        background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557412455783&di=b9bd89730addb25ba6924bc7e2ca811e&imgtype=0&src=http%3A%2F%2Fimg5.goumin.com%2Fattachments%2Fbbs%2F201904%2F19%2F201904191645499384.jpg");
        height: 200px;
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
        background-color: white;
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
        background-color: white;
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
