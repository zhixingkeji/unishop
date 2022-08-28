<template>
<!--  首页的顶部导航栏-->
  <div class="navbar_home">
    <van-tabs v-model:active="component_index" @click-tab="changeValue" class="navbar_home-tabs">
<!--    <van-tabs v-model:active="active">-->
      <van-tab >
        <template #title>推 荐</template>

      </van-tab>

      <van-tab >
        <template #title>运动户外</template>

      </van-tab>

      <van-tab>
        <template #title>服饰内衣</template>

      </van-tab>

      <van-tab>
        <template #title>鞋靴箱包</template>

      </van-tab>

      <van-tab>
        <template #title>家居数码</template>

      </van-tab>

      <van-tab>
        <template #title>美妆个护</template>

      </van-tab>

      <van-tab>
        <template #title>计生情趣</template>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref, watch} from "vue";

export default {
  name: "navbar_home",
  components: {},
  props: {
    component_index: {
      type: Number,
    }
  },
  setup(props, context) {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()


    let component_index = ref(props.component_index)
    watch(() => props.component_index, (val) => {
      //查看父组件传过来的值是否变化，从而修改值
      component_index.value = val

    });

    watch(() => component_index.value, (val) => {
      //查看子组件值是否变化，在赋值给父组件
      context.emit('update:component_index', val)
    });


    const changeValue = () => {
      // component_index.value = active.value

    }

    let tableDate = ref()



    return {
      changeValue,
      component_index,

    }

  }
}
</script>

<style scoped lang="scss">
.navbar_home {
  width: 100%;
  height: 90rpx;
  position: fixed;
  top:  90rpx;
  left: 0;
  z-index: 999;
}

</style>