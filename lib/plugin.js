import WPApi from 'wpapi'

<% if (options.extensions) { %>
import { registerWuxt } from 'wpapi-extensions'
<% } %>

let wp = new WPApi(<%= serialize(options) %>)


export default async (ctx, inject) => {
  <% if (options.extensions) { %>
    registerWuxt(wp)
  <% } %>

  <% if (options.discover) { %>
    wp = await WPApi.discover('https://wp.kmr.io/wp-json');
  <% } %>

  inject('wp', wp)
}
