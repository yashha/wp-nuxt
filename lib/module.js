const { resolve } = require('path')

function wpModule(_moduleOptions) {
  const options = { ...this.options.wp, ..._moduleOptions }

  this.addPlugin({
    src: resolve(__dirname, './plugin.js'),
    fileName: 'wp.js',
    options
  })

  if (this.options.feed) {
    this.requireModule(['@nuxtjs/feed'])
  }
}

module.exports = wpModule
