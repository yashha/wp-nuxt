import axios from 'axios'
import wpApi from 'wpapi'

export default async function (ctx, inject) {
  const { app, store } = ctx

  const wp = new wpApi({ endpoint: 'https://wp.kmr.io/wp-json' })

  inject('wp', wp)
}
