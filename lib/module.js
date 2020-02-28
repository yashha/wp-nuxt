const { resolve } = require('path')
const { injectDefaultHead } = require('./rss')

const defaults = {
  sitemap: true
}

async function wpModule(_moduleOptions) {
  const options = { ...defaults, ...this.options.wp, ..._moduleOptions }

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

  if (this.options.feed) {
    this.requireModule(['@nuxtjs/feed'])
    if (Array.isArray(this.options.feed)) {
      await injectDefaultHead.bind(this)()
    }
  }

  if (options.sitemap) {
    this.requireModule({
      src: resolve(__dirname, './module/sitemap.js'),
      options
    })
  }
}

module.exports = wpModule
