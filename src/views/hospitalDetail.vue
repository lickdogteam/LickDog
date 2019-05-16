<template>
    <div id="hospitalDetail">
        <div style="height: 100px">
            <img style="width: 100%" src="../assets/img/background.png"/>
            <div style="position: absolute;font-size: 22px;color: #FFFFFF;top:30px;left: 20px;font-weight: bold">医院详情</div>
            <div style="position: absolute;font-size: 18px;color: #FFFFFF;top:32px;right: 20px;">舔狗宠物医院小和山分院</div>
            <div style="position: absolute;top: 36px;left: 136px"><img src="../assets/img/hospital.png" height="15" width="15"/></div>
        </div>
        <div style="padding: 0 20px;background: white">
            <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558000901883&di=1c2d7583e231dfcf7de77dcd231e4a8d&imgtype=0&src=http%3A%2F%2Fwww.wallcoo.com%2Fanimal%2FDogs_Summer_and_Winter%2Fwallpapers%2F1920x1080%2FDogsB5_Toby.jpg"
                alt="" style="width: 100%;border-radius: 20px">
        </div>
        <!--<div class="hospital-background">-->
            <!--<div class="hospital-name">舔狗宠物医院小和山分院</div>-->
            <!--<div class="hospital-intro">杭州市舔狗有限公司小和山分公司</div>-->
        <!--</div>-->
        <div class="hospital-address">
            <div style="display: flex"><img src="../assets/img/location.png" style="height: 24px"/></div>
            <div style="flex: 1;font-size: 14px">地址：浙江·杭州市留和路318号</div>
            <div class="line"></div>
            <div style="display: flex;padding-top: 10px"><a href="tel:13758257159"><img src="../assets/img/telephone@3x.png" style="width: 30px;height: 30px"/></a></div>
        </div>
        <div class="date-table-box">
            <table class="date-table">
                <tr>
                    <th>5月17日</th>
                    <th>5月18日</th>
                    <th>5月19日</th>
                    <th>5月20日</th>
                    <th>5月21日</th>
                    <th>5月22日</th>
                    <th>5月23日</th>
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
        /*background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558000901883&di=1c2d7583e231dfcf7de77dcd231e4a8d&imgtype=0&src=http%3A%2F%2Fwww.wallcoo.com%2Fanimal%2FDogs_Summer_and_Winter%2Fwallpapers%2F1920x1080%2FDogsB5_Toby.jpg");*/
        /*height: 200px;*/
        width: 100%;
        /*background-size: 100%;*/
        margin-top: -20px;
    }
    .hospital-name{
        color: white;
        position: absolute;
        top: 240px;
        left: 20px;
    }
    .hospital-intro{
        color: white;
        position: absolute;
        top: 260px;
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
