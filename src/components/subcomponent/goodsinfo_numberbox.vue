<template>

    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <!-- 我们不知道什么时候可以拿到max值，以为父组件是异步操作，有延迟，所以一开是max就是一个空对象，
        但是总归有一刻会得到max值， -->
<!--        可以使用watch属性监听，来监听父组件传来的max值，不管watch会给触发几次，最后一次肯定是一个合法的值-->

        <input ref="numbox" id="test" class="mui-input-numbox" type="number" value="1" @change="countChange"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    //导入mui模块js，并初始化数字输入mui('.mui-numbox').numbox();
    //子组件什么时候传数据给父组件
    import mui from '../../../lib/mui/js/mui.js'
    export default {
        name: "goodsinfo_numberbox",
        mounted() {
            mui('.mui-numbox').numbox();
        },
        methods:{
            countChange(){
                //文本框数据被修改时候，马上传回父组件
                //this.$refs.numbox.balue获取输入框数据
                this.$emit('getcount',parseInt(this.$refs.numbox.value))//传参给调用的函数，就可以获得当前数量

                //子组件向父组件传值
            }
        },
        props:["max"],
        watch:{
            //属性监听,使用jsapi设置numbox的最大值
            'max':function (newVal,oldVal) {
                mui(".mui-numbox").numbox().setOption('max',newVal)
            }
        }

    }
</script>

<style scoped>

</style>