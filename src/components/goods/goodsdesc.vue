<template>
    <div class="desc-box">
        <h3 class="h3-desc">{{goodsdesc.title}}</h3>
        <hr/>
        <div class="content" v-html="goodsdesc.content"></div>
    </div>
</template>

<script>
    export default {
        name: "goodsdesc",
        data(){
            return{
                id:this.$route.params.id,
                goodsdesc:[]
            }
        },
        methods:{
            getgoodsdesc(){
                this.$http.get("api/goods/getdesc/"+this.id).then(result=>{
                    if(result.body.status===0){
                        this.goodsdesc=result.body.message[0];

                    }
                })
            }
        },
        created() {
            this.getgoodsdesc()
        }

    }
</script>

<style >
    .desc-box img{
        width: 100%;
    }
    .content{
        width: 100%;
        padding: 4px;
    }
    .h3-desc{
        font-size:16px ;
        text-align: center;
        margin: 15px 0;
        color:#226aff ;
    }
</style>