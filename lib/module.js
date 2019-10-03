const { resolve } = require('path')

function wpModule(_moduleOptions) {
  const options = { ...this.options.wp, ..._moduleOptions }

  this.options.head.script.push({
    src: `https://cdn.jsdelivr.net/npm/wpapi-fork/browser/wpapi.js`,
    async: false
  })

  this.addPlugin({
    src: resolve(__dirname, './plugin.server.js'),
    fileName: 'wp.server.js',
    options,
    mode: 'server'
  })
  this.addPlugin({
    src: resolve(__dirname, './plugin.client.js'),
    fileName: 'wp.client.js',
    options,
    mode: 'client'
  })
}

module.exports = wpModule
