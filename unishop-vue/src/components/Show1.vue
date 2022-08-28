<template>
  <!--    Show1 商品展示组件 上1下3 两层-->
  <view class="Show1">

    <view class="Show1-top">
      <image src="~@/static/img/HomeView/img.png"></image>
    </view>

    <view class="Show1-center">
      <view class="Show1-center-card">
        <view class="Show1-center-card-picture">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jingdong"></use>
          </svg>
        </view>
        <view class="Show1-center-card-title">京东发货</view>
      </view>


      <view class="Show1-center-card">
        <view class="Show1-center-card-picture">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianmaoqitiantuihuo"></use>
          </svg>
        </view>
        <view class="Show1-center-card-title">七天无理由退换</view>
      </view>

      <view class="Show1-center-card">
        <view class="Show1-center-card-picture">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yifahuo"></use>
          </svg>
        </view>
        <view class="Show1-center-card-title">免运费</view>
      </view>



    </view>

    <view class="Show1-bottom">


      <view class="Show1-bottom-card">
        <view class="Show1-bottom-card-pic"><image src="~@/static/img/HomeView/img_3.png"></image></view>
        <view class="Show1-bottom-card-price">
          <view class="Show1-bottom-card-price-1">售价</view>
          <view class="Show1-bottom-card-price-2">￥</view>
          <view class="Show1-bottom-card-price-3">500</view>
        </view>
      </view>
      <view class="Show1-bottom-card">
        <view class="Show1-bottom-card-pic"><image src="~@/static/img/HomeView/img_3.png"></image></view>
        <view class="Show1-bottom-card-price">
          <view class="Show1-bottom-card-price-1">售价</view>
          <view class="Show1-bottom-card-price-2">￥</view>
          <view class="Show1-bottom-card-price-3">500</view>
        </view>
      </view>
      <view class="Show1-bottom-card">
        <view class="Show1-bottom-card-pic"><image src="~@/static/img/HomeView/img_3.png"></image></view>
        <view class="Show1-bottom-card-price">
          <view class="Show1-bottom-card-price-1">售价</view>
          <view class="Show1-bottom-card-price-2">￥</view>
          <view class="Show1-bottom-card-price-3">500</view>
        </view>
      </view>



      <view></view>
      <view></view>
    </view>

  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "Show1",
  components: {},
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
.Show1 {
  margin: 20rpx $main-margin;
  height: 590rpx;
  //background-color: red;
  border-radius: $img-radius;
  border: 1rpx solid gray;
  box-sizing: border-box;

  //顶部
  &-top {

    image {
      width: 100%;
      height: 260rpx;

      border-radius: $img-radius $img-radius 0 0;

    }
  }


  //中间
  &-center {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom:  1rpx solid gray;
    background-color: #fff;

    &-card {
      display: flex;
      width: 33%;

      height: 60rpx;
      justify-content:center;

      //background-color: green;
      color: #9f9f9f;

      &-title {
        margin-left: 8rpx;
        line-height: 50rpx;
        font-size: 22rpx;
      }

      &-picture {

      }
    }

    .icon {
      width: 50rpx; height: 50rpx;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }


  }

  //底下
  &-bottom {
    display: flex;
    justify-content: space-around;
    width: 100%;
    //background-color: red;
    background-color: #fff;
    border-radius: 0 0 $img-radius $img-radius;
    border-bottom:  1rpx solid gray;
    &-card {
      //background-color: green;
      width: 33.3333333%;
      margin-top: 20rpx;

      &-pic {
        text-align: center;

        image {
          width: 180rpx;
          height: 180rpx;
        }
      }


      &-price {
        display: flex;
        justify-content: center;

        margin-top: 10rpx;

        &-1 {
          color: #000;
          line-height: 48rpx;
          font-size: 28rpx;
        }
        &-2 {
          color: #f90606;
          line-height: 50rpx;
          font-size: 30rpx;
        }
        &-3 {
          color: #f90606;
          font-size: 40rpx;
          weight: 600;
        }

      }
    }

  }

}

</style>