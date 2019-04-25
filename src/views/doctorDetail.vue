<template>
    <div id="doctorDetail">
        <div class="doctor-info-box">
            <div class="info-top">
                <div style="align-self: center">
                    <img class="avatar" style="align-self: center" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556125760355&di=51d5dc16d6610075d9bf1e258da63196&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_ls%2F0%2F7969894780_640330%2F0"/>
                </div>
                <div style="align-self: center;margin-left: 20px">
                    <div>陈钰琪 医生</div>
                    <div class="doctor-info">
                        <div><img src="../assets/img/age.png" style="height: 18px"/></div>
                        <div style="margin: 0 10px 0 5px">医龄15年</div>
                        <div><img src="../assets/img/reserve.png" style="height: 18px"/></div>
                        <div style="margin: 0 10px 0 5px">预约25次</div>
                    </div>
                </div>
            </div>
            <div class="good-box">
                <div class="good-title">医生擅长：</div>
                <div class="good-content">猫内科疾病，营养相关，行为相关问题</div>
            </div>
            <div class="line-r"></div>
            <div class="good-box">
                <div class="good-title">所属医院：</div>
                <div class="good-content">杭州小和山分院</div>
                <div style="width: 50px;display: flex">
                    <div class="line-c"></div>
                    <div style="display: flex"><img style="align-self: center" src="../assets/img/location.png"/></div>
                </div>
            </div>
        </div>
        <div class="reserve-box">
            <div>点击预约</div>
            <table width="100%" border="0" class="table" cellpadding="0" cellspacing="0" style="margin-top: 10px">
                <tr style="background: #F8F8F8">
                    <th class="th_border"></th>
                    <th class="th_border">周日</th>
                    <th class="th_border">周一</th>
                    <th class="th_border">周二</th>
                    <th class="th_border">周三</th>
                    <th class="th_border">周四</th>
                    <th class="th_border">周五</th>
                    <th class="th_border">周六</th>
                </tr>
                <tr>
                    <td style="color: black">上午</td>
                    <td></td>
                    <td></td>
                    <td style="background: rgba(77,162,248,0.8);">预约</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>
                    <td style="color: black">下午</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="available" style="background: rgba(77,162,248,0.8);">预约</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td style="color: black">晚上</td>
                    <td></td>
                    <td class="available" style="background: rgba(77,162,248,0.8);">预约</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="available" style="background: rgba(77,162,248,0.8);">预约</td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "doctorDetail"
    }
</script>

<style scoped>
    .doctor-info-box{
        background: white;
        padding: 20px;
    }
    .info-top{
        display: flex;
    }
    .avatar{
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
    .doctor-info{
        margin-top: 5px;
        display: flex;
        font-size: 14px;
        color: #999999;
    }
    .good-box{
        display: flex;
        font-size: 14px;
        margin-top: 10px;
        line-height: 32px;
    }
    .good-title{
        width: 80px;
    }
    .good-content{
        flex: 1;
        color: #999999;
    }
    .line-r{
        width: 100%;
        border-bottom: 1px solid rgba(187,187,187,0.5);
        margin: 15px auto;
    }
    .line-c{
        height: 60%;
        align-self: center;
        margin-right: 20px;
        border-left: 1px solid rgba(187,187,187,1);
    }
    .reserve-box{
        margin-top: 10px;
        background: white;
        padding: 20px;
    }
    .table{border-collapse:collapse; font-size:13px; height:24px;line-height:24px; color:white; text-align:center;}
    .table tr th{background:rgba(187,187,187,1); color:#000; font-size:13px;height:24px; line-height:24px;}
    .table tr th.th_border{border-right:solid 1px #FFF;border-left:solid 1px #fff;}
    .table tr td{border:solid 1px white;background:rgba(187,187,187,0.5);height: 45px}
</style>
