const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const mode = env.WEBPACK_SERVE ? 'development' : 'production';

    let exports = {
        mode: mode,
        entry: {
            'portfolio': './src/js/portfolio.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/templates/index.html',
                chunks: ['index']
            })
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            publicPath: '/'
        },
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'genesis-ui-app': 'Genesis',
        },
        resolve: {
            extensions: ['.js']
        },
        module: {
            rules: [
                {
                    test: /\.(txt|md)$/i,
                    use: [
                        {
                            loader: 'raw-loader',
                            options: {
                                esModule: false,
                            }
                        }
                    ],
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react'],
                            plugins: [
                                '@babel/plugin-transform-react-jsx',
                                '@babel/plugin-transform-runtime'
                            ],
                            comments: false,
                        }
                    }
                },
                {
                    test: /\.scss$/i,
                    use: [{
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: [
                                    path.join(path.dirname(module.filename), 'node_modules')
                                ]
                            }
                        }
                    }],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                    type: 'asset/resource',
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'images/[name].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
    }

    if(mode === 'development'){
        exports.devServer = {
            host: 'latus.local',
            static: path.join(__dirname, 'dist'),
            port: 9000,
            historyApiFallback: true,
            devMiddleware: {
                writeToDisk: true
            }
        };
    }

    return exports;
};