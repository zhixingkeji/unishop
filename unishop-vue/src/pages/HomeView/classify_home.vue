<template>
  <view class="classify_home">
    <!--    顶部图 开始-->
    <view class="classify_home-banner">
      <image src="~@/static/img/img.png"></image>
    </view>
    <!--    顶部图 结束-->

    <!--    分类模块 开始-->
    <view class="classify_home-classify">


      <view class="classify_home-classify-card" v-for="item in 8">
        <view class="classify_home-classify-card-logo">
          <image src="~@/static/img/common/show2/1.png"></image>
        </view>

        <view class="classify_home-classify-card-title">跑步鞋</view>
      </view>
    </view>
    <!--    分类模块 结束-->



    <!--    热销爆品 开始     -->
    <title_s>热销爆品</title_s>

    <view class="classify_home-hot">
      <Good itemW="32%"></Good>
      <Good itemW="32%"></Good>
      <Good itemW="32%"></Good>
    </view>
    <!--    热销爆品 结束     -->



    <!--    优质店铺 开始     -->
    <title_s class="title1">优质店铺</title_s>
    <view class="classify_home-shop">
      <view class="classify_home-shop-top">
        <image src="~@/static/img/HomeView/img_5.png"></image>
      </view>


      <view class="classify_home-shop-bottom">

        <view class="classify_home-shop-bottom-card">
          <Good itemW="32%"></Good>
          <view style="margin: 0 15rpx"></view>
          <Good itemW="32%"></Good>
          <view style="margin: 0 15rpx"></view>
          <Good itemW="32%"></Good>
          <view style="margin: 0 15rpx"></view>
          <Good itemW="32%"></Good>
          <view style="margin: 0 15rpx"></view>
          <Good itemW="32%"></Good>
          <view style="margin: 0 15rpx"></view>
          <Good itemW="32%"></Good>
        </view>


      </view>
    </view>


    <!--    优质店铺 结束     -->





    <!--    为您推荐 开始     -->
    <title_s>为您推荐</title_s>

    <!--    为您推荐 结束     -->

  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";
import Good from "../../components/Good";

export default {
  name: "classify_home",
  components: {
    Good
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
.classify_home {
  //color: #000;
  //height: 400rpx;
  width: 100%;
  margin-top: 20rpx;


  //顶部图片 模块
  &-banner {


    image {
      height: 350rpx;
      width: 100%;
    }
  }


  // 8大分类圆形图标 模块
  &-classify {
  display: flex;

    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20rpx $main-margin 0 $main-margin;

    background-color: #fff;

    &-card {
      //background-color: red;

      &-title {
        text-align: center;
        margin: 10rpx 0 25rpx 0;
        color: #484848;
        font-size: 28rpx;

      }

      &-logo {
        image {
          width: 160rpx;
          height: 160rpx;
          border-radius: 50%;
        }

      }
    }
  }


  //热销爆品模块
  &-hot {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 $main-margin;
    border-radius: $img-radius;
    background-color: #fff;

  }


  //优质店铺
  &-shop {
    background-color: #fff;
    padding: 0 0 20rpx 0;

    &-top {
      image {
        width: 100%;
        height: 400rpx;
      }

    }

    &-bottom {
      overflow-x: scroll;
      //background-color: red;
      margin: 0 $main-margin;

      // 隐藏滚动条
      &::-webkit-scrollbar {
        display:none
      }


      &-card {
        height: 440rpx;
        //min-width: 300rpx;
        display: flex;
        //background-color: green;

        //width: 2000rpx;

      }

    }



  }

}

</style>