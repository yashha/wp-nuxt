module.exports = {
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    '@nuxtjs/axios',
    ['@@', {
      endpoint: 'https://wp.kmr.io/wp-json'
    }]
  ]
}
