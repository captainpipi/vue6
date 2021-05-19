<template>
    <div id="login" >
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="账号">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="req_test()" >点击发送请求</el-button>
    </div>
</template>

<script>
import {axios} from "../../network/request";

export default {
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        };
    },
    created() {
    },
    methods: {
        req_test() {
            let _this = this;//方法内的this 指向会变
            axios({
                method: "get",
                url: "/hello?name="+this.formLabelAlign.name,
                headers: {},
            })
                .then(function (response) {
                    console.log("axios接口返回:",response.data);
                    console.log("cookie历史数据:", _this.$cookies.get("test"));

                    _this.$cookies.set("test", _this.formLabelAlign.region); //时间单位是天
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
    /*border: 1px solid gray;*/
    padding-right: 15px;
}
</style>
