var webpack = require("webpack")
var webpackDevServer=require("webpack-dev-server")

module.exports = {
  devtool: 'eval-source-map',
  entry: ['webpack/hot/dev-server', '/home/lianfu/work/test/src/scripts/index.js'],
  output: {
    path: '/home/lianfu/work/test/dist/scripts',
    filename: 'index.js'
  },
  module: {
  	rules: [
  		{
  			test: /\.scss$/,
  			exclude: /node_modules/,
  			use: [
  				{ loader: 'style-loader' },
  				{ loader: 'css-loader' },
  				{ loader: 'sass-loader' }
  			]
  		},
  		{
  			test: /\.(js|jsx)$/,
  			exclude: /node_modules/,
  			use: [
  				{ loader: 'babel-loader' }
  			]
  		}
  	]
  },
  devServer: {
  	contentBase: '/home/lianfu/work/test/',
  	historyApiFallback: true,
  	inline: true,
  	port: 8080
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin()
  ]

};

