<template>

    <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input ref="numbox" id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChange" readonly/>
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
            console.log(this.initcount)
        },
        methods:{
            countChange(){
                //文本框数据被修改,立即把最新的数量同步到购物车的store中，覆盖之前的数量值
                console.log(this.$refs.numbox.value)
                this.$store.commit("updateGoodsInfo",{id:this.goodsid,count:this.$refs.numbox.value})
            }
        },
        props:["initcount","goodsid"]



    }
</script>

<style scoped>

</style>