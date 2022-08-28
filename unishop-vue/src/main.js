import {
	createSSRApp
} from "vue";
import App from "./App.vue";

//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

//引入字体图标
import '@/static/font/iconfont.css'
import '@/static/font/iconfont.js'

//引入样式重置和通用样式
import "@/static/css/reset.css"
import "@/static/css/common.css"


//引用jquery
import  'jquery'

//引入vuex
import store from './store'


import BigNav from "@/components/BigNav";
import title_s from "@/components/title_s";


export function createApp() {
	//创建app
	const app = createSSRApp(App);

	// 使用vant组件库
	app.use(Vant);

	app.use(store);



	//全局注册组件
	app.component('BigNav', BigNav)   //底部导航栏
	app.component('title_s', title_s)   //小标题


	//全局注册函数 改变皮肤
	// const resetSetItem  = (key, newVal) => {
	// 	if (key === 'themeColor') {
	//
	// 		// 创建一个StorageEvent事件
	// 		var newStorageEvent = document.createEvent('StorageEvent');
	// 		const storage = {
	// 			setItem: function (k, val) {
	// 				sessionStorage.setItem(k, val);
	//
	// 				// 初始化创建的事件
	// 				newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);
	//
	// 				// 派发对象
	// 				window.dispatchEvent(newStorageEvent)
	// 			}
	// 		}
	// 		return storage.setItem(key, newVal);
	// 	}
	// };




	//挂载全局函数
	// app.config.globalProperties.$resetSetItem  = resetSetItem ;


	return {
		app,
	};
}
