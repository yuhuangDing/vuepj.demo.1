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
//设置全局根路径
Vue.http.options.root='http://www.liulongbin.top:3005'

//引入Mui
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icon.css'
//引入动画库
import '../lib/animate.css'

//导入app根组件
import app from './app.vue'

//导入时间插件
import moment from 'moment'

//定于全局过滤器
Vue.filter('dataFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)

})


var vm=new Vue({
    el:'#app',
    router,//挂载路由
    render:c=>c(app)
})