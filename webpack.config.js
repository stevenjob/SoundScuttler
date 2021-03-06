const path = require('path');
// eslint-disable-next-line
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:80',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    root: path.resolve('./src'), // webpack 2 doesnt need this, this is here for eslint
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['', '.js']
  },
  eslint: {
    configFile: './.eslintrc.js'
  }
};
