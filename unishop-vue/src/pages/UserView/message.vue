<template>
<!--  消息页面-->
  <view class="message">
    <!--    顶部标题栏-->
    <van-nav-bar class="navbar">
      <!--      左侧-->
      <template #left>
        <van-icon name="arrow-left" size="18" style="color: #fff;"/>
      </template>


      <!--      中间-->
      <template #title>
        <view>消息(3)</view>
      </template>
      <template #right>
        <view>
          <van-icon name="brush-o" size="20" style="color: #fff;"/>
        </view>
      </template>


    </van-nav-bar>
    <view class="circle"></view>

    <!--    中间卡片-->
    <view class="message-1">

      <view class="cardlist">
        <view class="cardlist-item">
          <view class="cardlist-item-top">
            <image
                @click=""
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                class=""
            />
          </view>
          <view class="cardlist-item-bottom">交易物流</view>
        </view>
        <view class="cardlist-item">
          <view class="cardlist-item-top">
            <image
                @click=""
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                class=""
            />
          </view>
          <view class="cardlist-item-bottom">互动消息</view>
        </view>
        <view class="cardlist-item">
          <view class="cardlist-item-top">
            <image
                @click=""
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                class=""
            />
          </view>
          <view class="cardlist-item-bottom">账户通知</view>
        </view>
        <view class="cardlist-item">
          <view class="cardlist-item-top">
            <image
                @click=""
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                class=""
            />
          </view>
          <view class="cardlist-item-bottom">服务通知</view>
        </view>

      </view>
    </view>


    <!--    消息内容-->
    <view class="message-2">

<!--      聊天容器-->
      <view class="cardlist">

<!--        单个聊天-->
        <view class="cardlist-wrapper" v-for="item in 40">
          <view class="cardlist-item">
            <view class="cardlist-item-left">
              <image
                  @click=""
                  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                  class=""
              />
              <view class="cardlist-item-left-info">
                <view>拍拍二手</view>
                <view>全场最高12期免息</view>
              </view>

            </view>

            <view class="cardlist-item-right">
              <view class="cardlist-item-right-time">2022年8月11日</view>
              <view class="cardlist-item-right-logo"><van-badge :content="2" max="99" /></view>

            </view>
          </view>

          <van-divider />


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
  name: "message",
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
.message {
  position: relative;


  .navbar {
    color: #fff;
    height: 90rpx;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .circle {
    width: 3500rpx;
    height: 3500rpx;
    border-radius: 50%;
    background-color: red;
    margin-left: 50%;
    transform: translate(-50%,-3300rpx);
    position: fixed;
    z-index: -999;

  }


  &-1 {


    .cardlist {
      background-color: green;
      height: 250rpx;
      width: calc(100% - 60rpx);
      margin: 90rpx 30rpx 0 30rpx;
      box-sizing: border-box;
      border-radius: 20rpx;
      display: flex;
      justify-content: space-between;
      padding: 45rpx 30rpx;


      &-item {
        text-align: center;


        image {
          border-radius: 50%;
          width: 110rpx;
          height: 110rpx;

        }


        &-top {

        }

        &-bottom {
          margin-top: 10rpx;

        }
      }

    }

  }


  &-2 {
    margin: 30rpx 0 ;
    padding: 0rpx 30rpx 10rpx 30rpx;
    background-color: #fff;

    .cardlist {
      &-wrapper {

        height: fit-content;
      }


      &-item {
        display: flex;
        justify-content: space-between;



        &-left {
          display: flex;
          align-items: center;

          image {
            width: 100rpx;
            height: 100rpx;
            border-radius: 50%;

          }

          &-info {


            margin-left: 30rpx;
            view {
              margin: 15rpx 0;

              &+view {
                color: #878787;
              }
            }

          }
        }



        &-right {
          display: flex;
          flex-direction: column;
          //align-items: flex-end;


          &-time {
            margin-top: 10rpx;
            color: #bebebe;
          }

          &-logo {
            margin-top: 30rpx;
            //padding-left: -30rpx;
            margin-left: 170rpx;

          }

        }
      }
    }

  }

}


::v-deep .van-nav-bar {
  background-color: red;

}

::v-deep .van-nav-bar__title {
  color: #fff;
}

::v-deep .van-divider {
  margin: 8rpx -30rpx;
  width: 100vw;
  //border-width: 0.1px;
}
</style>