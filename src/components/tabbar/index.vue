<template>
    <div>
        <!-- <h3>这是 index 的内容</h3> -->
        <!-- 这是轮播图区域 -->
        <!-- auto 自动播放的时间间隔（毫秒） -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipeList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格到六宫格 -->
        <!-- <div class="mui-content"> -->
		    <ul class="mui-table-view mui-grid-view mui-grid-9">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu1.png" alt="">
		            <div class="mui-media-body">附近</div></a>
                </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">		            
		            <div class="mui-media-body">外卖</div></a>
                </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">		            
		            <div class="mui-media-body">商品购买</div></a>
                </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
		            <div class="mui-media-body">快捷支付</div></a>
                </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">		            
		            <div class="mui-media-body">视频专区</div></a>
                </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">		            
		            <div class="mui-media-body">联系我们</div></a>
                </li>
		        </ul> 
		</div>
    <!-- </div> -->
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            swipeList: []
        }
    },
    created(){
        this.getList();
    },
    methods: {
        // 接口： http://www.liulongbin.top:3005
        getList(){
            this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then( res => {
                // console.log(res.body);
                // 把获取到的动态数据 赋值给 swipeList 方便再页面中循环遍历
                this.swipeList = res.body.message;
                Toast({
                  message: '轮播图数据获取成功',
                  position: 'middle',
                  duration: 2000
                });
            }).catch(err => {
                Toast({
                  message: '轮播图数据获取失败',
                  position: 'middle',
                  duration: 2000
                });
            })
        }
    }
}
</script>
<style lang="less" scoped>
    // 轮播图------------------------------
    .mint-swipe {
        height: 200px;
        .mint-swipe-item:nth-child(1) {
            background-color: aqua;
        }
        .mint-swipe-item:nth-child(2) {
            background-color: orangered;
        }
        .mint-swipe-item:nth-child(3) {
            background-color: salmon;
        }
        .mint-swipe-item:nth-child(4) {
            background-color: hotpink;
        }
        img {
            width: 100%;
            height: 100%;
        } 
    }
    // 九宫格------------------------------
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        img {
            width: 60px;
            height: 60px;
        }
        .mui-media-body {
            font-size: 13px;
        }
    }
</style>
