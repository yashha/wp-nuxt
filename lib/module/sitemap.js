import WPAPI from 'wpapi'

const { getAll } = require('../utils')

const defaults = {
  postsBasePath: '/'
}

function sitemapModule(_moduleOptions) {
  const options = { ...defaults, ...this.options.wp.sitemap, ..._moduleOptions }

  this.requireModule([
    '@nuxtjs/sitemap',
    {
      hostname: process.env.HOSTNAME || 'http://localhost:3000',
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmodISO: new Date().toISOString(),
        lastmodrealtime: true
      },
      routes: async () => {
        const postsBasePath = options.postsBasePath

        const wpapi = new WPAPI(this.options.wp)

        let posts = []
        posts = await getAll(wpapi.posts(100))

        let pages = posts.map(item => {
          return {
            url: `${postsBasePath}${item.slug}`,
            lastmod: new Date(item.modified).toISOString()
          }
        })

        pages = pages.concat(this.options.router.routes.map(route => route.path))

        if (this.options.sitemap && this.options.sitemap.additionalPages) {
          pages = [...pages, this.options.sitemap.additionalPages]
        }

        return pages
      },
      ...options
    }
  ])
}

module.exports = sitemapModule
