<template>
    <div>
        <!--  顶部滑动条-->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id==0?'mui-active':'']"  v-for="item in cates" :key="item.id" @click="getphotos(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!--图片列表区域--->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" class="photo-list-li" :to="'/home/photoinfo'+item.id" tag="li">
                <img v-lazy="item.img_url" class="photo-list-li-img myimg">
                <div class="info">
                    <div class="info-title"><h1 class="info-text">{{item.title}}</h1> </div>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>

    </div>
</template>

<script>
    //导入mui模块js，并初始化顶部滑动条
    import mui from '../../../lib/mui/js/mui.js'
    import {Toast} from 'mint-ui'
    export default {
        name: "photolist",
        data(){return{
            cates:[],//所有分类数组
            list:[],//图片数组
        }},
        mounted() {//在DOM结构渲染好放到页面的时候执行这个生命周期函数
            //要操作元素最好在mounted里面操作，这时候的DOM是最新
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getallCategory(){
                //获取图片分类
                this.$http.get('api/getimgcategory').then(result=>{
                    if(result.body.status===0){
                        //手动拼接出全部分类
                       result.body.message.unshift({title:"全部",id:0})
                        this.cates=result.body.message
                    }else{
                        Toast("获取失败")
                    }
                })
            },
            getphotos(cateid){
                //根据id获取图片
                this.$http.get("api/getimages/"+cateid).then(result=>{
                    if(result.body.status===0){
                        this.list=result.body.message
                    }else{
                        Toast("获取失败")
                    }
                })
            },

        },
        created() {
            this.getallCategory()
            this.getphotos(0)//主动请求所有图片
        }
    }
</script>

<style scoped>
    *{touch-action: pan-y}

    .photo-list{
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0px;
    }
    .photo-list-li{
        margin-bottom: 10px;
        background-color: #cccccc;
        text-align: center;
        box-shadow: 0 0 6px #8f8f94;
        border-radius: 15px;
        position: relative;
    }
    .photo-list-li-img [lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    /*懒加载转圈圈的样式*/
    }
    .myimg{
        width: 100%;
        vertical-align: middle;
        border-radius: 15px;
    }
    .info{
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        border-radius: 15px;
        max-height: 84px;

    }
    .info-text{
        text-indent: 0.2em;
        font-size: 14px;

    }
    .info-body{
        text-indent: 0.3em;
        font-size: 12px;

    }
</style>