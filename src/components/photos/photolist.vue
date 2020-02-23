<template>
    <div>
        <!--  顶部滑动条-->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>  <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                    社会
                </a>  <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                    社会
                </a>  <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                    社会
                </a>  <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                    社会
                </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    //导入mui模块js，并初始化顶部滑动条
    import mui from '../../../lib/mui/js/mui.js'

    export default {
        name: "photolist",
        data(){return{}},
        mounted() {//在DOM结构渲染好放到页面的时候执行这个生命周期函数
            //要操作元素最好在mounted里面操作，这时候的DOM是最新
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    }
</script>

<style scoped>
    *{touch-action: pan-y}
</style>