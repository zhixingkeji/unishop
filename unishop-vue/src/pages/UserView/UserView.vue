<template>
<!--  用户主页面-->
  <view class="UserView">
<!--    元素1 标题栏-->
    <tabbar_user></tabbar_user>


<!--    元素2 信息栏-->
    <view class="UserView-info card-wrapper">信息栏</view>


<!--    元素3 订单栏-->
    <view class="UserView-order card-wrapper">
      <view class="UserView-order-top">
        <view class="UserView-order-top-card">
          <view class="UserView-order-top-card-logo"><van-icon name="star-o" size="25rpx" /></view>
          <view class="UserView-order-top-card-title">商品收藏 1</view>
        </view>
        <view class="UserView-order-top-card">
          <view class="UserView-order-top-card-logo"><van-icon name="star-o" size="25rpx" /></view>
          <view class="UserView-order-top-card-title">常购清单 4</view>
        </view>
        <view class="UserView-order-top-card">
          <view class="UserView-order-top-card-logo"><van-icon name="star-o" size="25rpx" /></view>
          <view class="UserView-order-top-card-title">浏览记录 100</view>
        </view>



      </view>


      <view class="UserView-order-bottom">
        <view class="UserView-order-bottom-card">
          <view class="UserView-order-bottom-card-logo"><van-icon name="star-o" size="75rpx"/></view>
          <view class="UserView-order-bottom-card-title">待付款</view>
        </view>
        <view class="UserView-order-bottom-card">
          <view class="UserView-order-bottom-card-logo"><van-icon name="star-o" size="75rpx"/></view>
          <view class="UserView-order-bottom-card-title">待收货</view>
        </view>
        <view class="UserView-order-bottom-card">
          <view class="UserView-order-bottom-card-logo"><van-icon name="star-o" size="75rpx"/></view>
          <view class="UserView-order-bottom-card-title">待评价</view>
        </view>
        <view class="UserView-order-bottom-card">
          <view class="UserView-order-bottom-card-logo"><van-icon name="star-o" size="75rpx"/></view>
          <view class="UserView-order-bottom-card-title">退换/售后</view>
        </view>
        <view class="UserView-order-bottom-card">
          <view class="UserView-order-bottom-card-logo"><van-icon name="star-o" size="75rpx"/></view>
          <view class="UserView-order-bottom-card-title">我的订单</view>
        </view>

      </view>
    </view>


<!--    元素4 钱包栏-->
    <view class="UserView-wallet card-wrapper">
      <view class="UserView-wallet-card">
        <view class="UserView-wallet-card-number">5503</view>
        <view class="UserView-wallet-card-title">京豆</view>
      </view>

      <view class="UserView-wallet-card">
        <view class="UserView-wallet-card-number">26</view>
        <view class="UserView-wallet-card-title">优惠券</view>
      </view>

      <view class="UserView-wallet-card">
        <view class="UserView-wallet-card-number">
          229.00

        </view>
        <view class="UserView-wallet-card-title">白条</view>
      </view>

      <view class="UserView-wallet-card">
        <view class="UserView-wallet-card-number">
          2.0
          <text>万</text>
        </view>
        <view class="UserView-wallet-card-title">贷款</view>
      </view>

      <view class="UserView-wallet-card">
        <view class="UserView-wallet-card-logo">
          <van-icon name="star-o" size="55rpx"/>
        </view>
        <view class="UserView-wallet-card-content" style="">我的钱包</view>
      </view>
    </view>


<!--    元素5 工具栏-->
    <view class="UserView-tools card-wrapper">
      <view class="UserView-tools-wrapper">
      <view class="UserView-tools-card">
        <view class="UserView-tools-card-logo"> <van-icon name="star-o" size="55rpx"/></view>
        <view class="UserView-tools-card-title">客户服务</view>
      </view>

      <view class="UserView-tools-card">
        <view class="UserView-tools-card-logo"> <van-icon name="star-o" size="55rpx"/></view>
        <view class="UserView-tools-card-title">帮助中心</view>
      </view>

      <view class="UserView-tools-card">
        <view class="UserView-tools-card-logo"> <van-icon name="star-o" size="55rpx"/></view>
        <view class="UserView-tools-card-title">开通会员</view>
      </view>

      <view class="UserView-tools-card">
        <view class="UserView-tools-card-logo"> <van-icon name="star-o" size="55rpx"/></view>
        <view class="UserView-tools-card-title">充值中心</view>
      </view>


      <view class="UserView-tools-card">
        <view class="UserView-tools-card-logo"> <van-icon name="star-o" size="55rpx"/></view>
        <view class="UserView-tools-card-title">关于我们</view>
      </view>

      </view>

    </view>



<!--    元素6 活动栏-->
    <view class="UserView-activity">
      <show_activity></show_activity>
      <show_activity></show_activity>
      <show_activity></show_activity>
      <show_activity></show_activity>
      <show_activity></show_activity>
      <show_activity></show_activity>
    </view>


  </view>


  <!--底部菜单-->
  <BigNav class="bignav"></BigNav>

</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";
import tabbar_user from "./tabbar_user";
import show_activity from "./show_activity";

// import BigNav from "../../components/BigNav";
export default {
  name: "UserView",
  components: {
    // BigNav
    tabbar_user,
    show_activity
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()




    return {}

  }
}
</script>

<style scoped lang="scss">
.UserView {
  background-color: #f2f2f2;

  //卡片基本样式
  .card-wrapper {
    background-color: #fff;
    margin: 30rpx;
    border-radius: 25rpx;
    padding: 40rpx 0 40rpx 0;
  }

  //元素 基本信息
  .UserView-info {


  }


  //元素 订单栏
  .UserView-order {


    &-top {
      //background-color: red;

      display: flex;
      justify-content: space-between;
      width: 85%;
      margin: 0 auto;


      &-card {
        display: flex;
        align-items: center;


        &-logo {
          margin-top: -5rpx;


        }


        &-title {
          margin-left: 10rpx;
          font-size: 25rpx;
        }
      }
    }


    &-bottom {
      display: flex;

      margin: 30rpx auto 0 auto;
      width: 90%;
      justify-content: space-between;


      &-card {
        display: flex;
        flex-direction: column;
        //justify-content:center;
        //background-color: red;
        align-items: center;
        min-width: 125rpx;


        &-logo {

        }


        &-title {
          margin-top: 20rpx;
          font-size: 25rpx;
        }
      }
    }
  }


  //元素 钱包栏
  .UserView-wallet {
    //height: 200rpx;
    border-radius: 25rpx;
    margin: 30rpx;
    background-color: #fff;

    display: flex;
    justify-content: space-between;


    &-card {
      //background: red;
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      width: 140rpx;
      //height: 150rpx;
      //height: 150rpx;


      &-number {
        font-size: 34rpx;
        //margin-top: 40rpx;
        margin-top: -0rpx;


        text {
          font-size: 24rpx;
        }
      }

      &-logo {
        margin-top: 0rpx;
        //margin-bottom: -50rpx;
      }

      &-title {
        margin-top: 40rpx;
        font-size: 28rpx;
      }

      &-content {
        font-size: 28rpx;
        margin-top: 22rpx;
      }

    }
  }


  //工具
  .UserView-tools {


    //padding-left: 30rpx;
    //padding-bottom: 30rpx;
    //


    &-wrapper {
      display: flex;
      justify-content: space-between;
      width: 94%;
      margin: 0 auto;
      //background-color: red;
    }


    &-card {
      display: flex;
      flex-direction: column;
      align-items: center;


      &-logo {

      }


      &-title {
        margin-top: 26rpx;
        font-size: 25rpx;
      }
    }

  }



  //活动
  .UserView-activity {
    padding-bottom: 150rpx;
    margin: -30rpx 30rpx;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }

}

</style>