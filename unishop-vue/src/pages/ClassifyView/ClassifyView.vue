<template>
  <!--  分类主页面-->
  <view class="ClassifyView">
    <!--    顶部搜索框-->
    <view class="ClassifyView-top">
      <van-search v-model="searchKey" placeholder="请输入搜索关键词" @click=""/>
      <div class="dividing"></div>
    </view>

<!--    下半部分-->
    <view class="tree-select">
<!--      左侧菜单栏-->
      <view class="tree-select-left">
        <view class="tree-select-left-menuitem" @click="menuClick(item,index)" v-for="(item,index) in menuItems">{{item.text}}</view>

      </view>

<!--      右侧内容栏-->
      <view class="tree-select-right">

        <view class="tree-select-right-content">
          <classCard v-model:activeIndex="activeIndex" :menuItems="menuItems"></classCard>
        </view>
      </view>
    </view>


  </view>

  <!--底部菜单-->
  <BigNav class="bignav"></BigNav>

</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {watch, onMounted, provide, ref} from "vue";
import $ from "jquery"
import classCard from "./classCard";
// import BigNav from "../../components/BigNav";

export default {
  name: "ClassifyView",
  components: {
    // BigNav
    classCard
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()

    //初始化
    onMounted(() => {
      $(`.tree-select-left-menuitem:eq(${0})`).css("background","#fff")
      // $(`.tree-select-left-menuitem:eq(${index-1})`).css("border-radius","0 0 15px 0")
      $(`.tree-select-left-menuitem:eq(${1})`).css("border-radius","0 15px 0 0")
      $(`.tree-select-left-menuitem:eq(${0})`).css("font-weight","bold")
      $(`.tree-select-left-menuitem:eq(${0})`).addClass("menuActive")
    })

    //搜索关键字
    let searchKey = ref("")

    //菜单索引
    const activeIndex = ref(0);

    //菜单点击
    const menuClick = (item, index) => {
      console.log("index",index)
      activeIndex.value = index;
      console.log("activeIndex",activeIndex.value)
      console.log("menuItems",menuItems.value[activeIndex.value])

      //清除样式
      $(`.tree-select-left-menuitem`).css("background","#f6f6f6")
      $(`.tree-select-left-menuitem`).css("border-radius","0")
      $(`.tree-select-left-menuitem`).css("font-weight","normal")
      $(`.tree-select-right`).css("border-radius","0")
      $(`.tree-select-left-menuitem`).removeClass("menuActive")

      //添加新样式
      $(`.tree-select-left-menuitem:eq(${index})`).css("background","#fff")
      $(`.tree-select-left-menuitem:eq(${index})`).css("font-weight","bold")
      $(`.tree-select-left-menuitem:eq(${index-1})`).css("border-radius","0 0 15px 0")
      $(`.tree-select-left-menuitem:eq(${index+1})`).css("border-radius","0 15px 0 0")
      $(`.tree-select-left-menuitem:eq(${index})`).addClass("menuActive")

      //第一栏 右侧内容区无圆角
      if(index!=0) {
        $(`.tree-select-right`).css("border-radius"," 30px 0 0 0")
      }

    }


    // 菜单列表
    const menuItems = ref([
      {
        //大分类
        text: '推荐分类',
        //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },


      {
        text: '手机数码',
        //小分类
        title: [
          {
            content: "手机",
            class: [
              "5G手机","游戏手机","折叠屏","拍照手机","续航手机","以旧换新"
            ]
          },
          {
            content: "运营商",
            class: [
              "选号中心","流量包","办宽带","中国移动","中国联通","中国电信","京东通信","充值中心","购机补贴"
            ]
          },
          {
            content: "手机配件",
            class: [
              "充电宝","数据线","手机壳","钢化膜","蓝牙耳机","无线充电"
            ]
          },
          {
            content: "摄影摄像",
            class: [
              "单反相机","微单相机","拍立得","摄像机","运动相机","镜头","户外器材","影棚器材","冲印服务"
            ]
          },
          {
            content: "数码配件",
            class: [
              "存储卡","读卡器","滤镜","闪光灯","相机包","三脚架","相机清洁","机身附件","充电器"
            ]
          },

        ]
      },


      {
        text: '家用电器',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '电脑办公',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '玩具乐器',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '家具家装',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '男女服饰',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '美妆护肤',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '医药保健',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '酒水饮料',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '礼品鲜花',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '旅游出行',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '奢侈名牌',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '房产金融',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '工业工具',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '钟表珠宝',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '箱包手袋',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '生活旅行',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '农资绿植',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '艺术邮币',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
      {
        text: '计生情趣',
          //小分类
        title: [
          {
            content: "热门分类",
            class: [
                "笔记本","空调","手机","服饰","休闲零食","生鲜","图书","面膜","投资金","瑞表","牛奶","纸品湿巾"
            ]
          },
          {
            content: "常用分类",
            class: [
              "休闲零食","面膜","户外工具","麦克风","图书","生鲜"
            ]
          },
          {
            content: "专场推荐",
            class: [
              "家用电器","京东京造","电脑数码"
            ]
          },

        ]
      },
    ])

    provide("menuInfo",menuItems.value[activeIndex.value])

    watch(() => activeIndex.value, (val) => {
      //查看父组件传过来的值是否变化，从而修改值
      activeIndex.value = val

    });

    return {
      searchKey,
      activeIndex,
      menuItems,
      menuClick
    }

  }
}
</script>

<style scoped lang="scss">

//左侧菜单宽度
$menuWidth: 31%;

.ClassifyView {
  position: relative;

}


.tree-select {
  display: flex;
  background-color: #f6f6f6;
  height: calc(100vh - 200rpx);
  position: relative;
  //overflow: hidden;




  //左侧菜单
  &-left {
    //width: 22%;

    width: $menuWidth;
    overflow: scroll;;
    background-color: #fff;
    position: sticky;
    margin: 0 0 25rpx 0  ;

    //隐藏滚动条
    &::-webkit-scrollbar{
      display: none;
    }

    //每个小菜单
    &-menuitem {
      width: 100%;
      background-color: #f6f6f6;
      padding: 25rpx 0 ;
      //margin: 0  0 50rpx 0 ;
      text-align: center;
      font-size: 30rpx;
      position: relative;;
      height: fit-content;


      //被选中菜单的上方菜单圆角

      //被选中菜单的下方菜单圆角
      .menuActiveBottom {
        border-radius: 0  30rpx 0 0 ;
      }


    }

  }


  //右侧菜单
  &-right {
    width: calc(100% - $menuWidth);
    background-color: #fff;
    overflow: scroll;
    position: sticky;

    //隐藏滚动条
    &::-webkit-scrollbar{
      display: none;
    }

    //右侧内容区
    &-content {
      //background-color: red;
      width: 100%;

      //background-color: red;
      //height: 2000rpx;
      //border-radius:   30rpx  0 0 0    ;

    }

  }
}

.menuActive::after {


    content: "";
    position: absolute;
    width: 10rpx;
    height: 35rpx;
    background-color: #ee0a24;
    top: 50%;
    left: 0;
    transform: translate(0,-50% );


}




//分割线
.dividing {
  border-top: 0.05 rpx solid #d5d5d5;
  width: 100%;
  height: 0;
}

::v-deep .van-search {
  height: 90rpx;
  background-color: #f6f6f6;
}

::v-deep .van-search__content {
  background-color: #fff;
}
</style>