const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const img_search = require('./app.js')({
  history_cap: 10,
  cors: true,
  gg_id: process.env.GG_ID || require('./keys').GG_ID,
  gg_key: process.env.GG_KEY || require('./keys').GG_KEY,
})

app.use('/',img_search)

app.listen(port, function(){
  console.log('server listening at http://localhost:'+port)
})
