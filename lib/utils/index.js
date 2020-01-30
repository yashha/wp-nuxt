// http://wp-api.org/node-wpapi/collection-pagination/
function getAll(request) {
  return request.then(response => {
    if (!response._paging || !response._paging.next) {
      return response
    }
    // Request the next page and return both responses as one collection
    return Promise.all([response, getAll(response._paging.next)]).then(responses => {
      return [].concat(...responses)
    })
  })
}

module.exports.getAll = getAll
