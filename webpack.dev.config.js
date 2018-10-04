// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//   devtool: 'cheap-module-eval-source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     'babel-polyfill',
//     path.join(__dirname, './src/index')
//   ],
//   output: {
//     path: path.join(__dirname, './public'),
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.json$/,
//         loader: 'json-loader'
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options:
//         {
//           babelrc: true,
//           cacheDirectory: true
//         }
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify('development'),
//         PLATFORM_ENV: JSON.stringify('web')
//       }
//     }),
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin()
//   ]
// };

const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: {
    app: [
      "./src/index.js"
    ],
  },
  output: {
    path: __dirname + "/public/static",
    filename: "[name].js",
    chunkFilename: "[name]-[id].js",
    publicPath: "/",
    library: "[name]",
    libraryTarget: "umd"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/template/index.tpl.html",
      inject: "body",
      filename: "index.html"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PLATFORM_ENV: JSON.stringify('web')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          // This is a feature of `babel-loader` for Webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          babelrc: true,
          cacheDirectory: true,
        },
      }
    ]
  }
};