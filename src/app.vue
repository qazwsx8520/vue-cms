<template>
    <div class="main">
        <!-- 顶部 header 区域 -->
        <mt-header 
        fixed 
        title="vue项目固定在顶部" class="mainTop"></mt-header>
        <!-- <h3>测试的内容</h3> -->

        <!-- 中间的 路由 router-view 区域 -->
        <transition mode="out-in">
            <router-view></router-view>
        </transition>

        <!-- 底部 tebbar 区域 -->
        <!-- <div class="container"> -->
        <nav class="mui-bar mui-bar-tab">
		    	<router-link class="mui-tab-item" to="/index">
		    		<span class="mui-icon mui-icon-home"></span>
		    		<span class="mui-tab-label">首页</span>
		    	</router-link>
		    	<router-link class="mui-tab-item" to="/user">
		    		<span class="mui-icon mui-icon-contact"></span>
		    		<span class="mui-tab-label">会员</span>
		    	</router-link>
		    	<router-link class="mui-tab-item" to="/shopcart">
		    		<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                        <span class="mui-badge">0</span>
                    </span>
		    		<span class="mui-tab-label">购物车</span>
		    	</router-link>
		    	<router-link class="mui-tab-item" to="/search">
		    		<span class="mui-icon mui-icon-search"></span>
		    		<span class="mui-tab-label">搜索</span>
		    	</router-link>
		</nav>
        <!-- </div> -->
        

    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    created(){

    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
    .main {
        overflow: hidden;
        padding-top: 40px;
        .mainTop {
            background: linear-gradient(#08ffc8 , #39bdc8); font-size: 16px;
            color: #313131;
        }
        .mui-bar .mui-active {
            background: linear-gradient(#08ffc8 , #39bdc8);
        }
    }
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
        // position: absolute;
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active {
        opacity: 1;
        transition: all .5s ease-in;
    }
</style>