
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import webpack from "webpack";

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(import.meta.dirname, 'public'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true
              }
            }
          }
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin(),
new webpack.DefinePlugin ({
  __VUE_OPTIONS_API__: 'true',
__VUE_PROD_DEVTOOLS__: 'false',
__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
}),
  ],
};