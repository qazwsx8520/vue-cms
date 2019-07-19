// console.log('aaa');
import Vue from 'vue';

// 导入路由的包
import VueRouter from 'vue-router';
// 安装路由模块
Vue.use(VueRouter);

// 导入 mintUi 模块
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);

// 按需导入
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);

// 引入 less
import Less from 'less';
Vue.use(Less);


// 引入 mui 的 css 样式文件和字体文件 模块
import './lib/mui/examples/hello-mui/css/mui.min.css';
import './lib/mui/examples/hello-mui/css/icons-extra.css';
// 字体图标
import './lib/mui/examples/hello-mui/fonts/mui.ttf';
import './lib/mui/examples/hello-mui/fonts/mui-icons-extra.ttf';

// 导入 app.vue 部分路由
import app from './app.vue';

// 导入自己的路由模块
import router from './router.js'


// vue-resource 
import vueResource from 'vue-resource';
Vue.use(vueResource);

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})