const { override, fixBabelImports, addPostcssPlugins, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require("path");
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: true, //默认为'css'
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { "@brand-primary": "#1DA57A" }, //自定义主题
    }),

    addPostcssPlugins(
        [require("postcss-px2rem-exclude")
            (
                {
                    remUnit: 75, //设计图大小
                    remPrecision: 2, //只转换到两位小数
                    exclude: /node_modules/i //插件不需要转rem
                }
            )
        ]
    ),

    addWebpackAlias({
        "@": path.resolve(__dirname, "src")
    })
);