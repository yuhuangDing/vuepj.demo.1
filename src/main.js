//入口文件
console.log('ok')
//引入vue
import Vue from 'vue'
//引入Vue-router
import VueRouter from "vue-router";
Vue.use(VueRouter)
import router from './router.js'

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//使用
Vue.use(MintUI)

import VueResource from 'vue-resource'
Vue.use(VueResource)

//引入Mui
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icon.css'


//导入app根组件
import app from './app.vue'



var vm=new Vue({
    el:'#app',
    router,//挂载路由
    render:c=>c(app)
})