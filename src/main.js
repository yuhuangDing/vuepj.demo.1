//入口文件
console.log('ok');
//引入vue
import Vue from 'vue'
//引入Vue-router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from './router.js'

//引入mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
//使用
Vue.use(MintUI);

import VueResource from 'vue-resource';
Vue.use(VueResource);
//设置全局根路径
Vue.http.options.root='http://www.liulongbin.top:3005';
//定于全局表单数据提交格式
Vue.http.options.emulateJSON=true;

//引入Mui
import '../lib/mui/css/mui.css';
import '../lib/mui/css/icon.css';
//引入动画库
import '../lib/animate.css';

//导入app根组件
import app from './app.vue';

//导入时间插件，需要使用npm安装vue-moment
import moment from 'moment';

//缩略图插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

//导入vuex，使用，创建仓储,之后挂载到Vue实例中
import Vuex from 'vuex';
Vue.use(Vuex);
var car=JSON.parse(localStorage.getItem('car'||'[]'));//每次进入就会调用main.js所以调用的时候就读取本地存取的购物车数据
var store=new Vuex.Store({
    state:{//this.$store.state.***
        car:car//将购物车中的商品数据用数组存起来，存储一些商品信息的对象，可以暂时设计层这个样子{id:商品id,count:购买数量,price:单价,select:false(商品是否选中)}

    },//和组件中的data一样，专门用来存数据
    mutations:{//this.$store.commit（“方法名”，按需传入参数）
        addToCar(state,obj){
            //把商品信息保存到store
            var flag=false;//标记是否找到
            //分析，如果原来存在，则更新数量；如果没有则加入push到car中
            state.car.some(item=>{
                if(item.id===obj.id){
                    item.count+=parseInt(obj.count);
                    flag=true;//找到了
                    return true//终于循环，some找到就退出
                }
            });
            if(flag===false){
                state.car.push(obj);//没找到就加入
            }
            //更新car后，我们存到本地的localstorage中，防止刷新消失
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        updateGoodsInfo(state,goodsinfo){
            //修改购物车商品数量
            //分析：
            state.car.some(item=>{
                if(item.id===goodsinfo.id){
                    item.count=parseInt(goodsinfo.count);
                    return true;
                }
            });
            //更新商品数量后，我们把最新的购物车数据存到本地的localstorage中，防止刷新消失
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        removefromcar(state,id){
            //根据id从store中的购物车删除对应的商品数据
            state.car.some((item,i)=>{
                if(item.id===id){
                    state.car.splice(i,1);
                    console.log("ok");
                    return true;
                }
            });
            //删除car后，我们存到本地的localstorage中，防止刷新消失
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        updateGoodsselected(state,info){
            state.car.some(item=>{
                if(item.id===info.id){
                    item.selected=info.selected
                }
            });
            //更新购物车商品状态后，我们存到本地的localstorage中，防止刷新消失
            localStorage.setItem('car',JSON.stringify(state.car));
        }
    },//和组件中的methods方法一样
    getters:{//this.$store.getters.****
        //相当于计算属性

        getAllcount:function (state) {
            var num=0;
            if(state.car){
                state.car.forEach(item=>{
                    num+=item.count
                });
                return num
            }

        },
        getGoodscount:function (state) {
            var o={};
            state.car.forEach(item=>{
               o[item.id]=item.count;//id作为键，count作为值
            });
            return o
        },
        getgoodsSelected:function(state){
            var o={};
            state.car.forEach(item=>{
                o[item.id]=item.selected;//对象样例{88:ture }
            });
            return o;
        },
        getGoodsCountAndAmount(state){
            var o={
                count:0,//数量
                amount:0//总价
            };
            state.car.forEach(item=>{
                if(item.selected){
                    o.count+=item.count;
                    o.amount+=item.count*item.price;
                }
            });
            return o;
        }

    }

});

//定于全局过滤器
Vue.filter('dataFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);

});


var vm=new Vue({
    el:'#app',
    router,//挂载路由
    render:c=>c(app),
    store//挂载共享仓储--vuex提供，只要挂载了，任何组件就能全局访问
})