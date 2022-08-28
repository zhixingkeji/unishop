<template>
<!--  组件 底部导航栏-->
  <view class="BigNav">

<!--首页-->
    <view class="BigNav-card" @click="navClick(1)">
      <svg class="BigNav-card-logo " aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg>

      <view class="BigNav-card-title">首页</view>
    </view>

<!--分类-->
    <view class="BigNav-card" @click="navClick(2)">
      <svg class="BigNav-card-logo" aria-hidden="true">
        <use xlink:href="#icon-yingyong"></use>
      </svg>

      <view class="BigNav-card-title">分类</view>

    </view>

<!--购物车-->
    <view class="BigNav-card" @click="navClick(3)">
      <svg class="BigNav-card-logo" aria-hidden="true">
        <use xlink:href="#icon-gouwuchefill"></use>
      </svg>

      <view class="BigNav-card-title">购物车</view>

    </view>

<!--我的-->
    <view class="BigNav-card" @click="navClick(4)">
      <svg class="BigNav-card-logo" aria-hidden="true">
        <use xlink:href="#icon-wode"></use>
      </svg>

      <view class="BigNav-card-title">我的</view>

    </view>




  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import  $ from 'jquery'

export default {
  name: "BigNav",
  components: {},
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()

    //初始化
    onMounted(()=>{

      // 获取当前打开过的页面路由数组
      let routes = getCurrentPages();
      // console.log(routes)


      // 获取当前页面路由，也就是最后一个打开的页面路由
      let curRoute = routes[routes.length - 1].route
      // console.log(curRoute)


      //菜单标识 0-3 代表四个主页面
      let num = 0

      //查看是否存在UserView关键字 再添加上菜单激活样式
      if(curRoute.includes("HomeView")) {
        console.log("当前是用户组件")
        num = 0
        let temp1 = ".BigNav-card-title:eq(" + num + "),.BigNav-card-logo:eq(" + num + ")"
        $(temp1).addClass("nav-active")
      }

      //查看是否存在UserView关键字 再添加上菜单激活样式
      if(curRoute.includes("ClassifyView")) {
        console.log("当前是分类组件")
        num = 1
        let temp1 = ".BigNav-card-title:eq(" + num + "),.BigNav-card-logo:eq(" + num + ")"
        $(temp1).addClass("nav-active")
      }

      //查看是否存在UserView关键字 再添加上菜单激活样式
      if(curRoute.includes("CartView")) {
        console.log("当前是购物车组件")
        num = 2
        let temp1 = ".BigNav-card-title:eq(" + num + "),.BigNav-card-logo:eq(" + num + ")"
        $(temp1).addClass("nav-active")
      }



      //查看是否存在UserView关键字   再添加上菜单激活样式
      if(curRoute.includes("UserView")) {
        console.log("当前是用户组件")
        num = 3
        let temp1 = ".BigNav-card-title:eq(" + num + "),.BigNav-card-logo:eq(" + num + ")"
        $(temp1).addClass("nav-active")
      }
    })


    // 菜单路由切换
    const navClick = (num) => {
      console.log(num)
      //先清除所有样式
      // $(".BigNav-card-title,.BigNav-card-logo").removeClass("nav-active")

      //再添加上激活样式
      // let temp1 = ".BigNav-card-title:eq(" + (num-1) + "),.BigNav-card-logo:eq(" + (num-1) + ")"
      // $(temp1).addClass("nav-active")


      if(num == 1) {
        uni.navigateTo({
          url: "/pages/HomeView/HomeView",
          success: (e) => {
            uni.hideLoading();

          },

          fail: (e) => {

          }
        })
      }

      if(num == 2) {
        uni.navigateTo({
          url: "/pages/ClassifyView/ClassifyView",
          success: (e) => {
            uni.hideLoading();

          },

          fail: (e) => {

          }
        })

      }


      if(num == 3) {
        uni.navigateTo({
          url: "/pages/CartView/CartView",
          success: (e) => {
            uni.hideLoading();

          },

          fail: (e) => {

          }
        })

      }


      if(num == 4) {
        uni.navigateTo({
          url: "/pages/UserView/UserView",
          success: (e) => {
            uni.hideLoading();

          },

          fail: (e) => {

          }
        })

      }

    }

    return {
      navClick
    };
  }
}
</script>

<style scoped lang="scss">

.BigNav {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  //margin: 0 auto;
  text-align: center;
  position: fixed;
  bottom: 0;
  height: 110rpx /* 56/7.5 */;
  border-top: 1rpx solid #dddbdb;

  &-card {
    background-color: #fff;
    //height: 110rpx /* 56/7.5 */;


    width: 25%;

    &-logo {
      //菜单栏默认颜色
      color: #474748;
      margin-top: 15rpx;
      width: 50rpx; height: 50rpx;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }

    &-title {
      //菜单栏默认颜色
      color: #474748;
      margin-top: 8rpx;
      font-size: 25rpx;
    }

    .nav-active {
      color: #fe6056;
    }


  }
}



.icon {

}

</style>