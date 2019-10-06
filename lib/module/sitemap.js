import WPAPI from 'wpapi'

const { getAll } = require("../utils");

const defaults = {
  postsBasePath: '/'
}

async function sitemapModule(_moduleOptions) {
  const options = {...defaults, ...this.options.wpsitemap, ..._moduleOptions}

  this.requireModule(['@nuxtjs/sitemap', {
    hostname: 'http://localhost:3000',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    routes: async () => {
      const postsBasePath = options.postsBasePath

      const wpapi = new WPAPI(this.options.wp)

      let posts = []
      try {
        posts = await getAll(wpapi.posts(100))
      } catch (e) {
        console.error(e)
      }

      let pages = posts.map(item => {
        return {
          url: `${postsBasePath}${item.slug}`,
          lastmod: item.modified
        }
      })

      pages = pages.concat(this.options.router.routes.map(route => route.path))

      if (this.options.sitemap && this.options.sitemap.additionalPages) {
        pages = [...pages, this.options.sitemap.additionalPages]
      }

      return pages
    },
    ...options
  }])
}

module.exports = sitemapModule
