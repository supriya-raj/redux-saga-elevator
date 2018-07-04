module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: './src/main.jsx'
  },
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
}
