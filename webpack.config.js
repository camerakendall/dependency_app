const path = require('path');

module.exports ={
  //First we specify our entry point
  //The entry point is where we insert our <App /> component into the html root
  entry: './client/index.js',
  //create webpack dev server
  devServer: {
    publicPath: '/build/',
    proxy: {
        '/api': 'http://localhost:3000'
    }
  },
  output:{
    path:path.join(__dirname, '/build/'),
    filename: 'bundle.js,'
  },
  mode: process.env.NODE_ENV,
  module: {
    //rules is an array that lets me specifiy each case in which a new file type needs to be understood by webpack  
    rules:[
      //rule1 for javascript files that use es6 and jsx
      {
        //regex to check for any files with the extension js or jsx
        test: /\.(js|jsx)$/,
        //exclude the unessecary node modules folder upon bundling
        exclude:/(node_modules)/,
        use: {
          //specify that we are using babel loader for this rule
          loader:'babel-loader',
          //specify the presets for this specific loader in options
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }   
      },
      {
        test:/\.css$/,
        exclude: /(node_modules)/,
        use:[ "style-loader", "css-loader"]
      },

    ]   
  }


  
}