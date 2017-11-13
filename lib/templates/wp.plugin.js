import wpStore from './wp.store'
import axios from 'axios'

export default async function (ctx, inject) {
  const { app, store } = ctx

  store.registerModule('wp', wpStore)
  inject('ctx', ctx)
}
