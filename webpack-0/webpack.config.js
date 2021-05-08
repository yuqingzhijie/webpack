var path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: /src/
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "ie 9" }]
            ]
          }
        }
      },
      {
        test: /\.png|jpg|gif$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
            publicPath: './assets'
          }
        }
      }
    ]
  },
  mode: "development",
  devServer: {
    publicPath: "/dist"
  }
}