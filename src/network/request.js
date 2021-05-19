import Axios from 'axios';
import qs from 'qs';
import VueCookies from 'vue-cookies';


//判断生产环境 ,这里在浏览器刷新的时候会加载
if (process.env.NODE_ENV === "development") {
    console.log("request.js", "开发环境1")
    var url = "/aaa";   //本地交给 代理跨域     //这里的"/aaa"用来配置跨域 network会显示 http://localhost:8080/aaa,然后代理成 对应 config文件夹的index.js 文件
} else {
    var url = "http://118.31.102.56:8083/aaa" // 运行环境(这里本地代理不了) 交给 nginx服务器 代理
    console.log("request.js", "生产环境2")

}

//创建axios单例
export const axios = Axios.create({
    baseURL: url,
    timeout: 5000,
})


axios.defaults.withCredentials = true;       //默认会传session过去

//用来存储token,()
// export var token = {
//     "access_token":"",
//     "cookie":VueCookies
// }

// export default qs;
