const WPApi = require('wpapi')
const axios = require('axios')

const defaults = {
  baseUrl: 'http://localhost:3000/'
}

module.exports = function(moduleOptions) {
  const options = {
    ...defaults,
    ...moduleOptions
  }

  return {
    path: '/feed.xml',
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
          atom: `${options.baseUrl}atom`
        },
        ...options
      }
      const posts = await wpapi.posts()
      posts.forEach(post => {
        feed.addItem({
          title: post.title.rendered,
          id: post.id,
          link: `http://localhost:3000/${post.slug}`,
          content: post.content.rendered.replace(/(\r\n|\n|\r)/gm, ''),
          description: post.excerpt.rendered,
          date: new Date(post.date)
        })
      })
    },
    ...options
  }
}
