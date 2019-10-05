const { resolve } = require('path')
const { injectDefaultHead } = require("./rss");

async function wpModule(_moduleOptions) {
  const options = {...this.options.wp, ..._moduleOptions}

  this.addPlugin({
    src: resolve(__dirname, './plugin.js'),
    fileName: 'wp.js',
    options
  })

  if (this.options.feed) {
    this.requireModule(['@nuxtjs/feed'])
    if (Array.isArray(this.options.feed)) {
      await injectDefaultHead.bind(this)()
    }
  }
}

module.exports = wpModule
