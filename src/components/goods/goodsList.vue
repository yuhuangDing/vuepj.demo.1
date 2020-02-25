<template>
    <div class="goods-list">
<!--        页面跳转方式：-->
<!--        1.使用a标签跳转，router-link属于第一种-->
<!--        2.使用window.location.href叫做编程式导航-->
<!--        <router-link tag="div" :to="'/home/goodsinfo/'+item.id" class="goods-list-item" v-for="item in goodslist" :key="item.id">-->
            <div @click="godetail(item.id)" class="goods-list-item" v-for="item in goodslist" :key="item.id">
                <img :src="item.img_url" class="goodsimg">
                <h1 class="h1-title">{{item.title}}</h1>
                <div class="goods-info">
                    <p class="price">
                        <span class="price-now">￥{{item.sell_price}}</span>
                        <span class="price-old">￥{{item.market_price}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩{{item.stock_quantity}}件</span>
                    </p>
                </div>
            </div>
        <mt-button plain type="danger" size="large" @click="loadmore">加载更多</mt-button>
    </div>

</template>

<script>
    import router from "../../router";

    export default {
        name: "goodsList",
        data(){return{
            pageindex:1,//分页的页数
            goodslist:[]//存放数组
        }},
        methods:{
            getGoodList(){
                //获取商品列表
                this.$http.get("api/getgoods?pageindex="+this.pageindex).then(result=>{
                    if(result.body.status===0){
                        this.goodslist=this.goodslist.concat(result.body.message)
                    }
                })
            },
            loadmore(){
                this.pageindex++
                this.getGoodList()
            },
            godetail(id){
                //使用js进行路由导航,主要this.$router（路由导航对象，可以方便使用js代码跳转）和this.$route（路由参数对象，所有url地址参数）的区别
                //1.最简单的
                //this.$router.push("/home/goodsinfo/"+id)
                //2.传递对象
                //this.$router.push({path:"/home/goodsinfo/"+id})
                //传递命名的路由
                this.$router.push({name:"goodsinfo",params:{id}})
            }
        },
        created() {
            this.getGoodList()
        }
    }
</script>

<style scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        /*水平排列，如上*/

        /*两边留边，中间空白，左右对齐*/
        padding: 7px;
        justify-content: space-between;


    }
    .goods-list-item{
        width: 49%;
        /*每行排两个*/
        border: 1px solid #cccccc;
        box-shadow: 0 0 8px #6641e2;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;

    }
    .goodsimg{
        width: 100%;
    }
    .h1-title{
        font-size: 14px;
    }
    .goods-info{

    }
    .price{

    }

    .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .price-now{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .price-old{
        text-decoration: line-through;
        margin-left: 10px;
        font-size: 13px;
    }

</style>