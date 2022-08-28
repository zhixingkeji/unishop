<template>
<!--  商品详情页面-->
  <div class="DetailView">
<!--    顶部标题栏-->
    <view class="DetailView-topBar">
      <van-nav-bar class="DetailView-topBar-vant" left-text="" left-arrow
        @click-left="fanhui"  @click-right=""
      >
        <template #title >
          <view class="DetailView-topBar-vant-center">
            <view class="DetailView-topBar-vant-center-title" @click="navClick(0)">商品</view>
            <view class="DetailView-topBar-vant-center-title" @click="navClick(1)">评价</view>
            <view class="DetailView-topBar-vant-center-title" @click="navClick(2)">详情</view>
          </view>

        </template>
        <template #right>
          <van-icon name="share" size="18" />
        </template>
      </van-nav-bar>
    </view>



<!--    中间内容栏-->
    <view class="DetailView-detail">

      <view class="DetailView-detail-wrapper">
        <!--      顶部轮播图-->
        <view class="DetailView-detail-rotate ">
          <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        </view>

        <!--      商品信息-->
        <view class="DetailView-detail-goodinfo item-card">
<!--          第一行-->
          <view class="DetailView-detail-goodinfo-1">
<!--            现价-->
            <view class="newprice">
              <text class="newprice-1">¥</text>
              <text class="newprice-2">2099</text>
              <text class="newprice-3">.00</text>
            </view>

<!--            原价-->
            <view class="oldprice">
              <text class="oldprice-1">¥</text>
              <text class="oldprice-2">2099</text>
              <text class="oldprice-3">.00</text>
            </view>

<!--            收藏-->
            <view class="shoucang">
              <van-icon class="shoucang-logo" size="22" name="like-o" />
              <view class="shoucang-title">收藏</view>
            </view>
          </view>

<!--          第二行-->
          <view class="DetailView-detail-goodinfo-2">
            科龙空调 大1匹 新一级能效 变频节能 快速冷暖 智能wifi 柔风低噪 壁挂式 卧室挂机 以旧换新 KFR-26GW/QQA1(1N41) 青春派Pro
          </view>

        </view>

        <!--      规格-->
        <view class="DetailView-detail-format item-card">
<!--          已选-->
          <view class="yixuan">
            <view class="yixuan-title">选择</view>
            <view class="yixuan-content">已选: 黑色,xl,1件</view>

          </view>

<!--          送至-->
          <view class="songzhi">
<!--            第一行 地址-->
            <view class="songzhi-1">
              <view class="songzhi-1-songzhi">送至</view>
              <view class="songzhi-1-dizhi">
                <view class="songzhi-1-dizhi-top"> 北京市丰台区云岗镇朱家坟23号</view>
                <view class="songzhi-1-dizhi-bottom">现货,23:00前下单,预计明天(07月28日)送达  </view>
              </view>
            </view>


          </view>

<!--          标签-->
          <view class="biaoqian">
            <view class="biaoqian-cardlist">
              <view class="biaoqian-cardlist-card">
                <view class="biaoqian-cardlist-card-logo"><van-icon name="certificate" /></view>
                <view class="biaoqian-cardlist-card-title">7天无理由退货</view>
              </view>

              <view class="biaoqian-cardlist-card">
                <view class="biaoqian-cardlist-card-logo"><van-icon name="certificate" /></view>
                <view class="biaoqian-cardlist-card-title">京东发货&店铺售后</view>
              </view>

              <view class="biaoqian-cardlist-card">
                <view class="biaoqian-cardlist-card-logo"><van-icon name="certificate" /></view>
                <view class="biaoqian-cardlist-card-title">家电服务</view>
              </view>


              <view class="biaoqian-cardlist-card">
                <view class="biaoqian-cardlist-card-logo"><van-icon name="certificate" /></view>
                <view class="biaoqian-cardlist-card-title">可配送全球</view>
              </view>

              <view class="biaoqian-cardlist-card">
                <view class="biaoqian-cardlist-card-logo"><van-icon name="certificate" /></view>
                <view class="biaoqian-cardlist-card-title">包邮</view>
              </view>

              <view class="biaoqian-cardlist-card">
                <view class="biaoqian-cardlist-card-logo"><van-icon name="certificate" /></view>
                <view class="biaoqian-cardlist-card-title">30-30-180</view>
              </view>

              <view class="biaoqian-cardlist-card">
                <view class="biaoqian-cardlist-card-logo"><van-icon name="certificate" /></view>
                <view class="biaoqian-cardlist-card-title">安心服务</view>
              </view>

            </view>
          </view>
        </view>



        <!--      评论-->
        <view class="DetailView-detail-commet item-card">
<!--          评论顶部-->
          <view class="pinglun-1">
<!--            左侧-->
            <view class="pinglun-1-left">
              <view>评价</view>
              <view>(10万+)</view>
            </view>
<!--            右侧-->
            <view class="pinglun-1-right">
              <view>好评度 96%</view>
              <view><van-icon name="arrow" /></view>
            </view>


          </view>

<!--          具体评价-->
          <view class="pinglun-detail" v-for="item in 3">
<!--            头像 昵称  时间-->
            <view class="pinglun-detail-user">
              <view class="pinglun-detail-user-left">
                <view class="pinglun-detail-user-left-logo"><image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" /></view>
                <view class="pinglun-detail-user-left-name">好你的宝贝</view>
              </view>

              <view class="pinglun-detail-user-right">2021-23-21</view>
            </view>

<!--            打分 规格-->
            <view class="pinglun-detail-good">
              <view class="pinglun-detail-good-score">☆☆☆☆☆</view>
              <view class="pinglun-detail-good-dliver">|</view>
              <view class="pinglun-detail-good-format">黑色,1xl,1件</view>
            </view>

<!--            文字-->
            <view class="pinglun-detail-content">
              物流真快，昨晚十点多下单，今早十点多就送到家了！包装很好，手感不错，运行很快！老公很喜欢！存储也大！拍照效果杠杠滴！！
            </view>

<!--            图片-->
            <view class="pinglun-detail-pictures">
              <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
              <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
              <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
              <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
              <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
              <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            </view>
          </view>
        </view>

        <!--      详情-->
        <view class="DetailView-detail-introduce item-card">
          <view class="DetailView-detail-introduce-title">详情</view>
          <view class="DetailView-detail-introduce-pictures">
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
          </view>
        </view>
      </view>
    </view>

<!--    底部购买栏-->
    <view class="DetailView-bottomBar">
      <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-action-bar-icon icon="cart-o" text="购物车" />
        <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
        <van-action-bar-button type="warning" text="加入购物车" />
        <van-action-bar-button type="danger" text="立即购买" />
      </van-action-bar>
    </view>
  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import $ from "jquery"

export default {
  name: "DetailView",
  components: {},
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()

    const navClick = (num) => {
      console.log(num)
      $(".DetailView-topBar-vant-center-title").removeClass("title-activate")
      $(`.DetailView-topBar-vant-center-title:eq(${num})`).addClass("title-activate")

    }

    onMounted(() => {
      $(".DetailView-topBar-vant-center-title:eq(0)").addClass("title-activate")
    })


    //返回按钮
    const fanhui =  () => {
      console.log("返回")
      let pages = getCurrentPages(); // 当前页面
      let beforePage = pages[pages.length - 2]; // 前一个页面
      uni.navigateBack({
        success: function() {
          beforePage.onLoad(); // 执行前一个页面的onLoad方法
        },
      });
    }


    return {
      navClick,
      fanhui
    }

  }
}
</script>

<style scoped lang="scss">
.DetailView {
  position: relative;

  //顶部
  .DetailView-topBar {
    //background-color: red;
    height: 90rpx;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;



    //vant组件
    &-vant {
      height: 90rpx;

      &-center {
        display: flex;


        &-title {
          margin: 0rpx 20rpx ;
          font-size: 30rpx;
          position: relative;
        }

        //标题激活
        .title-activate {
          font-weight: 550;
          font-size: 32rpx;

          color: #ff9218;

          &::after {
            //z-index: 9999;
            content:"";
            position: absolute;
            bottom: 0rpx;
            left: 0;
            height: 3rpx;
            width: 63rpx;
            background-color: #ff9218;
          }

        }


      }
    }
  }

  //中间
  .DetailView-detail {

    //padding-top: 90rpx;
    //background-color: green;
    height: calc(100vh - 110rpx);
    overflow: auto;


    //卡片通用样式
    .item-card{
      //height: 300rpx;
      border-radius: 30rpx;
      background-color: #fff;
      width: calc(100% - 30rpx * 4);
      margin: 30rpx 30rpx;
      padding: 30rpx;

    }

    //隐藏滚动条
    &::-webkit-scrollbar{
      display: none;
    }

    //滚动区容器
    &-wrapper {
      background-color: #f2f2f2;
      padding-bottom: 10rpx;
    }


    // 轮播图
    &-rotate {
      height: 850rpx;
      width: 100%;
      background-color: #fff;

      image {
        width: 100%;
        height: 100%;
      }


    }


    //商品信息
    &-goodinfo {

      //第一行
      &-1 {
        display: flex;
        position: relative;
        margin-top: 10rpx;
        //align-items: ;
        align-items: flex-end;

        //现价
        .newprice {

          &-1 {
            color: #f2270c;
            font-size: 40rpx;
          }

          &-2{
            color: #f2270c;
            font-size: 70rpx;
          }

          &-3 {
            color: #f2270c;
            font-size: 40rpx;
          }
        }


        //原价
        .oldprice {
          margin: 0 0 0 30rpx ;

          &-1 {
            color: #333333;
            font-size: 40rpx;
          }

          &-2{
            color: #333333;
            font-size: 40rpx;
          }

          &-3 {
            color: #333333;
            font-size: 40rpx;
          }
        }



        //收藏
        .shoucang {
          position: absolute;
          right: 20rpx;
          bottom: 0;
          text-align: center;

          &-logo {

          }

          &-title {
            font-size: 24rpx;
          }


        }

      }


      //第二行
      &-2 {
        margin-top: 20rpx;
        font-size: 32rpx;
        font-weight: bold;
        line-height: 45rpx;
      }
    }

    //规格
    &-format {
      font-size: 28rpx;


      .yixuan {
        display: flex;

        &-title {
          color: #999999;

        }

        &-content {
          margin-left: 30rpx;
        }

      }

      .songzhi {
        margin-top: 45rpx;

        &-1 {
          display: flex;


          &-songzhi {
            color: #999999;

          }

          &-dizhi {
            margin-left: 30rpx;
            //color: #777777;

            &-top {

            }

            &-bottom {
              margin-top: 20rpx;
            }

          }
        }



      }

      .biaoqian {
        background-color: #f9f9f9;
        margin: 30rpx -30rpx -30rpx -30rpx;
        //padding: 30rpx 30rpx 30rpx 30rpx;
        padding-left: 30rpx;
        padding-top: 30rpx;


        border-radius: 0 0 30rpx 30rpx;

        &-cardlist {
          display: flex;
          flex-wrap: wrap;

          &-card {
            display: flex;
            //justify-content: space-between;
            align-items: flex-end;
            margin: 0 10rpx 20rpx 0;
            padding: 0;


            &-logo {

            }

            &-title {
              font-size: 26rpx;
              color: #979797;
            }
          }

        }

      }

    }

    //评论
    &-commet {

      .pinglun-1 {
        display: flex;
        justify-content: space-between;

        &-left {
          display: flex;
          align-items: flex-end;
          view {
            font-size: 36rpx;
            &+view {
              margin-left: 15rpx;
              color: #6f6f6f;
              font-size: 30rpx;
            }
          }
        }

        &-right {
          display: flex;

          view {
            font-size: 32rpx;
            color: #6f6f6f;

            &+view {
              color: #484848;
              font-weight: bold;
            }
          }
        }

      }


      //评论详情
      .pinglun-detail {
        //display: flex;
        margin-top: 32rpx;
        align-items: flex-end;

        //用户信息
        &-user {

          display: flex;
          justify-content: space-between;
          align-items: center;

          //左侧内容
          &-left {
            display: flex;
            align-items: center;


            //头像
            &-logo {


              image {
                border-radius: 50%;
                width: 60rpx;
                height: 60rpx;

              }
            }

            //昵称
            &-name {
              margin-left: 30rpx;

            }

          }

          //右侧 时间
          &-right {


          }

        }


        //打分和 商品信息
        &-good {
          margin-top: 20rpx;
          display: flex;

          &-score {

          }

          &-dliver {

          }

          &-format {

          }


        }


        //文字评论
        &-content {
          margin-top: 30rpx;
          font-size: 30rpx;
          line-height: 35rpx;

        }

        //图片组
        &-pictures {
          display: flex;

          flex-wrap: wrap;
          justify-content: space-between;
          margin: 20rpx 0 0 0;


          image {
            margin: 15rpx 0 0 0;

            border-radius: 15rpx;
            width: 32%;
            height: 200rpx;
          }
        }
      }

    }


    //详细信息
    &-introduce {

      &-title {

      }

      &-pictures {
        margin-top: 30rpx;

        image {
          width: 100%;

        }
      }

    }


  }

  //底部
  .DetailView-bottomBar {
    position: fixed;

    height: 110rpx;
    z-index: 999;
    width: 100%;

  }

}


::v-deep .van-nav-bar .van-icon {
  color: #ff7952;
}


</style>