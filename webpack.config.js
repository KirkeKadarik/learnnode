
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let response = await fetch('https://rickandmortyapi.com/api/character');
let data = await response.json();
console.log(data);

let pages = [];
for (let character of data.results) {
  let page = new HtmlWebpackPlugin({
    filename: `${character.id}.html`,
    template: './src/views/page.njk',
    templateParameters: {
      character, //same as character: character
    }
  });
  pages.push(page);
}


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
     characters: data.results
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
  ...pages
  ],
}