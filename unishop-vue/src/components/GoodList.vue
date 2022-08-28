<template>
<!--  商品缩略图列表-->
  <view class="GoodList">
    <Good></Good>
    <Good></Good>
    <Good></Good>
    <Good></Good>
  </view>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";
import Good from "./Good";

export default {
  name: "GoodList",
  components: {
    Good
  },
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
.GoodList {
  margin: 0 $main-margin;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>