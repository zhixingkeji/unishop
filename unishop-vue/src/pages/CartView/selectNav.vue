<template>
<!--  底部支付栏 组件-->
  <view class="selectNav">
    <view  class="selectNav-left">
      <view class="selectNav-left-btn">
        <van-checkbox v-model="checkedAll" checked-color="#ee0a24" @click="checkAll"></van-checkbox>

      </view>
      <view class="selectNav-left-all">全选</view>
      <view v-if="!editBtn" class="selectNav-left-heji">合计: ¥</view>
      <view v-if="!editBtn" class="selectNav-left-num">{{totalCount.pprice.toFixed(2)}}</view>
    </view>


    <view  class="selectNav-right">
      <van-button v-if="!editBtn" class="selectNav-right-jiesuan" round type="danger" >去结算({{totalCount.count}})</van-button>
      <van-button v-else class="selectNav-right-shanchu" round type="danger" @click="deletegoodsAction">删除({{totalCount.count}})</van-button>
    </view>
  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {mapGetters, useStore} from "vuex";
import {onMounted, ref} from "vue";
import {mapState, mapActions} from "vuex";
import $ from "jquery"

export default {
  name: "selectNav",
  components: {},

  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()

    const checked = ref('1');


    onMounted(() => {
      console.log( store.state.cart.editBtn)



    })



    return {
      checked,
      store
    }

  },

  methods: {
    ...mapActions(['checkAll','deletegoodsAction'])
  },



  computed:{
    ...mapState({
      list : state => state.cart.list,
      editBtn : state => state.cart.editBtn,
      selectedList : state => state.cart.selectedList,
    }),

    //获取是否全选
    ...mapGetters(['checkedAll','totalCount'])
  }
}
</script>

<style scoped lang="scss">
.selectNav {
  display: flex;
  background-color: #fff;
  //background-color: #fff;
  height: 110rpx;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-right: 30rpx;
  padding-left: 20rpx;
  position: fixed;
  bottom: 110rpx;
  border-top: 0.1rpx solid #dddbdb;



  .selectNav-left {
    display: flex;
    align-items: center;


    &-all {
      margin-left: 20rpx;
    }

    &-heji {
      margin-left: 10rpx;
    }

    &-num {
      margin-left: 5rpx;
    }


  }

  .selectNav-center {
    //display: flex;


  }

  .selectNav-right {


    //结算按钮
    &-jiesuan {
      height: 80rpx;
      width: 210rpx;
      background-color: #fa3835;
      font-size: 25rpx;

    }

    //删除按钮
    &-shanchu {
      height: 60rpx;
      width: 160rpx;
      background-color: #fff;
      font-size: 25rpx;
      color: #484848;
      border: 1rpx solid #484848 ;

    }

  }
}

</style>