import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/


export default defineConfig({

  base: '',
  // uniapp项目组件
  plugins: [
    uni(),
  ],

  //配置别名
  resolve: {
    alias: {
      '@': '/src'
    }
  },

  //服务配置
  server: {
    port: 8080,
    host: "0.0.0.0",
    open: true,
  },


  //vite配置全局的scss文件
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
        引入var.scss全局预定义变量，
        如果引入多个文件，
        可以使用
        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
        这种格式
         */
        additionalData: '@import "./src/uni.scss";'
      }
    }
  }
})
