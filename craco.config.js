const path = require("path");
const CracoLessPlugin = require("craco-less");
const px2rem = require("postcss-px2rem-exclude");
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

    //rem配置
    style: {
        postcss: {
            loaderOptions: {
                ident: "postcss",
                plugins: () => [
                    px2rem({
                        remUnit: 37.5,
                        remPrecision: 2,
                        exclude: /node_modules/i,
                    }),
                ],
            },
        },
    },
}
