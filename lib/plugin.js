import WPApi from 'wpapi'

<% if (options.extensions) { %>
import { registerWuxt } from 'wpapi-extensions'
<% } %>

const options = <%= serialize(options) %>
let wp = new WPApi(options)


export default async (ctx, inject) => {
  <% if (options.discover) { %>
    wp = await WPApi.discover(options.endpoint);
  <% } %>

  <% if (options.extensions) { %>
    registerWuxt(wp)
  <% } %>

  <% if (options.customRoutes) { %>
    options.customRoutes.forEach(element => {
      wp[element.name] = wp.registerRoute(element.extension, element.route);
    });
  <% } %>

  inject('wp', wp)
}
