<template>
    <div class="photoinfo-container">
        <h3 class="photo-info-h3">{{photoinfo.title}}</h3>
        <P class="subtitle">
            <span>发表时间：{{photoinfo.add_time|dataFormat}}</span>
            <span>点击：{{photoinfo.click}}次</span>
        </P>
        <hr/>
        <!---缩略图区---->
        <div class="subimage">
            <vue-preview :slides="slide1" @close="handleClose" ></vue-preview>
        </div>

        <!----图片内容区-->
        <div class="photoinfo-content" v-html="photoinfo.content"></div>
        <!--评论子组件-->
        <comment :id="id"></comment>
    </div>
</template>

<script>
    import Comment from "../subcomponent/comment.vue";

    export default {
        name: "photoinfo",
        components: {Comment},//注册子组件
        data(){
            return {
                id:this.$route.params.id,//从路由中获取到图片id
                photoinfo:[],
                slide1:[]//缩略图
            }
        },
        methods:{
            getPhotoinfo(){
                //获取图片详情
                this.$http.get("api/getimageInfo/"+this.id).then(result=>{
                    if(result.body.status===0){
                        this.photoinfo=result.body.message[0]
                    }
                })
            },
            getThumbs(){
                //获取缩略图
                this.$http.get("api/getthumimages/"+this.id).then(result=>{
                    if(result.body.status===0){
                        console.log(result.body.message)
                        //给每一个图片对象加入w和h
                        result.body.message.forEach(item=>{
                          // item.msrc=item.src
                            item.w=600
                            item.h=600
                        })
                        //保存到slide1中
                        this.slide1=result.body.message
                    }
                })
            },
            handleClose () {
                console.log('close event')
            }
        },
        created() {
            this.getPhotoinfo()
            this.getThumbs()
        }
    }
</script>

<style scoped>
    .photoinfo-container{
        padding: 3px;

    }
    .photo-info-h3{
        color:#26A2FF;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .photoinfo-content{
        font-size: 13px;
        line-height: 30px;
    }
    .subimage{
        margin: 10px;
        box-shadow: 0 0 8px #999999;
    }


</style>