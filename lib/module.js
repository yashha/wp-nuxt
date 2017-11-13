const { resolve } = require('path')

const defaults = {
  'wpApi': 'https://wp.kmr.io/wp-json'
}

module.exports = async function wp (moduleOptions) {
  const options = Object.assign({}, defaults, this.options['wp'], moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './templates/wp.plugin.js'),
    fileName: 'wp.plugin.js',
    options
  })
  this.addTemplate({
    src: resolve(__dirname, './templates/wp.store.js'),
    fileName: 'wp.store.js',
    options
  })
}

module.exports.meta = require('../package.json')
