import { createApp } from 'vue'
import App from './App.vue'
//import Vue from 'vue'
import axios from 'axios'
//import router from './router2'
//import router from './router3'
import router from './router'

/**ant design  v3 */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/**axios 拦截器 */
import './util/httpinterceptor'
/**换一种写法 
实例的组件挂载到 对象上 创建虚拟dom挂载真实dom
createApp(App).mount('#app')
*/
const app = createApp(App);
//app.use(Antd).use(router).mount('#app');
//v3 全局挂载
app.config.globalProperties.$api = '/api';
app.config.globalProperties.$axios = axios;

app.use(router).use(Antd).use(ElementPlus);
app.mount('#app');


//app.prototype.axios = axios;
/*
Vue.prototype.axios = axios;//原型挂载
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

上面的写法是Vue3的写法，他的底层源码是一个构造函数，直接使用返回一个app对象，不需要去通过new来实现。而下面的语法是Vue2，源码定义了一个function Vue函数，需要通过new的形式把参数传给他，可以多次new创建多个实例。 Vue2里面通过this来访问属性和方法，Vue3没有this，就是因为它没有通过new来创建实例
*/


