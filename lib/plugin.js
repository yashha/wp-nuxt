import WPApi from 'wpapi'

const wp = new WPApi(<%= serialize(options) %>)

/* Wuxt extenstion - Initialy created by Daniel Auener */
/* Here: https://github.com/northosts/wuxt */
/* Wordpress extension: https://github.com/northosts/wuxt/tree/master/wp-content/mu-plugins/wuxt-headless-wp-api-extensions */
const registerCpt = wp =>
  (wp.cpt = postType => {
    wp[postType] = wp.registerRoute('wp/v2', '/' + postType + '/(?P<id>)', {
      params: ['embed', 'before', 'after', 'author', 'parent', 'post']
    })
    return wp[postType]()
  })
const registerFrontPage = wp =>
  (wp.frontPage = wp.registerRoute('wuxt/v1', '/front-page', {
    params: ['embed']
  }))
const registerSlug = wp =>
  (wp.slug = wp.registerRoute('wuxt/v1', '/slug/(?P<name>)', {
    params: ['embed']
  }))
const registerMenu = wp =>
  (wp.menu = wp.registerRoute('wuxt/v1', '/menu', {
    params: ['location']
  }))

export default (ctx, inject) => {
  registerFrontPage(wp)
  registerMenu(wp)
  registerSlug(wp)
  registerCpt(wp)

  inject('wp', wp)
}
