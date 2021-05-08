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
              ['@babel/preset-env', { targets: "ie 11" }]
            ]
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