import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/login_zhuce'
    },

    //第一个页面
    {
        path: '/login_zhuce',
        component: () => import('../components/login_zhuce.vue'),
        children:[
            {
                path: '',
                redirect: 'login'
            },
            //默认
            {
                path: 'login',//         /login_zhuce/login     path: 'login':如果是 path: '/login' 就指向不到了                        //登陆
                component: () => import('../components/login_zhuce/login.vue')
            },
            {
                path: 'zhuce',//           /login_zhuce/zhuce                        //注册
                component: () => import('../components/login_zhuce/zhuce.vue')
            }
        ]
    },
    {
        path: '/logined',
        component: () => import('../components/logined.vue')
    }



];

const router = new VueRouter({
    // mode: 'hash',
    mode: 'history',
    base: '',
    // base: process.env.BASE_URL,
    routes
})

//导出这个router
export default router

// export default new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })
