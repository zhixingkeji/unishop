<template>
  <div class="swiper_home">
<!--轮播图组件-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in lunbo_list">
<!--        {{item}}-->
<!--        <image src="~@/static/img/HomeView/swiper/lunbo1.png"></image>-->
        <image :src="item"></image>
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";


// 导入图片
import lunbo1 from "~@/static/img/HomeView/swiper/lunbo1.png"
import lunbo2 from "~@/static/img/HomeView/swiper/lunbo2.png"
import lunbo3 from "~@/static/img/HomeView/swiper/lunbo3.png"
import lunbo4 from "~@/static/img/HomeView/swiper/lunbo4.png"
import lunbo5 from "~@/static/img/HomeView/swiper/lunbo5.png"
import lunbo6 from "~@/static/img/HomeView/swiper/lunbo6.png"
import lunbo7 from "~@/static/img/HomeView/swiper/lunbo7.png"
import lunbo8 from "~@/static/img/HomeView/swiper/lunbo8.png"

export default {
  name: "swiper_home",
  components: {},
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()

    const lunbo_list = [
      lunbo1,lunbo2,lunbo3,lunbo4,lunbo5,lunbo6,lunbo7,lunbo8
    ]

    return {
      lunbo_list
    }

  }
}
</script>

<style scoped lang="scss">
.swiper_home {
  margin: 0 27rpx;
  height: 260rpx;


  image {

    width: 100%;
    height: 260rpx;
    border-radius: 15rpx;

  }



  .my-swipe .van-swipe-item {

    height: 260rpx;
    border-radius: 15rpx;

  }



}

</style>