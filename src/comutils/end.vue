<template>
  <div id="end">
    <div @click="login()">尾部</div>
  </div>
</template>

<script>
export default {
  name: "end",
  components: {},
  methods: {
    login() {
      //   this.$router.push('/login_zhuce').catch(data => {  });//路由跳转
      //路由跳转 传递参数
      this.$router.push({
        path: "/logined",
        query: { userId: 123 },
      });
    },
  },
};
</script>

<style>
</style>