const google_imgs = require('./google-img-req.js')
const express = require('express')

function main({history_cap, cors, gg_id, gg_key}) {
  var route = express.Router()
  var img_search = google_imgs(gg_id, gg_key)

  if (isNaN(history_cap)) {
    history_cap = 10
  }
  if (cors === true) {
    route.use(function(req, res, next) {
      // cross origin request  so friendly :)
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Headers", "X-Requested-With")
      next()
    })
  }
  var history = []
  function capped_history_push(o) {
    if (history.length === history_cap) {
      history.pop()
    }
    history.unshift({
      term: o.search,
      when: o.d
    })
  }

  route.get('/recent', function(req,res){
    res.json(history)
  })

  route.set('json spaces', 2)
  route.get('/search/:img',function(req,res){
    var o = {
      search: req.params.img,
      skip: Number(req.query.offset)+1 || 1,
      limit: Number(req.query.limit) || 10,
      d: (new Date()).toISOString()
    }
    console.log(o)
    capped_history_push(o)
    img_search(o).then(function(images){
      res.json(images)
    }).catch(function(err){
      res.json({err})
    })
  })

  route.get('*', function(req,res){
    res.status(404).json({err:'api documentation availible at https://github.com/Lee182/image-search-wrapper-nodejs \n try path GET /search/dogs ftw'})
  })

  return route
}

module.exports = main
