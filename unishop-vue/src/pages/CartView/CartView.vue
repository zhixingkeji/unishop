<template>
<!--  购物车主页面-->
  <view class="CartView">
    <tabbar_cart v-model:editBtn="editBtn"></tabbar_cart>


<!--    <van-button type="primary" @click="changeTheme('white')">白天主题</van-button>-->
<!--    <van-button type="primary" @click="changeTheme('dark')">黑夜主题</van-button>-->
    <view style=" padding-top: 90rpx;">

    <!--      下拉刷新 start-->
      <van-pull-refresh  v-model="loading" success-text="刷新成功" @refresh="onRefresh">

        <!--        购物车列表 start-->
        <view class="CartView-cardlist" >
          <card_list v-for="(item,index) in store.state.cart.list.length" :data="index"></card_list>
        </view>
        <!--        购物车列表 end-->


        <!--      购物车为空 start-->
        <view class="CartView-nulllist">
          <view class="CartView-nulllist-logo">
            <image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
          </view>
          <view class="CartView-nulllist-title">购物车为空</view>
        </view>
        <!--      购物车为空 end-->


      </van-pull-refresh>
      <!--      下拉刷新 end-->
    </view>

  </view>

  <selectNav></selectNav>

  <!--底部菜单-->
  <BigNav class="bignav"></BigNav>

</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {mapState, useStore} from "vuex";
import {computed, getCurrentInstance, onMounted, ref} from "vue";
import tabbar_cart from "./tabbar_cart";
import selectNav from "./selectNav";
import card_list from "./card_list";
import {Toast} from "vant";
import $ from 'jquery';

// import BigNav from "../../components/BigNav";
export default {
  name: "CartView",
  components: {
    // BigNav
    tabbar_cart,
    card_list,
    selectNav
  },
  computed: mapState({

    a : state => state.cart.a,

  }),

  setup(props, context) {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()
    const { proxy } = getCurrentInstance(); //  方式二，此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐）



    //主题事件1.监听按钮改变 将变量themeColor存到localStorage中
    const changeTheme = (num)=> {
      console.log("改变主题",num)
      localStorage.setItem('themeColor',num);

      console.log(proxy)
      proxy.$resetSetItem('themeColor',num);
    }

    //初始化
    onMounted(() => {

      //购物车少于4个商品,不能向下滚动, 大于等于4个向下可以滚动
      if(store.state.cart.list.length <=3 && store.state.cart.list.length> 0)  {
        $(".CartView").css("overflow","hidden")
      }


      //购物车为空展示不同组件
      if(store.state.cart.list.length == 0){
        $(".CartView-cardlist").css("display","none")

      }else {
        $(".CartView-nulllist").css("display","none")

      }

    })

    //测试vuex
    console.log(store.state.cart.list.length)


    //下拉刷新
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        // Toast('刷新成功');
        loading.value = false;

      }, 500);
    };


    //是否为编辑状态
    let editBtn = ref(false)


    return {
      changeTheme,
      store,
      loading,
      onRefresh,
      editBtn
    }

  }
}
</script>

<style scoped lang="scss">
.CartView {
  background-color: #f2f2f2;

  height: calc(93vh);

  .CartView-cardlist {
    padding-top: 10rpx;

    height: 98vh;
  }

  .CartView-nulllist {
    padding-top: 350rpx;
    text-align: center;
    color: #8e918e;
    height: 98vh;

    &-logo {
      image {
        width: 400rpx;
        height: 300rpx;

      }
    }


    &-title {
      margin-top: 40rpx;
    }



  }
}

</style>