// 解析路由参数
export function parseUrl(param) {
    if (param.indexOf("?") == 0) {
        let temp = {}
        let arr = param.substr(1).split("&")
        for (let i in arr) {
            let cut = arr[i].split("=")
            temp[cut[0]] = cut[1]
        }
        return temp
    } else {
        return param
    }
}