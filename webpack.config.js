// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    entry: {
      main: [path.resolve(__dirname, './src/pages/main/index.js'), path.resolve(__dirname, './src/pages/main/sass/main.scss')],
      quiz: [path.resolve(__dirname, './src/pages/quiz/index.js'), path.resolve(__dirname, './src/pages/quiz/sass/main.scss')],
      gallery: [path.resolve(__dirname, './src/pages/gallery/index.js'),  path.resolve(__dirname, './src/pages/gallery/sass/main.scss')],
      results: [path.resolve(__dirname, './src/pages/results/index.js'),  path.resolve(__dirname, './src/pages/results/sass/main.scss')],
    },

    devtool: 'source-map',

    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },

    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },

    devServer: {
      open: true,
      host: 'localhost',
      static: [
        path.join(__dirname, 'src/pages/main'),
        path.join(__dirname, 'src/pages/gallery'),
        path.join(__dirname, 'src/pages/quiz'),
      ],
      compress: true,
      port: 9000,
    },

    plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          template: 'src/pages/main/index.html',
          filename: 'main.html',
          chunks: ["main"],
        }),
        new HtmlWebpackPlugin({
          inject: true,
          template: 'src/pages/quiz/index.html',
          filename: 'quiz.html',
          chunks: ["quiz"],
        }),
        new HtmlWebpackPlugin({
          inject: true,
          template: 'src/pages/gallery/index.html',
          filename: 'gallery.html',
          chunks: ["gallery"],
        }),
        new HtmlWebpackPlugin({
          inject: true,
          template: 'src/pages/results/index.html',
          filename: 'results.html',
          chunks: ["results"],
        }),
        new MiniCssExtractPlugin({
          filename: 'styles/[name].css',
        }),
        new CleanWebpackPlugin(),
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ["@babel/preset-env"]
                  }
                }
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
                generator: {
                  filename: 'assets/[name].[hash][ext][query]'
                }
            },
            {
              test: /favicon\.ico$/,
              type: 'asset/resource',
              generator: {
                filename: '[name][ext]',
              },
            },
            {
              test: /\.(mp3|ogg)$/,
              type: 'asset/resource',
              generator: {
                filename: 'assets/media/[name][ext]',
              },
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
