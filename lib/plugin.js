import wpApi from 'wpapi'

const wp = new wpApi(<%= serialize(options) %>)

export default (ctx, inject) => {
  inject('wp', wp)
}
