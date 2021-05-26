/* eslint-disable  */
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const path = require('path')
const webpack = require('webpack')

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = (env, argv) => {
    return {
        devtool: argv.mode === 'development' ? 'source-map' : false,
        entry: path.join(__dirname, 'src', 'index.js'),
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    include: path.resolve(__dirname, 'src'),
                    use: [
                        'style-loader',
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: argv.mode === 'development'
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ],
                },
                { // config for images
                    test: /\.(png|svg|jpg|jpeg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'assets/images',
                            }
                        }
                    ],
                },
                { // config for fonts
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                            }
                        }
                    ],
                }

            ]
        },
        devServer: {
            clientLogLevel: 'silent',
            historyApiFallback: true,
            hot: true,
            host: '0.0.0.0',
            useLocalIp: true,
            disableHostCheck: true,
            hotOnly: true,
            open: false,
            stats: 'minimal',
            // enable gzip & switch port  tự động reload lại mỗi khi có thay đổi file
            contentBase: path.join(__dirname, 'dist'),
            // contentBase: './dist',
            compress: true,
            port: 3000,
            historyApiFallback: true,
        },

        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                favicon: path.resolve(__dirname, 'src/resources/images/favicon.ico')
            }),
            new MiniCssExtractPlugin(
                // { // plugin for controlling how compiled css will be outputted and named
                //   filename: "assets/styles/[name].css",
                //   chunkFilename: "styles/[contenthash].css"
                // }
            ),
            // This makes it possible for us to safely use env vars on our code
            new webpack.DefinePlugin({
                'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
            }),
            //ignore Plugin locale
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/,
            }),
            new WebpackManifestPlugin({
                fileName: 'assets/resources/manifest.json',
                publicPath: ASSET_PATH,
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            // browser not save cache fullhash/chunkhash/contenthash
            // Sync chunk hash 
            filename: '[name][fullhash].js',
            clean: true,
            // Async Chunk 
            // chunkFilename: '[hash].js',
            publicPath: ASSET_PATH,
        },

        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        // mode: 'development'
    }
};