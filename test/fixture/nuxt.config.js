module.exports = {
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [require('../../')],
  wp: {
    endpoint: 'https://wp.kmr.io/wp-json'
  }
}
