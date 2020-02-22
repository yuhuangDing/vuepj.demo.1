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
//引入Mui
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icon.css'



//导入app根组件
import app from './app.vue'

//使用组件区域
Vue.use(MintUI)

var vm=new Vue({
    el:'#app',
    router,//挂载路由
    render:c=>c(app)
})