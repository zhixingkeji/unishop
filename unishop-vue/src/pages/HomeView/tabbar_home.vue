<template>
<!--顶部标题栏-->
  <view class="tabbar_home">


    <van-nav-bar class="navbar">
      <template #left>
        <van-icon name="search" size="28" style="color:#d03633" @click="goSearch"/>
      </template>

      <template #title>
        标题你好
      </template>


      <template #right>
        <van-icon name="chat-o" badge="9" size="28" style="color: #484848"/>
      </template>
    </van-nav-bar>


    <!--&lt;!&ndash;    logo&ndash;&gt;-->
    <!--    <view  class="tabbar_home-left">-->
    <!--      <image src="~@/static/img/logo.png" alt=""></image>-->
    <!--    </view>-->

    <!--&lt;!&ndash;    搜索条&ndash;&gt;-->
    <!--    <view class="tabbar_home-center">-->


    <!--&lt;!&ndash;      搜索图标&ndash;&gt;-->
    <!--      <view class="tabbar_home-search">-->
    <!--        <svg class="" aria-hidden="true">-->
    <!--          <use xlink:href="#icon-sousuotianchong"></use>-->
    <!--        </svg>-->
    <!--      </view>-->

    <!--      &lt;!&ndash;      输入框&ndash;&gt;-->
    <!--      <view class="tabbar_home-center-input"></view>-->

    <!--&lt;!&ndash;      竖线&ndash;&gt;-->
    <!--      <view class="tabbar_home-center-divider"></view>-->

    <!--&lt;!&ndash;      扫描&ndash;&gt;-->
    <!--      <view class="tabbar_home-center-scan">-->
    <!--        <svg class="" aria-hidden="true">-->
    <!--          <use xlink:href="#icon-saomiao"></use>-->
    <!--        </svg>-->
    <!--      </view>-->

    <!--    </view>-->

    <!--&lt;!&ndash;    消息&ndash;&gt;-->
    <!--    <view class="tabbar_home-right">-->
    <!--      <svg class="" aria-hidden="true">-->
    <!--        <use xlink:href="#icon-message"></use>-->
    <!--      </svg>-->
    <!--    </view>-->

  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import $ from "jquery"


export default {
  name: "tabbar_home",
  components: {},
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()

    onMounted(()=>{
      $(".search-icon").css("color","#e62d1b")
    })


    const goSearch = () => {
      uni.navigateTo({
        url: "/pages/SearchView/SearchView",
        success: (e) => {
          uni.hideLoading();

        },

        fail: (e) => {

        }
      })
    }
    return {
      goSearch
    }

  }
}
</script>

<style scoped lang="scss">
.tabbar_home {
  height: 90rpx;
  width: 100%;
  position: fixed;
  top:  0;
  left: 0;
  z-index: 999;

  .navbar {
    height: 90rpx;

  }

  .search-icon {
    width: 40rpx;
    height: 40rpx;
    //color: !important;

  }

  .message-icon {
    width: 40rpx;
    height: 40rpx;
    color: #484848;

  }


}

</style>