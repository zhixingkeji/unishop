<template>
<!--  购物车单个商品卡片-->
  <view class="card_list">

    <!--    内容块 1-->
    <view class="card_list-1">

        <van-checkbox v-model="store.state.cart.list[data].checkValue" checked-color="#ee0a24" @click="selectOne(data)"></van-checkbox>

    </view>

    <!--    内容块 2-->
    <view class="card_list-2">
      <image
          @click="goDetail()"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          class="card_list-2-picture"
      />

    </view>

    <!--    内容块 3-->
    <view class="card_list-3">
      <view  @click="goDetail()" class="card_list-3-title">{{store.state.cart.list[data].title}}</view>
      <view class="card_list-3-specify">规格</view>
      <view class="card_list-3-price">¥{{(store.state.cart.list[data].price * store.state.cart.list[data].discount).toFixed(2)}}</view>
    </view>


    <!--    内容块 4-->
    <view class="card_list-4">
      <van-stepper v-model="store.state.cart.list[data].amount" theme="round" button-size="22" disable-input />
    </view>


  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {mapMutations, useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "card_list",
  components: {},
  props: {
    data: Object,
  },
  methods: {
    ...mapMutations(['selectOne'])
  },
  setup(props,content) {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()

    const checked = ref(false);


    let data = props.data
    console.log("传过来的商品信息",data)


    //跳转到详情
    const goDetail = () => {
      console.log("去详情")
      uni.navigateTo({
        url: "/pages/DetailView/DetailView",
        success: (e) => {
          uni.hideLoading();

        },

        fail: (e) => {

        }
      })
    }


    return {
      checked,
      data,
      store,
      goDetail
    };


  }
}
</script>

<style scoped lang="scss">
.card_list {
  display: flex;
  background-color: #fff;
  margin: 30rpx;

  border-radius: 30rpx;
  align-items: center;

  //overflow: hidden;


  //width: 100%;
  height: 300rpx;

  position: relative;


  // 元素1 单选按钮
  .card_list-1 {
    margin-left: 25rpx;

  }


  //元素2 图片
  .card_list-2 {
    border-radius: 30rpx!important;

    &-picture {
      margin: 0 20rpx;
      width: 200rpx;
      height: 200rpx;

      border-radius: 18rpx!important;
    }

  }


  //元素3 右侧内容
  .card_list-3 {

    margin-right: 25rpx;


    //标题
    &-title {
      //超过两行后省略
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 这里是超出几行省略 */
      overflow: hidden;

      //禁止数字或者英文换行
      word-break: break-all;

      font-size: 32rpx;
      line-height: 40rpx;
    }



    //规格
    &-specify {
      margin: 25rpx 0;
      color: #969696;
      font-size: 30rpx;
    }



    //金额
    &-price {
      color: #f81818;
      font-size: 35rpx;

    }


  }


  //元素4 步进器
  .card_list-4 {
    position: absolute;
    bottom: 40rpx;
    right: 30rpx;

  }


}

</style>