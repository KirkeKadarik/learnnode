
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
  },
    devServer: {
    static: {
      directory: path.join(import.meta.dirname, 'public'),
    },
    compress: true,
    port: 9000,
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
                loader:'sass-loader',
            options: { 
                sassOptions:{
                    quietDeps: true
                }
              }
            }
          ],
      },
      {
                test: /\.njk$/,
                use: [
                    {
                        loader: 'simple-nunjucks-loader',
                        options: {},
                    },
                    ]
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/views/index.njk',
    templateParameters: {
      name: 'kirke', 
      fruis: ['apple', 'cherry', 'mango', 'pineapple' ]
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'about.html',
    template: './src/views/about.njk',
  }),
  new HtmlWebpackPlugin({
      filename: 'contacts.html',
    template: './src/views/contacts.njk',
  }),
  
],
};
