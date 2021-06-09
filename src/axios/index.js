import axios from "axios";
import qs from "qs";

axios.defaults.baseURL = "http://hplqytest.suoluomei.cn/index.php?s=/hfs/Api/";

//post请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

//设置超时
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // 响应错误提示
        return Promise.reject(error);
    }
);

export default function axiosApi(type, params, method) {
    const api_key = "195a9b99ea7a0d259151b5c412bb631b"
    const sign = "17a1920fdc3c3c25d1bf7c6dd724f5cf"
    var value = {
        api_key: api_key,
        sign: sign
    }
    var data = method == "post" ? qs.stringify(Object.assign(value, params)) : Object.assign(value, params)
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: type,
            data: data
        })
            .then(res => {
                if (res.data.errcode == 0) {
                    resolve(res.data)
                } else {
                    // 接口错误提示
                }
            })
            .catch(err => {
                reject(err)
            });
    })
};
