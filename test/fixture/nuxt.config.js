const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../../'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    ['~/../../', {
      endpoint: 'https://wp.kmr.io/wp-json'
    }]
  ]
}
