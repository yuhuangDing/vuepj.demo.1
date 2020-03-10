<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <!-- 商品列表-->
            <div class="mui-card" v-for="item in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch ></mt-switch>
                        <img class="goodslistimg" :src="item.thumb_path">
                        <div class="goodslist-info">
                            <h1 class="goodslist-h1">{{item.title}}</h1>
                            <p>
                                <span class="price-goods">￥{{item.sell_price}}</span>
                                <spnumberbox></spnumberbox>
                                <a href="#">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!--  结算部分-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    比如一篇
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import spnumberbox from "../subcomponent/goodsinfo_numberbox.vue";
    export default {
        name: "shopcarContainent",
        data(){
            return {
                goodslist:[]//购物车中所有商品数据
            }
        },
        methods:{
            getgoodslist(){
                //1.获取store所有商品的id，拼出一个用逗号分隔的
                var idArr=[]
                this.$store.state.car.forEach(item=>idArr.push(item.id))
                if(idArr.length<=0){//购物车中没有数据直接返回不调用接口
                    return;
                }
                //获取购物车商品列表
                this.$http.get('api/goods/getshopcarlist/'+idArr.join(",")).then(result=>{
                    if(result.body.status===0){
                        this.goodslist=result.body.message
                    }
                })
            }
        },
        components:{
            spnumberbox
        },
        created() {
            this.getgoodslist()
        }
    }
</script>

<style scoped>
   .shopcar-container{
       background-color: white;
       overflow: hidden;
   }
    .goods-list{

    }
    .goodslistimg{
        width: 60px;
        height: 60px;
        margin-left: 5px;
        margin-right: 5px;
    }
    .goodslist-h1{
        font-size: 13px;
        margin-bottom: 10px;
    }
    .price-goods{
        color: red;
        font-weight: bold;

    }
    .mui-card-content-inner{
        display: flex;
        align-items: center;
    }
    .goodslist-info{
        display: flex;
        flex-direction: column;/*改布局方向为垂直布局*/
        justify-content: space-between;
    }
</style>