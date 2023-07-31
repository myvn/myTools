// Generated using webpack-cli https://github.com/webpack/webpack-cli
const isProduction = process.env.NODE_ENV === "production";
const path = require("path");

// 打包输出 index.html
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// workService
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

// 清理dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 使用NodePolyfillPlugin插件，以便在打包过程中自动添加所需的Node.js全局变量和方法的polyfill。
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const nodeExternals = require('webpack-node-externals')

const config = {
    entry: path.join(__dirname, "/src/index.ts"),
    output: {
        path: path.join(__dirname, "dist"),
        library: "kits", // string,
        // 导出库(exported library)的类型
        // 这里详情看 https://zhuanlan.zhihu.com/p/108216236
        libraryTarget: "umd", //
        umdNamedDefine: true,
        globalObject: "this",
    },
    devServer: {
        open: true,
        host: "localhost",
    },
    plugins: [
       //  html 测试
       /* new HtmlWebpackPlugin({
            template: "index.html",
        }),*/
        new CleanWebpackPlugin(),
        new NodePolyfillPlugin(),
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    performance: {
        // hints: false, // 关闭新能优化提示
        hints: "warning", // 枚举
        maxAssetSize: 300000, // 整数类型（以字节为单位）
        maxEntrypointSize: 500000, // 整数类型（以字节为单位）
        assetFilter: function (assetFilename) {
            // 提供资源文件名的断言函数
            // 只给出js与css文件的性能提示
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: false // 只做语言转换，而不做类型检查
                        }
                    }
                ],
                exclude: ["/node_modules/"],

            },


            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
        fallback: {
            http: require.resolve('stream-http')
        }
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
        // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
    }
    config.externals = [nodeExternals()]  // 忽略Node.js核心模块
    return config;
};
