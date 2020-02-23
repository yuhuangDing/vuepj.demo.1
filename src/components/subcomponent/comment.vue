<template>
    <div>
        <h3 class="h3text">发表评论</h3>
        <hr/>
        <textarea placeholder="请输入评论内容（最多120字）" maxlength="120" class="textare1"></textarea>
        <mt-button type="primary" size="large" >发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp; 用户:匿名用户&nbsp;&nbsp;发布时间：2020-2-22 23:50
                </div>
                <div class="cmt-body">
                    demo
                </div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp; 用户:匿名用户&nbsp;&nbsp;发布时间：2020-2-22 23:50
                </div>
                <div class="cmt-body">
                    demo
                </div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp; 用户:匿名用户&nbsp;&nbsp;发布时间：2020-2-22 23:50
                </div>
                <div class="cmt-body">
                    demo
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        name: "comment"
    }
</script>

<style scoped>
    .h3text{
        font-size: 18px;
    }
    .textare1{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-body{
        line-height: 35px;
        text-indent: 2em;
    }
    .cmt-list{
        margin: 5px 0px;
    }
    .cmt-title{
        background-color: #b9b4c0;
        font-size: 13px;
        border-radius: 3px;
        text-indent: 0.5em;

    }
    .cmt-item{

    }

</style>