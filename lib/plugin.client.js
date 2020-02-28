<% if (options.extensions) { %>
import { registerWuxt } from 'wpapi-extensions'
<% } %>

console.log(window)
const wp = new WPAPI(<%= serialize(options) %>)


export default (ctx, inject) => {
  <% if (options.extensions) { %>
  registerWuxt(wp)
  <% } %>

inject('wp', wp)
}
