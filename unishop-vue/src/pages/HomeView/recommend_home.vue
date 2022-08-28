<template>
<!--  推荐组件-->
  <div class="recommend_home">

    <!--    轮播图-->
    <swiper_home></swiper_home>


    <!--    show1组件-->
    <Show1></Show1>
    <!--    上4下4组件 两层组件-->
    <!--    上1中2下1 三层组件-->
    <!--    上1下3组件 两层组件-->
    <!--    左1右2组件 -->
    <!--    横排滚动组件-->

    <!--    商品列表-->
    <GoodList></GoodList>

    <view class="title1">
      <view class="title1-symbol">-</view>
      <view class="title1-content">猜你喜欢</view>
      <view class="title1-symbol">-</view>
    </view>

    <view class="title1">
      <view class="title1-symbol">-</view>
      <view class="title1-content">商品店铺</view>
      <view class="title1-symbol">-</view>
    </view>

    <view class="title1">
      <view class="title1-symbol">-</view>
      <view class="title1-content">运动户外</view>
      <view class="title1-symbol">-</view>
    </view>

  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";
import GoodList from "@/components/GoodList";
import Show1 from "@/components/Show1";

export default {
  name: "recommend_home",
  components: {
    GoodList,
    Show1,

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
.recommend_home {

}


.title1 {
  display: flex;
  justify-content: center;
  padding-top: 5rpx;
  padding-bottom: 10rpx;

  &-content {
    margin: 0 20rpx;
    font-size: 40rpx;
    line-height: 70rpx;
    font-weight: bold;
  }

  &-symbol {
    font-size: 60rpx;
    font-weight: bold;
  }
}


</style>