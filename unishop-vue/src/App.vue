<script>
export default {

  onLaunch: function () {
    console.log('App启动')

  },



  onShow: function () {
    console.log('App渲染')
  },



  onHide: function () {
    console.log('App隐藏')
  },
}
</script>

<style lang="scss">
/*每个页面公共css */


.app{
  width: 100%;
  height: 100%;


}

//隐藏滚动条
body::-webkit-scrollbar{
  //方法1
  display: none;

  //方法2
  //width: 0;
  //height: 0;
  //color: transparent;
}

</style>
