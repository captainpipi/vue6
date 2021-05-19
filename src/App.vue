<template>
    <div id="app">
        <!-- 路由 -->
        <div>
            <router-view/><!-- 登陆注册页面 , 已经登陆页面 -->
        </div>

        <!-- 组件引用 -->
        <div>
            <end></end>
        </div>
    </div>
</template>
<script>

import end from './comutils/end'

export default {
    name: 'App',
    components: {
        end
    },
    created() {
        this.$router.push('/login_zhuce').catch(data => {
        });//路由跳转
    }
}
</script>

<style>
body {
    margin: 0;
}
</style>
