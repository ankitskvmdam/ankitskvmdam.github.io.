const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpack = require('optimize-css-assets-webpack-plugin')


const config = {
    entry: {
        website: "./ankdev/magic/scripts/index.jsx"
    },

    output : {
        path : path.resolve(__dirname, "./ankdev/static"),
        filename : '[name][hash].js'
    },

    resolve : {
        extensions : ['.js', '.jsx', '.sass', '.css', '.scss']
    },
    
    module: {
        rules: [
            { 
                test: /\.(jsx|js)$/,
                exclude: /node_modules/, 
                use:'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ExtractCssChunksPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            minimize: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|otf|eot)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options:{
                    name: 'fonts/[path][name].[ext]'
                }
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: [ExtractCssChunksPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                      importLoaders: 2,
                      sourceMap: true,
                      minimize: true
                    }
                  },
                  {
                    loader: "postcss-loader",
                    options: {
                      sourceMap: true
                    }
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true
                    }
                  }          
                ]
            }
        ]
    },

    plugins: [
        new ExtractCssChunksPlugin({
            filename:"[name][hash].css",
            chunkFilename:"[name][id][hash].css"
        }),

        new ManifestPlugin({
            fileName: "../data/manifest.json",
        }),
        new CopyWebpackPlugin([
            {
                from: "./ankdev/resources/",
                to: "./ankdev/static/"
            },
            {
                from: "./CNAME",
                to: "./"
            }
        ]),
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    output: {
                        comments: false,
                        ascii_only: true
                    },
                    compress: {
                        comparisons: false
                    }
                }
            }),
            new OptimizeCssAssetsWebpack({
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    presets: ['advance', {discardComments: {removeAll: true}}]
                } 
            })
        ],
    }

}

module.exports = config