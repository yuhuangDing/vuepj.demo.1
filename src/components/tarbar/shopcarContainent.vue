<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <!-- 商品列表-->
            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch @change="selectChanged(item.id,$store.getters.getgoodsSelected[item.id])" v-model="$store.getters.getgoodsSelected[item.id]"></mt-switch>
                        <img class="goodslistimg" :src="item.thumb_path">
                        <div class="goodslist-info">
                            <h1 class="goodslist-h1">{{item.title}}</h1>
                            <p>
                                <span class="price-goods">￥{{item.sell_price}}</span>
                                <spnumberbox :initcount="$store.getters.getGoodscount[item.id]" :goodsid="item.id"></spnumberbox>
                            <!--    如何获得购物车中商品的数量
                                1.创建一个空对象，循环购物车中的商品数据，把当前循环的商品ID作为对象属性名，count作为对象的属性值，
                                当把所有商品循环后就得到一个对象:{88:2,89:1}---->
                                <a @click.prevent="remove(item.id,i)">删除</a><!--i用来删除v-for渲染的-->
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!--  结算部分-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <P>已勾选商品 <span class="redtext">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件，总价 ￥<span class="redtext">{{$store.getters.getGoodsCountAndAmount.amount}}</span></P>

                    </div>
                    <mt-button type="danger" >去结算</mt-button>
                </div>

            </div>
        </div>
        <p>{{$store.getters.getgoodsSelected}}</p>
    </div>
</template>

<script>
    import spnumberbox from "../subcomponent/shopcar_numberbox.vue";
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
                var idArr=[];
                this.$store.state.car.forEach(item=>idArr.push(item.id));
                if(idArr.length<=0){//购物车中没有数据直接返回不调用接口
                    return;
                }
                //获取购物车商品列表
                this.$http.get('api/goods/getshopcarlist/'+idArr.join(",")).then(result=>{
                    if(result.body.status===0){
                        this.goodslist=result.body.message
                    }
                })
            },
            remove(id,index){
                //商品从store中删除，同时把当前组件中的goodslist对应的商品用index来删除
                this.goodslist.splice(index,1);

                this.$store.commit('removefromcar',id);
            },
            selectChanged(id,val){
                //每当点击开关把最新的开关状态同步到store中
                console.log(id+'+++++++'+val)
                this.$store.commit('updateGoodsselected',{id:id,selected:val});

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
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .redtext{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
</style>