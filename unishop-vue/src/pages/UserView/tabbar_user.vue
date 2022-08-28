<template>
  <view class="tabbar_user">
    <van-nav-bar class="navbar">
<!--      左侧-->
<!--      <template #left>-->
<!--        <van-icon name="search" size="28" style="color:#d03633"/>-->
<!--      </template>-->


<!--      中间-->
      <template #title>

      </template>


<!--      右侧-->
      <template #right>

<!--        设置-->
        <view @click="goPage">
          <van-icon name="setting-o" size="24" style="color:#484848" />

        </view>

<!--        消息-->
<!--        <view>-->
<!--          <van-icon name="chat-o" badge="9" size="24" style="color: #484848"/>-->

<!--        </view>-->


      </template>
    </van-nav-bar>

  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref,getCurrentInstance} from "vue";
// import {} from "vue";

export default {
  name: "tabbar_user",
  components: {},
  setup(props, context) {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()


    //获取this
    const { proxy } = getCurrentInstance(); //  方式二，此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐）

    //跳转页面
    const goPage = (str) => {
      console.log("去详情")
      uni.switchTab({
        url: "/pages/UserView/setting",
        success: (e) => {
          uni.hideLoading();
        },

        fail: (e) => {
        }
      })
    }

    return {
      goPage
    }

  }
}
</script>

<style scoped lang="scss">
.tabbar_user {

}

</style>