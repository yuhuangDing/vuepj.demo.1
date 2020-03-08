<template>
    <div>
        <mt-swipe :auto="4000" >
            <!--使用v-for循环的话要使用key-->
            <!-- lunbotuList,谁使用谁传递，父组件向子组件传值-->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" width="100%" height="100%">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "swiper",
        props:["lunbotuList","isFull"]
    }
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
</style>