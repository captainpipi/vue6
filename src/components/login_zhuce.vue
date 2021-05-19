<template>
    <div id="login_zhuce">

        <!--object-fit: cover图片比例永远不变形-->
        <img ref="backimg" src="../picture/earth.jpg" style="object-fit: cover; width: 100%">


        <el-card id="center" class="box-card" :body-style="{ height: '61.8%' }">

            <div slot="header" class="clearfix">
                <router-link to="/login_zhuce/login">登录</router-link>
                |
                <router-link to="/login_zhuce/zhuce">注册</router-link>
            </div>

            <div>

                <!-- login_zhuce -->
                <router-view/>
            </div>
        </el-card>

    </div>
</template>

<script>
export default {
    data() {
        return{
            clientHeight:'',
        }
    },
    created() {

    },
    mounted() {
        let height = document.documentElement.clientHeight;
        this.$refs.backimg.style.minHeight = height + "px";

    },
    watch:{

    },
    computed:{

    },
    methods: {

    },
    components: {},
};
</script>

<style>
#login_zhuce {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*background-color: aqua;*/
    min-height: 100%;
    /*background: url(../picture/preview.jpg) no-repeat;*/
    position: relative;

}
html{
    overflow-y: hidden;
}

#center {
    position: absolute;
    top: 10%;
    left: 50%; /*从左边和父元素对其开始,向右平移父元素的50%*/
    transform: translateX(-50%); /*向左偏移自身的50%*/
    /*background: ivory;*/

    width: 400px;
    height: 647.2px;


}


</style>
