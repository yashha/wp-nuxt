import WPApi from 'wpapi'

<% if (options.extensions) { %>
import { registerWuxt } from 'wpapi-extensions'
<% } %>

const options = <%= serialize(options) %>
let wp = new WPApi(options)


export default async (ctx, inject) => {
  <% if (options.extensions) { %>
    registerWuxt(wp)
  <% } %>

  <% if (options.discover) { %>
    wp = await WPApi.discover('https://wp.kmr.io/wp-json');
  <% } %>

  <% if (options.customRoutes) { %>
    options.customRoutes.forEach(element => {
      wp[element.name] = wp.registerRoute(element.extension, element.route);
    });
  <% } %>

  inject('wp', wp)
}
