const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/index.jsx',
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[hash].bundle.js',
    sourceMapFilename: '[hash].map'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    historyApiFallback: true
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/,
        options: {
          failOnError: false
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            includePaths: [path.join(__dirname, '/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/')]
          }
        }]
      },      
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.tpl.ejs',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version'],
          }),
          precss(),
        ],
      },
    }),
    new BabiliPlugin()
  ],
};


/* 
devServer: {
    contentBase: 'app/ui/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    outputPath: buildPath,
    historyApiFallback: true,
}
*/