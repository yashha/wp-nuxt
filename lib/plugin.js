import WPApi from 'wpapi'

<% if (options.extensions) { %>
import * as WPApiExtensions from 'wpapi-extensions'
<% } %>

const options = <%= serialize(options) %>
let wp = new WPApi(options)


export default async (ctx, inject) => {
  <% if (options.discover && options.auth) { %>
    wp = await WPApi.discover(options.endpoint).then(function( site ) {
      return site.auth({
          username: options.username,
          password: options.password
      });
  });
  <% } %>

  <% if (options.discover && !options.auth) { %>
    wp = await WPApi.discover(options.endpoint);
  <% } %>

  <% if (options.extensions) { %>
    WPApiExtensions.registerWuxt(wp)
  <% } %>

  <% if (options.customRoutes) { %>
    options.customRoutes.forEach(element => {
      wp[element.name] = wp.registerRoute(element.extension, element.route);
    });
  <% } %>

  inject('wp', wp)
}
