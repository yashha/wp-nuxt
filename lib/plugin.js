import WPApi from 'wpapi'

<% if (options.extensions) { %>
import { registerWuxt } from 'wpapi-extensions'
<% } %>

const wp = new WPApi(<%= serialize(options) %>)


export default (ctx, inject) => {
  <% if (options.extensions) { %>
    registerWuxt(wp)
  <% } %>

  inject('wp', wp)
}
