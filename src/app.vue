<template>
    <div class="app-container">
        <!--顶部-->
        <mt-header fixed title="Vue项目 *Bulid-1.0">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <!--中间 路由router-view-->
        <!--底部  tarbar区域-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <a class="mui-tab-item" href="#cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" href="#search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
        </nav>
        <h1>23123</h1>
    </div>
</template>

<script>

</script>

<style scoped>
    .app-container{
        padding-top: 41px;

    }
</style>