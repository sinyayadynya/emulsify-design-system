const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

const webpackDir = path.resolve(__dirname);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

module.exports = {
  entry: {
    svgSprite: path.resolve(webpackDir, 'svgSprite.js'),
  },
  module: {
    rules: [loaders.SVGSpriteLoader],
  },
  plugins: [
    plugins.ImageminPlugin,
    plugins.SpriteLoaderPlugin,
    plugins.ProgressPlugin,
    plugins.CleanWebpackPlugin,
  ],
  output: {
    path: distDir,
    filename: 'remove/[name].js',
  },
};
