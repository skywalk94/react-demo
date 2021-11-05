const path = require("path");
const CracoLessPlugin = require("craco-less");
module.exports = {
    // antd按需加载
    babel: {
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": true// true 针对less
                }
            ]
        ]
    },
    //antd插件配置，使用less并定义主题
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' }, //主题色
                        javascriptEnabled: true,
                    },
                },
                // 配置module.less
                modifyLessRule(lessRule, context) {
                    lessRule.exclude = /\.m\.less$/
                    return lessRule
                },
                modifyLessModuleRule(lessModuleRule, context) {
                    lessModuleRule.test = /\.m\.less$/
                    const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'))
                    cssLoader.options.modules = {
                        localIdentName: '[local]_[hash:base64:5]'
                    }
                    return lessModuleRule
                }
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
