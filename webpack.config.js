module.exports = {
  entry: __dirname + "/src/validator.jsx", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'validator.js',  // Name of generated bundle after build
    publicPath: '/', // public URL of the output directory when referenced in a browser
    libraryTarget: 'commonjs2'
  },
  module: {  // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  },
  devServer: {  // configuration for webpack-dev-server
      contentBase: './src',  //source of static assets
      port: 7700, // port to run dev-server
  } 
};
