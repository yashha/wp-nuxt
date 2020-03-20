const wpNuxtFeed = require('../../lib/rss')

module.exports = {
  generate: {
    dir: '../../dist'
  },
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [require('../../')],
  wp: {
    endpoint: 'https://wp.kmr.io/wp-json',
    extensions: true,
    customRoutes: [
      {
        extension: 'wp/v2',
        route: 'custom-taxonomy',
        name: 'customTaxonomy'
      }
    ]
  },
  feed: [wpNuxtFeed()]
}
