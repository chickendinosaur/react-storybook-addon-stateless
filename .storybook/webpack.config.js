module.exports = {
  devTool: 'eval-source-maps',
  module: {
    loaders: [
      // JavaScript
      {
        test: /\.js$|\.jsx$/,
        loaders: [
          'react-hot-loader/webpack',
          'babel-loader?cacheDirectory=true'
        ],
        exclude: /node_modules/
      },
      // Styles.
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader'
      },
      // Images.
      {
        test: /\.(svg|jpg|jpeg|gif|png|webp|ico)$/,
        loader: 'file-loader?name=assets/images/[name].[ext]'
      }
    ]
  }
};
