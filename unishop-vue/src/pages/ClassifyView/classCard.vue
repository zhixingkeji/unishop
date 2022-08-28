<template>
  <view class="classCard">
<!--    顶部图片-->
    <view class="classCard-top">
      <image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    </view>


<!--    循环部分-->
    <view class="classCard-content" v-for="item in menuItems[activeIndex].title">
      <!--    小标题-->
      <view  class="classCard-content-title">{{item.content}}</view>

<!--      卡片组-->
      <view  class="cardlist">
        <view class="card" v-for="itm in item.class">
          <view class="card-picture"><image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" /></view>
          <view class="card-content">{{itm}}</view>
        </view>
      </view>

    </view>


  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {watch,inject, ref} from "vue";
// import {} from "vue/dist/vue";

export default {
  name: "classCard",
  components: {},
  props: {
    menuItems : {
      type: Object
    },
    activeIndex: {
      type: Number,
      default: 0,
      required: true
    }
  },
  setup(props,context) {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()


    let menuItems = props.menuItems

    let activeIndex = ref(props.activeIndex)

    watch(() => props.activeIndex, (val) => {
      //查看父组件传过来的值是否变化，从而修改值
      activeIndex.value = val
    });
    // watch(() => activeIndex.value, (val) => {
    //   //查看子组件值是否变化，在赋值给父组件
    //   context.emit('update:activeIndex', val)
    // });
    return {
      menuItems,
      activeIndex
    }

  }
}
</script>

<style scoped lang="scss">
.classCard {
  padding: 40rpx 40rpx;

  //顶部图片
  &-top {

    image {
      width: 100%;
      height: 200rpx;
      border-radius: 20rpx;
    }

  }

  //下方内容
  &-content {
    margin-top: 30rpx;

    //小标题
    &-title {
      font-size: 36rpx;
      margin: 20rpx 0;
      font-weight: bold;
      //color: red;
    }


    //卡片组
    .cardlist {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .card {
        //background-color: red;
        width: 30%;
        //height: 200rpx;
        padding: 0 0 35rpx 0 ;

        &-picture {
          image {
            width: 100%;
            height: 130rpx;

          }
        }

        &-content {
          margin: 10rpx 0 0 0 ;
          text-align: center;
          font-size: 30rpx;
        }
      }
    }
  }

}

</style>