module.exports = {
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    ['@@', {
      endpoint: 'https://wp.kmr.io/wp-json'
    }]
  ]
}
