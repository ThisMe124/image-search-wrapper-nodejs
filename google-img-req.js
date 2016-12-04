const request = require('request')

function map_results(res) {
  return res.items.map(function(o){
    return {
      url: o.link,
      snippet: o.snippet,
      thumbnail: o.image.thumbnailLink,
      context: o.image.contextLink
    }
  })
}

function google_req(id, key) {
  // {
  //   search: 'katz',
  //   skip: 0,
  //   limit: 10
  // }
  return function(o) {
    var str = `https://www.googleapis.com/customsearch/v1
      ?q=${o.search}
      &searchType=image
      &start=${o.skip}
      &num=${o.limit}
      &cx=${id}
      &key=${key}`.split('\n').map(function(txt){
        return txt.trim()
      }).join('')
    return new Promise(function(resolve,reject){
      request.get(str, function(err, res, body){
        if (err) {reject(err)}
        try {
          body= JSON.parse(body)
          body= map_results(body)
        } catch(e){
          return reject(e)
        }
        return resolve(body)
      })
    })
  }
}

module.exports = google_req
