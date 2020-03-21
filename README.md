# wp-nuxt

[![npm (scoped with tag)](https://img.shields.io/npm/v/wp-nuxt.svg?style=flat-square)](https://www.npmjs.com/package/wp-nuxt)
[![npm](https://img.shields.io/npm/dt/wp-nuxt.svg?style=flat-square)](https://www.npmjs.com/package/wp-nuxt)
[![CircleCI](https://img.shields.io/circleci/project/github/yashha/wp-nuxt.svg?style=flat-square)](https://circleci.com/gh/yashha/wp-nuxt)
[![Codecov](https://img.shields.io/codecov/c/github/yashha/wp-nuxt.svg?style=flat-square)](https://codecov.io/gh/yashha/wp-nuxt)
[![Dependencies](https://david-dm.org/yashha/wp-nuxt/status.svg?style=flat-square)](https://david-dm.org/yashha/wp-nuxt)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fyashha%2Fwp-nuxt.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fyashha%2Fwp-nuxt?ref=badge_shield)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4bb695b5-6b46-4c3f-a866-33aaf727570a/deploy-status)](https://app.netlify.com/sites/wp-nuxt/deploys)

[📖 **Release Notes**](./CHANGELOG.md)

## Features

The module adds [WP-API](https://github.com/WP-API/node-wpapi) to your nuxt application.

The size of the library is 49,8 kB minified (14 kB gzipped). [![npm bundle size](https://img.shields.io/bundlephobia/minzip/wpapi.svg)](https://bundlephobia.com/result?p=wpapi)

## Setup

- Add `wp-nuxt` dependency using yarn or npm to your project

- Add `wp-nuxt` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'wp-nuxt',

    // With options
    ['wp-nuxt', {
      endpoint: 'https://wp.kmr.io/wp-json',
      extensions: true // For additional functions of wpapi-extensions
      /* other options of WP-API */
    }],
 ]
}
```
Info: when you pass `extensions: true` you will have additional functions of [wpapi-extensions](https://github.com/yashha/wpapi-extensions) available. For this you also have to install [WUXT Headless WordPress API Extensions](https://wordpress.org/plugins/wuxt-headless-wp-api-extensions/) on your wordpress sever.

## Usage

You can use the API of [WP-API](https://github.com/WP-API/node-wpapi) using the injected 'app.$wp'. (s. example)

### Example

```js
<script>
export default {
  async asyncData ({ app, store, params }) {
    return { articles: await app.$wp.posts().perPage(10) }
  }
}
</script>
```

## Basic RSS feed integration

To use an automatically generated rss feed under `/feed.xml` you have to add following to your the `nuxt.config.js`.
It will automatically fetch the posts from your rest endpoint provided in the options. ([demo](https://wp-nuxt.netlify.com/feed.xml))

```js
const wpNuxtFeed = require('wp-nuxt/lib/rss')

module.exports = {
  feed: [
    wpNuxtFeed({
      baseUrl: 'http://localhost:3000'
    })
  ]
}
```
To prevent injecting the default link tag into the head you can pass the option `injectDefaultHead: false`.
Any options such as title or description can be overwritten through the function options. For more options look into the  [feed module](https://github.com/nuxt-community/feed-module) and the [definition of th function](https://github.com/yashha/wp-nuxt/blob/master/lib/rss/index.js).


## Basic sitemap integration
Using the module [nuxtjs/sitemap](https://github.com/nuxt-community/sitemap-module) a opinionated sitemap is provided by default.


Specific options can be overwritten like the following in the `nuxt.config.js`:
```js
module.exports = {
  wp: {
    sitemap: {
      hostname: process.env.HOSTNAME // default; format e.g. 'http://localhost:3000'
    }
  }
}
```

It can be completely overwritten using the `sitemap` property in the `nuxt.config.js` and deactivated using following:
```js
module.exports = {
  wp: {
    sitemap: false
  }
}

```

See more options in the extension [nuxtjs/sitemap](https://github.com/nuxt-community/sitemap-module) or in the following [file](https://github.com/yashha/wp-nuxt/blob/master/lib/module/sitemap.js)

## Custom Routes
You can register your own routes e.g. for custom extentions.

```js
module.exports = {
  wp: {
    endpoint: 'https://wp.kmr.io/wp-json',
    customRoutes: [
      {
        extension: 'wp/v2',
        route: 'custom-taxonomy',
        name: 'customTaxonomy'
      }
    ]
  }
}
```
This will call `wp.customTaxonomy = wp.registerRoute('wp/v2','custom-taxonomy'` and make it available as `app.$wp.customTaxonomy()`

## Auto-Discovery

For more infos: https://github.com/WP-API/node-wpapi/tree/master#auto-discovery

```js
module.exports = {
  wp: {
    endpoint: 'https://wp.kmr.io/wp-json',
    discover: true // To auto-discover routes by url provided in 'endpoint'
  }
}
```

Info: Make sure to handle CORS correctly. s. https://github.com/WP-API/node-wpapi/tree/master#cross-origin-auto-discovery

## Browser Support

IE11 seems to work, but throws errors. ([Help wanted](https://github.com/yashha/wp-nuxt/issues/67))

## License

[MIT License](./LICENSE)

Copyright (c) [yashha](https://github.com/yashha)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fyashha%2Fwp-nuxt.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fyashha%2Fwp-nuxt?ref=badge_large)
