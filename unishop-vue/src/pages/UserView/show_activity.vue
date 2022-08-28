<template>
  <view class="show_activity">
    <view class="show_activity-title">
      <view class="show_activity-title-logo"><image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" /></view>
      <view class="show_activity-title-content">一个标题</view>
    </view>

    <view class="show_activity-top">
      <image

          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"

      />
    </view>


    <view class="show_activity-bottom">
      <view>
        <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </view>

      <view>
        <image

            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </view>
    </view>

  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "show_activity",
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
.show_activity {


  width: 48%;
  padding: 20rpx 18rpx;
  box-sizing: border-box;


  background-color: #fff;
  margin: 30rpx 0 0 0;
  border-radius: 25rpx;


  //标题
  .show_activity-title {

    display: flex;
    margin-top: 10rpx;
    margin-left: 10rpx;
    align-items: center;


    &-logo {


      image {
        width: 35rpx;
        height: 35rpx;
      }
    }


    &-content {
      margin-left: 10rpx;
      font-size: 26rpx;

    }

  }


  //上半部分
  .show_activity-top {
    width: 100%;
    height: 200rpx;
    margin-top: 20rpx;
    text-align: center;


    image {
      border-radius: 14rpx;

      width: 290rpx;

      height: 100%;
    }

  }


  //下半部分
  .show_activity-bottom {
    display: flex;

    justify-content: space-between;
    margin-top: 30rpx;


    image {
      border-radius: 14rpx;

      width: 130rpx;
      height: 130rpx;
    }


  }

}

</style>