// 导入 vue-router 路由
import VueRouter from 'vue-router';

// 导入对应的路由组件
import indexContainer from './components/tabbar/index.vue'
import userContainer from './components/tabbar/user.vue'
import shopcartContainer from './components/tabbar/shopcart.vue'
import searchContainer from './components/tabbar/search.vue'

// 创建路由对象
let router = new VueRouter({
    routes: [//设置匹配路由规则
        // 监听根路径
        { path: "/", redirect: "/index" },
        { path: "/index", component: indexContainer },
        { path: "/user", component: userContainer },
        { path: "/shopcart", component: shopcartContainer },
        { path: "/search", component: searchContainer },
    ],
    linkActiveClass: "mui-active"//替换显示点击高亮的类
})

// 导出路由规则
export default router;