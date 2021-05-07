module.exports = {
  "entry": {
    "index": "./src/index.js"
  },
  "output": {
    "filename": "[name].js",
  },
  "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": ['style-loader', 'css-loader']
      }
    ]
  },
  "mode": "development",
  "devServer": {
    publicPath: "/dist"
  }
}