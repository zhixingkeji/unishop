<template>
  <!--  用户信息-->
  <view class="userinfo">
    <!--    顶部标题栏-->
    <van-nav-bar class="navbar">
      <!--      左侧-->
      <template #left>
        <van-icon name="arrow-left"/>
      </template>


      <!--      中间-->
      <template #title>
        <view>个人信息</view>
      </template>


    </van-nav-bar>

    <view class="userinfo-content">


      <view class="item">
        <view class="item-left">头像</view>
        <view class="item-right">
          <view class="item-right-title">
            <image
                @click=""
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                class=""
            />
          </view>
          <van-icon name="arrow"/>
        </view>
      </view>

      <van-divider/>

      <view class="item">
        <view class="item-left">账号</view>
        <view class="item-right">
          <view class="item-right-title">jd123902_p</view>
          <van-icon name="arrow" style="opacity: 0"/>
        </view>
      </view>

      <van-divider/>


      <view class="item">
        <view class="item-left">昵称</view>
        <view class="item-right">
          <view class="item-right-title">老孽头</view>
          <van-icon name="arrow"/>
        </view>
      </view>

      <van-divider/>


      <view class="item">
        <view class="item-left">性别</view>
        <view class="item-right">
          <view class="item-right-title">男</view>
          <van-icon name="arrow"/>
        </view>
      </view>

      <van-divider/>

      <view class="item">
        <view class="item-left">出生日期</view>
        <view class="item-right">
          <view class="item-right-title">2000年01月01号</view>
          <van-icon name="arrow"/>
        </view>
      </view>

    </view>


  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "userinfo",
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
.userinfo {
  height: 100vh;
  background-color: #f4f5f7;


  .navbar {
    height: 90 rpx;
  }
  
  
  &-content {
    background-color: #fff;
    padding: 25rpx 30rpx;
    
  }

}


//具体每行
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-left {

  }

  &-right {
    display: flex;
    align-items: center;

    &-title {
      margin-right: 10rpx;
      color: #868686;

      image {
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
      }
    }
  }
}

</style>