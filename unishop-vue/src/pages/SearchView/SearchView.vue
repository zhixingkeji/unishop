<template>
<!--  搜索页面-->
  <view class="SearchView">
<!--    顶部搜索栏-->
    <view class="SearchView-1">
      <view class="SearchView-1-left" @click="fanhui"><van-icon name="arrow-left" /></view>
      <view class="SearchView-1-center"><van-search v-model="searchkey" placeholder="请输入搜索关键词" /></view>
      <view class="SearchView-1-right" @click="searchHandler(null)">搜索</view>
    </view>


<!--    历史记录-->
    <view class="SearchView-2">
      <view class="title">最近搜索</view>

      <view v-if="!historyNull">
  <!--      卡片-->
        <view class="cardlist">
          <view @click="searchHandler(item)" v-for="(item, index) in lately_list">{{item}}</view>
        </view>

  <!--     垃圾桶-->
        <view class="trash" >
          <van-icon name="delete-o" size="20" @click="trashHandler"/>
        </view>
      </view>

      <view v-else class="historyNull">暂无历史记录</view>
    </view>

<!--    热门搜索-->
    <view class="SearchView-3">
      <view class="title">热门搜索</view>

      <view class="cardlist">
        <view @click="searchHandler(item)" v-for="(item, index) in hot_list">{{item}}</view>
      </view>
    </view>

<!--    搜索结果-->
    <view class="SearchView-4">
      <search_result v-model:searchkey="searchkey"></search_result>
    </view>

  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted, provide, ref, watch} from "vue";
import $ from "jquery"
import search_result from "./search_result";

export default {
  name: "SearchView",
  components: {
    search_result
  },


  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()


    let rightLogo = ref()

    //初始化
    onMounted(() => {
      $(".SearchView-4").css("display", "none")
    })

    //搜索关键词
    let searchkey = ref("")
    // provide('searchkey', searchkey); // provide的第一个为名称，第二个值为所需要传的参数

    //判断是否未输入内容 切换搜索选项卡和数据展示组件
    watch(() => searchkey.value, (val) => {
      //查看父组件传过来的值是否变化，从而修改值
      searchkey.value = val
      // console.log(searchkey.value)
      if(searchkey.value == ""){
        $(".SearchView-4").css("display", "none")
        $(".SearchView-2,.SearchView-3").css("display", "")
      }
    });

    //判断是否为无历史记录 true为空 false不为空
    let historyNull = computed(()=>{
        return lately_list.value.length === 0
      }
    )

    //最近搜索数据模型
    let lately_list = ref([])
    uni.getStorage({
      key: "lately_list",
      success: (res) => {
        console.log(res)
        lately_list.value = JSON.parse(res.data)
      }
    })


    //热门搜索数据模型
    let hot_list = ref([
      "asdlh",
      "123123",
      "阿里巴巴",
      "马桶",
        "安慰晋三",
        "马化工",
        "本色",
        "面膜",
        "强大"
    ])


    //点击搜索按钮
    const searchHandler = (item) => {
      if(item) {
        console.log(item)
        console.log("点击标签进来的")
        searchkey.value = item

      }else{
        console.log(item)
        console.log("搜索进来的")
        item = searchkey.value
      }


      //添加最近搜索
      addSearchKey(item)

      //缓存数据
      uni.setStorage({
        key: "lately_list",
        data: JSON.stringify(lately_list.value)
      })


      //切换搜索选项卡和数据展示组件
      $(".SearchView-2,.SearchView-3").css("display", "none")
      $(".SearchView-4").css("display", "")
    }

    // 添加最近搜索
    const addSearchKey = (item) => {
      //判断列表中是否出现过该关键字
      let idx = lately_list.value.indexOf(item)
      // 小于0 则未找到 说明没出现过
      if(idx < 0 ) {
        //1 将搜索的词条加入到list中,点击标签进来的也要前置记录
        lately_list.value.unshift(item)
        console.log(lately_list.value)
      }else {
        //如果大于等于0 则找到了 要删除原来的索引
        lately_list.value.splice(idx,1)
        lately_list.value.unshift(item)
      }


    }


    //返回按钮
    const fanhui =  () => {
      console.log("返回")
      let pages = getCurrentPages(); // 当前页面
      let beforePage = pages[pages.length - 2]; // 前一个页面
      uni.navigateBack({
        success: function() {
          beforePage.onLoad(); // 执行前一个页面的onLoad方法
        },
      });
    }


    //删除按钮
    const trashHandler = () => {
      console.log("删除")
      lately_list.value = []
      console.log(lately_list.value.length);

      //清空缓存
      uni.setStorage({
        key: "lately_list",
        data: JSON.stringify([])
      })

    }




    return {

      searchHandler,
      fanhui,
      trashHandler,
      searchkey,
      lately_list,
      hot_list,
      historyNull
    }


  }
}
</script>

<style scoped lang="scss">
.SearchView {

  background-color: #f9f9f9;
  height: 100vh;

  //内容块1 顶部标题栏
  .SearchView-1 {
    background-color: #f9f9f9;

    height: 90rpx;
    //background-color: red;
    display: flex;
    //border-bottom: 2px solid #ececec;
    align-items: center;

    &-left {
      width: 10%;
      text-align: center;

    }

    &-center {
      width: 75%;
    }


    &-right {
      width: 15%;
      text-align: center;

    }

  }


  //内容块2 最近所搜
  .SearchView-2 {
    //background-color: green;
    overflow: hidden;
    height: 235rpx;
    position: relative;
    background-color: #f9f9f9;

  }


  //内容块3 热门搜索
  .SearchView-3 {
    background-color: #f9f9f9;
    overflow: hidden;
    height: 235rpx;
  }
}

//小标题
.title {
  margin: 40rpx 35rpx 20rpx 35rpx;
  font-size: 28rpx;
  //font-weight: bold;
  //color: #7f7f7f;
}

//卡片列表
.cardlist {
  //background-color: red;
  margin: 0   40rpx 0 25rpx ;
  display: flex;
  flex-wrap: wrap;


  view {
    background-color: #fff;
    padding: 15rpx 30rpx;
    border-radius: 30rpx;
    margin: 10rpx 10rpx;
    font-size: 26rpx;
  }
}

//垃圾桶
.trash {
  position: absolute;
  top: 40rpx;
  right: 30rpx;
}


//无历史记录记模块
.historyNull {
  text-align: center;
  color: #484848;
  font-size: 30rpx;
  //text-vertical: center;
  padding-top: 55rpx;
}

//搜索条
::v-deep .van-search {
  height: 90rpx;
  background-color: #f9f9f9;
}



//搜索条的输入框
::v-deep .van-search__content{
  border-radius: 50rpx;
  background-color: #fff;
}
</style>