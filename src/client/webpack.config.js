const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html'
});

const outputDirectory = 'dist';

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-class-properties',
              'graphql-tag',
              ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
	  {
		  test: /\.eot(\?v=\d+.\d+.\d+)?$/,
		  use: [
			{
			  loader: "file-loader",
			  options: {
				name: "fonts/[name].[ext]"
			  }
			}
		  ]
		},
		{
		  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		  use: [
			{
			  loader: "url-loader",
			  options: {
				limit: 8192,
				mimetype: "application/font-woff",
				name: "fonts/[name].[ext]"
			  }
			}
		  ]
		},
		{
		  test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
		  use: [
			{
			  loader: "url-loader",
			  options: {
				limit: 8192,
				mimetype: "application/octet-stream",
				name: "fonts/[name].[ext]"
			  }
			}
		  ]
		},
		{
		  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		  use: [
			{
			  loader: "url-loader",
			  options: {
				limit: 8192,
				mimetype: "image/svg+xml",
				name: "images/[name].[ext]"
			  }
			}
		  ]
		}
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/), htmlPlugin]
};
