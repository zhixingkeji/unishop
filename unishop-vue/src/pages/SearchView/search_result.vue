<template>
  <view class="search_result">
<!--    排序-->
    <view class="navbar">
      <view class="sorttitle" @click="sort(0)">销量
        <text class="top"></text>
        <text class="bottom"></text>
      </view>

      <view class="sorttitle" @click="sort(1)">价格
        <text class="top"></text>
        <text class="bottom"></text>
      </view>

      <view class="sorttitle" @click="sort(2)">最新
        <text class="top"></text>
        <text class="bottom"></text>
      </view>


    </view>


    <!--    商品详情-->
    <view class="cardlist">
      <view class="cardlist-card" v-for="item in 8" @click="goDetail">
<!--        左侧内容-->
        <view class="cardlist-card-left">
          <image

              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
              class="card_list-2-picture"
          />
        </view>
<!--        右侧内容-->
        <view class="cardlist-card-right" >
          <view>标题</view>
          <view>价格</view>
          <view>标签</view>
          <view>评价条数 好评率</view>
        </view>

      </view>
    </view>
  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {inject, onMounted, ref, watch} from "vue";
import $ from "jquery"

export default {
  name: "search_result",
  components: {},
  props: {
    searchkey: {
      type: String,
    }
  },
  setup(props,context) {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()

    //搜索关键字
    // let searchkey = inject("searchkey")
    // console.log(searchkey)

    let searchkey = ref(props.searchkey)


    //监听变化
    watch(() => props.searchkey, (val) => {
      //查看父组件传过来的值是否变化，从而修改值
      searchkey.value = val
      // console.log( searchkey.value)
    });
    watch(() => searchkey.value, (val) => {
      //查看子组件值是否变化，在赋值给父组件
      context.emit('update:searchkey', val)
    });

    //初始化
    onMounted(() => {
      $(".sorttitle:eq(0)").css("color","#d7342b")
      $(".top:eq(0)").css("border-color","transparent transparent #d7342b")
    })


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



    //排序函数
    const sort = (index) => {
      console.log(index)

      //切换正逆序
      sortvalue.value = !sortvalue.value
      console.log(sortvalue.value)

      //清空样式
      $(".sorttitle").css("color","#484848")
      $(".top, .bottom").css("border-color","transparent transparent #999")


      //通过销量排序
      if(index == 0) {

        if(sortvalue.value){
          $(".sorttitle:eq(0)").css("color","#d7342b")
          $(".top:eq(0)").css("border-color","transparent transparent #d7342b")
        }else{
          $(".sorttitle:eq(0)").css("color","#d7342b")
          $(".bottom:eq(0)").css("border-color","transparent transparent #d7342b")
        }
      }

      //通过销量排序
      if(index == 1) {
        if(sortvalue.value){
          $(".sorttitle:eq(1)").css("color","#d7342b")
          $(".top:eq(1)").css("border-color","transparent transparent #d7342b")
        }else{
          $(".sorttitle:eq(1)").css("color","#d7342b")
          $(".bottom:eq(1)").css("border-color","transparent transparent #d7342b")
        }
      }

      //通过销量排序
      if(index == 2) {
        if(sortvalue.value){
          $(".sorttitle:eq(2)").css("color","#d7342b")
          $(".top:eq(2)").css("border-color","transparent transparent #d7342b")
        }else{
          $(".sorttitle:eq(2)").css("color","#d7342b")
          $(".bottom:eq(2)").css("border-color","transparent transparent #d7342b")
        }
      }
    }

    //排序正反变量 true为上 false为下
    let sortvalue = ref(true)



    return {
      searchkey,
      sort,
      goDetail
    }

  }
}
</script>

<style scoped lang="scss">
.search_result {
  background-color: #fff;
  //导航栏
  .navbar {
    display: flex;
    padding: 30rpx 0rpx 0 0;
    justify-content: center;



    .sorttitle {
      position: relative;
      margin: 0 80rpx 0 50rpx;
      font-size: 35rpx;
      color: #484848;
    }



    //上三角
    .top {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 7px;
      border-color: transparent transparent #999999;
      position: absolute;

      top: 0;
      left: 80rpx;
    }


    //.top:hover {
    //  cursor: pointer;
    //  border-color: transparent transparent #d7342b;
    //}


    //下三角
    .bottom {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 7px;
      border-color: transparent transparent #999999;
      transform: rotate(180deg);
      position: absolute;
      bottom: 0;
      left: 80rpx;
    }


    //.bottom:hover {
    //  cursor: pointer;
    //  border-color: transparent transparent #d7342b;
    //}

  }

  //卡片容器
  .cardlist {

    &-card {
      display: flex;
      margin: 30rpx 30rpx;

      &-left {
        width: 30vw;


        image {
          width: 100%;
          height: 30vw;
          border-radius: 20rpx;
        }
      }

      &-right {
        margin: 20rpx 30rpx;
      }

    }
  }
}

</style>