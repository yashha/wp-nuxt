const { resolve } = require('path')
const { injectDefaultHead } = require('./rss')

const defaults = {
  wpsitemap: true
}

async function wpModule(_moduleOptions) {
  const options = { ...defaults, ...this.options.wp, ..._moduleOptions }

  this.addPlugin({
    src: resolve(__dirname, './plugin.js'),
    fileName: 'wp.js',
    options
  })

  if (options.feed) {
    this.requireModule(['@nuxtjs/feed'])
    if (Array.isArray(this.options.feed)) {
      await injectDefaultHead.bind(this)()
    }
  }

  if (options.wpsitemap) {
    this.requireModule({
      src: resolve(__dirname, './module/sitemap.js'),
      options
    })
  }
}

module.exports = wpModule
