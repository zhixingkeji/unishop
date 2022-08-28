<template>
  <!--  顶部标题栏 组件-->
  <van-nav-bar class="navbar">
    <template #left>
      <view class="navbar-left">购物车</view>
    </template>

    <template #title>
      <view class="navbar-center">
        <van-icon name="chat-o"  size="20" style="color: #484848"/>
        <view style="margin-left: 10rpx;">北京市丰台区长辛店西峰寺钢材库附近</view>
      </view>

    </template>


    <template #right>
      <view class="navbar-right" @click="rightBtnClick">
        {{editBtn  ?  "完成" : "编辑" }}
      </view>

    </template>
  </van-nav-bar>

</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {mapGetters, mapMutations, mapState, useStore} from "vuex";
import {ref, watch} from "vue";

export default {
  name: "tabbar_cart",
  components: {},

  methods: {
    ...mapMutations(['changeEditBtn'])
  },
  computed:{
    ...mapState({
      editBtn: state =>  state.cart.editBtn
    }),
    ...mapGetters([])
  },
  setup(props,context) {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()


    //按钮点击函数
    const rightBtnClick = () => {
      // editBtn.value = !editBtn.value

      store.commit("changeEditBtn")
      console.log("是否为编辑状态",store.state.cart.editBtn)
    }



    return {
      store,
      rightBtnClick
    }

  }
}
</script>

<style scoped lang="scss">
.navbar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f2f2f2;
  height: 90rpx;

  .navbar-left {
    font-size: 34rpx;
  }
  .navbar-center {

    display: flex;
    font-size: 22rpx;
  }

  .navbar-right {

  }

}


</style>