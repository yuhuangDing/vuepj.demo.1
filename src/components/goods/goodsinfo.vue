<template>
    <div class="goodsinfos">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

<!--        轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotu-list="lunbotu" ></swiper>
                </div>
            </div>
        </div>
        <!--轮播图变形，原来设定轮播图的w和h都是100%，这里的轮播图就回变形，需要h！100%，w自适应，分析得到最好让调用者指定宽度--->
<!--        商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <P class="price">
                        市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：
                        <span class="price-now">￥{{goodsinfo.sell_price}}</span>
                    </P>

                       <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
                    <!---传一个叫做getcount的函数给子组件，子组件用this.$emit调用这个函数，参数在这个函数名后-->
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addgoods">加入购物车</mt-button>
                        <!---
                        分析：如何实现加入购物车的时候，拿到 选择的数量
                        1.按钮属于goodsinfo页面，数字是numberbox
                        2.涉及到了父子组件的嵌套，无法直接在goodsinfo中获取到选中的值

                        涉及到了子组件向父组件传值，本质父组件向子组件传递方法，子组件调用方法把数据当作参数传回这个方法
                        -->
                    </p>

                </div>
            </div>

        </div>
<!--        商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsinfo.goods_no}}</p>
                    <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
                    <p>上架时间：{{goodsinfo.add_time|dataFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain class="mbtn-goods" @click="godesc(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain class="mbtn-goods" @click="gocomment(id)">商品评论</mt-button>
            </div>
        </div>



    </div>
</template>

<script>
    import swiper from "../subcomponent/swiper.vue";
    import numbox from "../subcomponent/goodsinfo_numberbox.vue"
    export default {
        name: "goodsinfo",
        components: {swiper,numbox},
        data(){return{
            id:this.$route.params.id,//路由参数的id，便于后期调用
            lunbotu:[],
            goodsinfo:[],//商品信息
            ballFlag:false,//控制小球隐藏
            selectedCount:1,//商品数目，保存用户选中数量，默认为1
        }},
        comments:{
        swiper
            },
        methods:{
            getlunbotu(){
                this.$http.get("api/getthumimages/"+this.id).then(result=>{
                    if(result.body.status===0){
                        //先循环轮播图数组为item添加img，轮播图组件只认识img属性
                        result.body.message.forEach(item=>{
                            item.img=item.src
                        })
                        this.lunbotu=result.body.message;


                    }
                })
            },
            getgoodsinfo(){
                //获取商品信息
                this.$http.get("api/goods/getinfo/"+this.id).then(result=>{
                    if(result.body.status===0){
                        this.goodsinfo=result.body.message[0];


                    }
                })
            },
            godesc(id){
                //编程式导航跳转到图片
                this.$router.push({name:"goodsdesc",params:{id}})
            },
            gocomment(id){
                this.$router.push({name:"goodscomment",params:{id}})
            },
            addgoods(){
                this.ballFlag=!this.ballFlag
            },
            beforeEnter(el){
                el.style.transform="translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth;
                //小球动画优化思路：随着页面宽度变化，小球最终的位移位置局限在了某一个分辨率下
                //所有不能把最终的位置写固定，要根据不同情况能够动态计算坐标值
                //根据先得到徽标的横纵坐标，和小球的横纵坐标，让y和x值求差
              //  获取小球的位置domObejct.getBoundingRect(),
                //获取小球在页面中的位置，
                const ballPosition=this.$refs.ball.getBoundingClientRect();
                //获取购物车徽标位置
                const badgePosition=document.getElementById('badge').getBoundingClientRect();
                const xDistance=badgePosition.left-ballPosition.left;
                const yDistance=badgePosition.top-ballPosition.top;
                el.style.transform=`translate(${xDistance}px,${yDistance}px)`
                el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)"
                done()
                //贝塞尔曲线效果，cubic-bezier.com


            },
            afterEnter(el){
                this.ballFlag=!this.ballFlag
            },
            getSelectedCount(count){
                //子组件把选中的值传递给父组件
                this.selectedCount=count
                console.log("当前数量："+this.selectedCount)

            }
        },
        created() {
            this.getlunbotu()
            this.getgoodsinfo()
        }
    }
</script>

<style scoped>

    .goodsinfos{
        background-color: #eee;
        overflow: hidden;
    }
    .price-now{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
    }
    .mbtn-goods{
        margin-bottom: 15px;
        margin-top: 15px;
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index:30;
        top:390px;
        left: 145px;




    }
</style>