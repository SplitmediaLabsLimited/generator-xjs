/* globals module */
var webpack = require('webpack');
var fs = require('fs');

function fetchLicense() {
  var filename = require.resolve('./node_modules/xjs-framework/LICENSE');
  return fs.readFileSync(filename, 'utf8'); // Sync... we need sync.
}

module.exports = {
  entry: {
    main: './src/js/main.js'<% if (apptype === 'source') { %>,
    config: './src/js/config.js'<% } %>
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  output: {
    path: 'assets',
    filename: 'js/[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel?presets[]=es2015'
      },

      { test: /\.html$/, loader: 'html' },

      { test: /\.ts$/, loader: 'ts' },

      {
        test: /\.styl$/,
        loader: 'style!css?base64=true!stylus'
      }
    ]
  },

  stylus: {
    define: {
      url: require('stylus').url({ limit: false })
    }
  },

  plugins: [
    new webpack.BannerPlugin(fetchLicense())
  ]
};