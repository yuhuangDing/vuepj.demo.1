<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000" >
            <!--使用v-for循环的话要使用key-->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" width="100%" height="100%">
            </mt-swipe-item>
        </mt-swipe>
        <!--  6宫格视图-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/home/newslist">
                <img src="../../images/menu1.png" width="60px" height="60px">
                <div class="mui-media-body">新闻动态</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="/home/photolist">
                    <img src="../../images/menu2.png" width="60px" height="60px">
                <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/home/goodslist">
                    <img src="../../images/menu3.png" width="60px" height="60px">
                <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../images/menu4.png" width="60px" height="60px">
                <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../images/menu5.png" width="60px" height="60px">
                <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../images/menu6.png" width="60px" height="60px">
                <div class="mui-media-body">联系我们</div>
                </a>
            </li>

        </ul>
    </div>

</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data(){return{
            lunbotuList:[],//保存轮播图
        }},
        methods:{
            getLunbotu(){
                /*
                p38 新的接口地址 从下面被淹没的评论中找到的 希望能帮到大家哦嘿嘿
                http://www.liulongbin.top:3005/api/getlunbo
                http://www.liulongbin.top:3005/api/post
                http://www.liulongbin.top:3005/api/jsonp
                * */
                this.$http.get('api/getlunbo').then(result=>{
                   console.log(result.body)
                    if(result.body.status===0){
                        console.log(result.body)
                        this.lunbotuList=result.body.message
                        Toast('获取成功');
                    }else {
                        Toast({
                            message: '请求失败',
                        })//无法加载轮播图
                    }
                })
            }
        },
        created() {
            this.getLunbotu()
        }
    }
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
    .mui-grid-view, .mui-grid-9{
        background-color: white;
        border: 0;
    }
    .mui-table-view-cell ,.mui-grid-9, .mui-grid-view{
        border: 0;
    }

    .mui-media-body{
        font-size: 13px;
    }
</style>
<!--
加载轮播图数据，获取数据，使用vue-resource
1.使用this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then()获取图片
2.数据保存到data中
3.使用v-for循环渲染轮播图

-->