<template>
    <div id="doctor-list">
        <div class="doctor-box">
            <div class="box-top">
                <div class="avatar">
                    <img class="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556125760355&di=51d5dc16d6610075d9bf1e258da63196&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_ls%2F0%2F7969894780_640330%2F0"/>
                </div>
                <div class="name">陈钰琪</div>
                <div class="line-c"></div>
                <div class="work">医生</div>
            </div>
            <div class="line-r"></div>
            <div class="doctor-info">
                <div><img src="../assets/img/age.png" style="height: 18px"/></div>
                <div style="margin: 0 10px 0 5px">医龄15年</div>
                <div><img src="../assets/img/reserve.png" style="height: 18px"/></div>
                <div style="margin: 0 10px 0 5px">预约25次</div>
            </div>
            <div class="doctor-tag-box">
                <div class="tag tag-gray">无夜诊</div>
                <div class="tag tag-blue">有号</div>
            </div>
        </div>
        <div class="doctor-box">
            <div class="box-top">
                <div class="avatar">
                    <img class="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556125760355&di=51d5dc16d6610075d9bf1e258da63196&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_ls%2F0%2F7969894780_640330%2F0"/>
                </div>
                <div class="name">陈钰琪</div>
                <div class="line-c"></div>
                <div class="work">医生</div>
            </div>
            <div class="line-r"></div>
            <div class="doctor-info">
                <div><img src="../assets/img/age.png" style="height: 18px"/></div>
                <div style="margin: 0 10px 0 5px">医龄15年</div>
                <div><img src="../assets/img/reserve.png" style="height: 18px"/></div>
                <div style="margin: 0 10px 0 5px">预约25次</div>
            </div>
            <div class="doctor-tag-box">
                <div class="tag tag-gray">无夜诊</div>
                <div class="tag tag-blue">有号</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "doctorList"
    }
</script>

<style scoped lang="less">
    .doctor-box{
        background: white;
        padding: 10px;
        /*margin-top: 10px;*/
        margin-bottom: 10px;
    }
    .box-top{
        display: flex;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
    }
    .avatar{
        width: 40px;
        height: 40px;
        border-radius: 25px;
    }
    .name{
        margin-left: 10px;
    }
    .line-c{
        margin-left: 10px;
        height: 50%;
        align-self: center;
        border-left: 1px solid rgba(187,187,187,1);
    }
    .line-r{
        width: 100%;
        border-bottom: 1px solid rgba(187,187,187,0.3);
        margin: 10px 0;
    }
    .work{
        margin-left: 10px;
    }
    .doctor-info{
        display: flex;
        font-size: 14px;
        color: #999999;
    }
    .doctor-tag-box{
        display: flex;
        margin-top: 10px;
    }
    .tag{
        width: auto;
        border-radius: 10px;
        /*background: rgba(200,200,200,1);*/
        /*color: white;*/
        text-align: center;
        font-size: 12px;
        padding: 0 5px;
        margin-right: 20px;
    }
    .tag-gray{
        background: rgba(200,200,200,1);
        color: white;
    }
    .tag-blue{
        background: rgba(77,162,248,0.5);
        /*color: rgb(77,162,248);*/
        color: white;
    }
</style>
