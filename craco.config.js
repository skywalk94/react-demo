const path = require("path");
const CracoLessPlugin = require("craco-less");
module.exports = {
    //antd插件配置，使用less并定义主题
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],

    //配置src路径
    webpack: {
        alias: {
            "@": path.resolve("src"),
        },
    },
}
