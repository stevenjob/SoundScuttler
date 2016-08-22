const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: './dist',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(80, '0.0.0.0', (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    // eslint-disable-next-line no-console
    console.log('Listening at http://0.0.0.0:80/');
  }
});
