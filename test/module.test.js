jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
process.env.PORT = process.env.PORT || 5060
process.env.NODE_ENV = 'production'

const { Nuxt, Builder } = require('nuxt')
const axios = require('axios')

const config = require('./fixture/nuxt.config')

const url = path => `http://localhost:${process.env.PORT}${path}`
const get = path => axios.get(url(path))

describe('Module', () => {
  let nuxt
  //
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    // Close all opened resources
    await nuxt.close()
  })

  test('render', async () => {
    let response = await get('/')
    expect(response.data).toContain('Markup:')
  })
})
