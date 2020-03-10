//导入vuex，使用，创建仓储,之后挂载到Vue实例中
import Vuex from 'vuex'
Vue.use(Vuex)
var store=new Vuex.Store({
    state:{
        count:0
    },//和组件中的data一样，专门用来存数据
    mutations:{
        //要操作store中的值使用mutations里面定义的方法去统一操作store数据，避免各自组件单独操作数据造成混乱，不能快速定位错误原因
    increament(state){
        state.count++//函数第一个参数必须是state，下面使用state.***来操作,定义才参数的increament(state,参数)，参数只能一个，可以传数字，对象，数组
        //注意，如果组件想要调用mutations方法，只能使用this.$store.commit("方法名",参数)
        }
    },//和组件中的methods方法一样
    getters:{
        //注意：这里的getters只能对外提供数据，不负责修改数据，想要修改state中的数据要去mutations中定义方法
        //不能修改数据，最多只能包装一下数据，只要state中的数据发生变化，getters也正好引用了这个数据，就会立即触发getters重新求值
        optCount:function (state) {
            //加了一个属性，然后定义方法，调用的时候就可以$store.getters.optCount就可以获得return的值
            //调用的时候使用this.$store.getters.***来使用
            return '获取数据为：'+state.count
        }
    }
    /*总结
    * 1. state中的数据,不能直接修改,如果想要修改,必须通过 mutations
    * 2.如果组件想要直接从 state上获取数据:需要this.$store.state***
    * 3.如果组件,想要修改数据,必须使用 mutations提供的方法,需要通过this.$store.commit("方法的名称",唯一的一个参数)
    * 4.如果store中state上的数据,在外提供的时候,需要做一屋包装,那么,推存使用getters,
        如果需要使用 getters,则用this.$store.getters.**

     */
})