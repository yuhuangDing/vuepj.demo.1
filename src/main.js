//入口文件
console.log('ok')
//引入vue
import Vue from 'vue'
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入Mui
import '../lib/mui/css/mui.css'



//导入app根组件
import app from './app.vue'

//使用组件区域
Vue.use(MintUI)

var vm=new Vue({
    el:'#app',
    render:c=>c(app)
})