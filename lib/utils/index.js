// http://wp-api.org/node-wpapi/collection-pagination/
async function getAll(request) {
  try {
    return request.then(response => {
      if (!response._paging || !response._paging.next) {
        return response;
      }
      // Request the next page and return both responses as one collection
      return Promise.all([response, getAll(response._paging.next)]).then(responses => {
        return [].concat(...responses);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports.getAll = getAll;
