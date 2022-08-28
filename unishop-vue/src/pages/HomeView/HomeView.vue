<template>
<!--  首页 主页面-->
  <view class="HomeView">

<!--    顶部菜单-->
    <tabbar_home></tabbar_home>

<!--    顶部导航-->
    <navbar_home v-model:component_index="component_index"></navbar_home>


<!--swiper组件切换-->

    <van-swipe class="my-swipe" indicator-color="white" :loop="false" :lazy-render="true" @change="changeSwiper">
      <van-swipe-item>
        <Component :is="component_home[0].name" />
      </van-swipe-item>
      <van-swipe-item>
        <Component :is="component_home[1].name" />
      </van-swipe-item>
      <van-swipe-item>
        <Component :is="component_home[1].name" />
      </van-swipe-item>
      <van-swipe-item>
        <Component :is="component_home[1].name" />
      </van-swipe-item>
      <van-swipe-item>
        <Component :is="component_home[1].name" />
      </van-swipe-item>
      <van-swipe-item>
        <Component :is="component_home[1].name" />
      </van-swipe-item>
      <van-swipe-item>
        <Component :is="component_home[1].name" />
      </van-swipe-item>
    </van-swipe>



  </view>

  <!--底部菜单-->
  <BigNav class="bignav"></BigNav>

</template>

<script>
import {ref} from "vue";

import tabbar_home from "./tabbar_home";
import swiper_home from "./swiper_home";
import navbar_home from "./navbar_home";
import recommend_home from "./recommend_home";
import classify_home from "./classify_home";


import {Swiper, SwiperSlide} from "swiper/vue";
//左右翻页箭头和翻页条
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
// import uni from "@dcloudio/vite-plugin-uni";

export default {
  name: "HomeView",
  components: {
    // BigNav,
    tabbar_home,
    swiper_home,
    navbar_home,
    classify_home,
    recommend_home,

    Swiper,
    SwiperSlide
  },

  setup() {
    let title = ref("hello")


    const modules = [Pagination, Navigation, Autoplay]
    //切换首页的组件信息
    let component_home = ref([
      {
        title: "推荐",
        name: "recommend_home"
      },
      {
        title: "其他",
        name: "classify_home"

      }
    ])

    //双向绑定 菜单的index值
    let component_index = ref(0)


    //滑动后修改索引值
    const changeSwiper = (index) => {
      console.log("轮播图索引",index)
      component_index.value = index
    }


    return {
      title,
      component_home,
      component_index,
      modules,
      changeSwiper
    }
  }
}
</script>

<style scoped lang="scss">

.HomeView {

  padding-top: 180rpx;
  padding-bottom: 120rpx;
  width: 100vw;
  height: 100%;


  //overflow: hidden;
  position: relative;

  &-1 {

    height: 300rpx;
  }


}


//轮播图组件样式
.my-swipe .van-swipe-item {
  //color: #fff;
  //font-size: 20px;
  //line-height: 150px;
  //text-align: center;
  background-color: #f2f1f6;

}


//删去步骤条
::v-deep .van-swipe__indicators{
  display: none;
}
</style>
