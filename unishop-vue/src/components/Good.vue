<template>
<!--  商品缩略图-->
  <view class="Good" :style="'width:'+ itemW + ';'" @click="goDetail()">
    <view class="Good-1">
      <image src="~@/static/img/img_5.png" :style="itemW==='48%'?'height: 350rpx;':'height: 200rpx;'"></image>
    </view>

    <view class="Good-2">星特朗（CELESTRON）天文望远镜70400儿童专业观星观景大口径高清高倍六一儿童节科普生日礼物</view>

    <view class="Good-3">
      <view class="Good-3-new">$600</view>
      <view class="Good-3-old">$1600</view>
    </view>

    <view class="Good-4">
      3.3折
    </view>
  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "Good",
  components: {},
  props: {

    //接受宽度参数,可以一行显示两个或三个, 动态绑定样式
    itemW: {
      type: String,
      default: "48%"
    }
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()

    //跳转到详情
    const goDetail = () => {
      console.log("去详情")
      uni.navigateTo({
        url: "/pages/DetailView/DetailView",
        success: (e) => {
          uni.hideLoading();

        },

        fail: (e) => {

        }
      })
    }


    return {
      goDetail
    }

  }
}
</script>

<style scoped lang="scss">
.Good {

  //height: 400rpx;
  margin: 5rpx 0 15rpx 0;
  background-color: #fff;
  border-radius: $img-radius;

  &-1 {
    margin-top: 18rpx;
    image {
      width: 100%;
      height: 350rpx;
    }
  }

  &-2 {
    margin: 15rpx auto;
    padding: 0 10rpx;
    color: #333;


    //超过两行后省略
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    overflow: hidden;

    //禁止数字或者英文换行
    word-break: break-all;

  }
  &-3 {
    display: flex;
    justify-content: center;
    margin: 15rpx auto;


    &-new {
      font-size: 45rpx;
    }


    &-old {
      font-size: 35rpx;
      line-height: 50rpx;
      margin-left: 5rpx;
      color: #b5b5b5;

      //删除线
      text-decoration: line-through;
    }



  }

  &-4 {
    margin: 15rpx auto;
    padding: 5rpx 10rpx;
    text-align: center;
    color: #f2270c;
    border: 3rpx solid #f2270c;
    width: fit-content;
    border-radius: 5rpx;
  }


}

</style>