<template>
<!--  设置页面-->
  <view class="setting">
<!--    顶部标题栏-->
    <van-nav-bar class="navbar">
      <!--      左侧-->
      <template #left>
        <van-icon name="search" size="28" style="color:#d03633"/>
      </template>


      <!--      中间-->
      <template #title>
        <view>账户设置</view>
      </template>


    </van-nav-bar>


<!--    内容-->
    <view class="setting-content">
<!--      1头像框-->
      <view class="setting-content-1 itemcard">
<!--        头像-->
        <view class="xinxi">
          <view class="left">
            <view class="touxiang">
              <image
                  @click=""
                  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                  class=""
              />
            </view>

            <view class="xingming">
              <view class="nicheng">
                <text>老孽头</text>
                <text>男</text>
              </view>
              <view class="yonghuming">用户名:1238123</view>
            </view>
          </view>
          <view class="right">
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />
<!--        地址管理-->
        <view class="dizhi">
          <view class="left">地址管理</view>
          <view class="right">
            <van-icon name="arrow" />
          </view>
        </view>

      </view>

<!--      2通用设置-->
      <view class="setting-content-2 itemcard">
        <view class="item">
          <view class="item-left">账户与安全</view>
          <view class="item-right">
            <view class="item-right-title">账户保障可升级</view>
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />


        <view class="item">
          <view class="item-left">设置字体大小</view>
          <view class="item-right">
<!--            <view class="item-right-title">账户保障可升级</view>-->
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />



        <view class="item">
          <view class="item-left">支付设置</view>
          <view class="item-right">
            <!--            <view class="item-right-title">账户保障可升级</view>-->
            <van-icon name="arrow" />
          </view>
        </view>


        <van-divider />


        <view class="item">
          <view class="item-left">发票抬头管理</view>
          <view class="item-right">
            <view class="item-right-title">添加增票资质</view>
            <van-icon name="arrow" />
          </view>
        </view>


        <van-divider />



        <view class="item">
          <view class="item-left">我的档案</view>
          <view class="item-right">
            <view class="item-right-title">添加设备</view>
            <van-icon name="arrow" />
          </view>
        </view>


        <van-divider />


        <view class="item">
          <view class="item-left">通用</view>
          <view class="item-right">
            <view class="item-right-title">清楚本地缓存等</view>
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />

        <view class="item">
          <view class="item-left">长辈版</view>
          <view class="item-right">
            <view class="item-right-title">长辈版/标准版</view>
            <van-icon name="arrow" />
          </view>
        </view>
      </view>

<!--      3关于-->
      <view class="setting-content-3 itemcard">

        <view class="item">
          <view class="item-left">PLUS会员</view>
          <view class="item-right">
            <view class="item-right-title">您有5张优惠券待使用</view>
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />


        <view class="item">
          <view class="item-left">家庭号设置</view>
          <view class="item-right">
            <view class="item-right-title">帮我付/快捷聊/亲密卡等</view>
            <van-icon name="arrow" />
          </view>
        </view>


        <van-divider />


        <view class="item">
          <view class="item-left">功能实验室</view>
          <view class="item-right">
            <view class="item-right-title">提前体验新功能</view>
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />

        <view class="item">
          <view class="item-left">功能反馈</view>
          <view class="item-right">
<!--            <view class="item-right-title">提前体验新功能</view>-->
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />

        <view class="item">
          <view class="item-left">关于京东APP</view>
          <view class="item-right">
            <view class="item-right-title">V11.2.0</view>
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />


        <view class="item">
          <view class="item-left">隐私政策简要版</view>
          <view class="item-right">
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />


        <view class="item">
          <view class="item-left">个人信息收集清单</view>
          <view class="item-right">
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />

        <view class="item">
          <view class="item-left">应用权限说明</view>
          <view class="item-right">
            <van-icon name="arrow" />
          </view>
        </view>

        <van-divider />


        <view class="item">
          <view class="item-left">第三方共享个人信息清单</view>
          <view class="item-right">
            <van-icon name="arrow" />
          </view>
        </view>
      </view>

<!--      4退出登录-->
      <view class="setting-content-4 itemcard">
        退出登录
      </view>
    </view>

  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "setting",
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
.setting {
  .navbar {

    height: 90rpx;
  }

  .setting-content {
    overflow: hidden;
    width: 100%;

    background-color: #f2f2f2;

    &-1 {

      .xinxi {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          align-items: center;

          .touxiang {


            image {
              border-radius: 50%;
              width: 150rpx;
              height: 150rpx;
            }
          }

          .xingming {
            margin-left: 10rpx;


            .nicheng {
              margin: 20rpx;

            }

            .yonghuming {
              margin: 20rpx;
              color: #868686;
            }
          }
        }

        .right {

        }
      }

      .dizhi {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .left {

          //background-color: red;

        }

        .right {
          //background-color: red;
        }

      }

    }

    //通用设置
    &-2 {


    }

    //相关信息了解
    &-3 {

    }

    //退出登录
    &-4 {
      text-align: center;

    }

  }
}

//卡片轮廓
.itemcard {
  background-color: #fff;
  margin: 30rpx 0;
  padding: 25rpx 30rpx;
  border-radius: 25rpx;
  width: 100%;
  box-sizing: border-box;

}


//分割线
::v-deep .van-divider {
  color: #eaeaea;
  border-color: #eaeaea;
  border-width: 1rpx;
  margin-left: -30rpx;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  //padding-right: -30rpx;
  width: calc(100% + 60rpx);
}


//具体每行
.item {
  display: flex;
  justify-content: space-between;

  &-left {

  }

  &-right {
    display: flex;

    &-title {
      margin-right: 10rpx;
      color: #868686;
    }
  }
}


</style>