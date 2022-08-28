<template>
  <div class="title_s">
<!--    小标题   - 热销爆款 - -->

    <view class="title1">
      <view class="title1-symbol">-</view>
      <view class="title1-content">
        <slot></slot>
      </view>
      <view class="title1-symbol">-</view>
    </view>

  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "title_s",
  components: {},
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let tableDate = ref()


    return {}

  }
}
</script>

<style scoped lang="scss">
.title_s {

}



.title1 {
  display: flex;
  justify-content: center;
  padding-top: 15rpx;
  padding-bottom: 5rpx;

  &-content {
    margin: 0 20rpx;
    font-size: 35rpx;
    line-height: 75rpx;
    font-weight: bold;
  }

  &-symbol {
    font-size: 60rpx;
    font-weight: bold;
  }
}

</style>