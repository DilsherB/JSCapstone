<<<<<<< HEAD
/*eslint-disable*/
=======
>>>>>>> dev
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
<<<<<<< HEAD
    bundle: path.resolve(__dirname, './src/index.js'),
=======
    index: './src/index.js',
>>>>>>> dev
  },
  devServer: {
    static: './dist',
  },
<<<<<<< HEAD

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack setup',
      filename: 'index.html',
=======
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
>>>>>>> dev
      template: './src/index.html',
    }),
  ],
  output: {
<<<<<<< HEAD
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
=======
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
>>>>>>> dev
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
<<<<<<< HEAD
    ],
  },
};
=======
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        use: 'file-loader',
      },
    ],
  },
};
>>>>>>> dev
