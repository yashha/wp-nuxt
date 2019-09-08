import { resolve } from 'path'

function wpModule (_moduleOptions) {
  const options = { ...this.options.wp, ..._moduleOptions }

  this.addPlugin({
    src: resolve(__dirname, './plugin.js'),
    fileName: 'wp.js',
    options
  })
}

module.exports = wpModule
