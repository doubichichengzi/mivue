/*
axios 拦截器
*/
import axios from 'axios'
import storage from '../storage';
import env from '../env';
//根据前端的跨域方式做调整 /a/b /api/a/b
//axios.defaults.baseURL = '/api';
//import config from 'AxiosRequestConfig';
axios.defaults.timeout = 8000;
console.log(process.env.NODE_ENV);
axios.defaults.baseURL = env.baseURL;
let token = storage.getItem("token");
console.log(axios.defaults.baseURL, 'baseurl');
axios.interceptors.request.use(

    (config) => {
        if (token) {
            config.headers["Access-Token"] = token; // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        }
        //requestInterceptors(config);
        console.log(config, 'config');
        return config;
    },

    (err) => {
        return Promise.reject(err);
    },

    /*
    config => {
        let token = localStorage.getItem("token");
        if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            config.headers['Access-Token'] = token;
        }
        return config;
    },
    err => {
        //alert("当前发出的网络请求出现了致命的错误");
        return Promise.reject(err);
    }
    */
)
axios.interceptors.response.use(function (response) {//统一拦截 响应
    let res = response.data;
    console.log(res, 'response');


    if (res.status == 0) {
        return res;
    } else {
        if (res.status == 10) {//未登录
            window.location.href = '/#/login';
        } else {
            //  alert(res.msg);
            return res;
        }
    }

});