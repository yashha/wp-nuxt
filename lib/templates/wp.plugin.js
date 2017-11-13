import wpApi from 'wpapi'

const wp = new wpApi(<%= serialize(options) %>)

export default function (ctx, inject) {
  inject('wp', wp)
}