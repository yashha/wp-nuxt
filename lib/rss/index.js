const WPApi = require('wpapi')
const axios = require('axios')
const urljoin = require('url-join')

const defaults = {
  injectDefaultHead: true,
  baseUrl: process.env.HOSTNAME || 'http://localhost:3000',
  path: '/feed.xml'
}

module.exports = function(moduleOptions) {
  const options = {
    ...defaults,
    ...moduleOptions
  }

  return {
    path: options.path,
    cacheTime: 1000 * 60 * 15,
    type: 'atom1',
    async create(feed) {
      const endpoint = options.endpoint ? options.endpoint : 'https://wp.kmr.io/wp-json'
      const wpapi = new WPApi({
        endpoint
      })

      const data = (await axios.get(endpoint)).data

      feed.options = {
        title: data.name,
        description: data.description,
        generator: 'Feed',
        id: options.baseUrl,
        link: options.baseUrl,
        feedLinks: {
          atom: urljoin(options.baseUrl, options.path)
        },
        ...options
      }
      const posts = await wpapi.posts()
      posts.forEach(post => {
        feed.addItem({
          title: post.title.rendered,
          id: urljoin(options.baseUrl, post.slug),
          link: urljoin(options.baseUrl, post.slug),
          content: post.content.rendered.replace(/(\r\n|\n|\r)/gm, ''),
          description: post.excerpt.rendered,
          date: new Date(post.date)
        })
      })
    },
    ...options
  }
}

module.exports.injectDefaultHead = async function() {
  await Promise.all(
    this.options.feed.map(async feed => {
      if (feed.injectDefaultHead) {
        const data = (await axios.get(this.options.wp.endpoint)).data
        this.options.head.link.push({
          rel: 'alternate',
          type: 'application/atom+xml',
          title: data.name,
          href: urljoin(feed.baseUrl, feed.path)
        })
      }
    })
  )
}
