# image-search-wrapper-nodejs
A Image search wrapper to google images, simply put in your appId and secret plugin as a route to expressjs
## Demo
demo availible at [https://lee182-google-image-api.herokuapp.com](https://lee182-google-image-api.herokuapp.com/recent)

### endpoints
[GET /recent](https://lee182-google-image-api.herokuapp.com/recent)

[GET /search/katz](https://lee182-google-image-api.herokuapp.com/search/katz)

[GET /search/dogs?offset=101&limit=3](https://lee182-google-image-api.herokuapp.com/search//search/dogs?offset=101&limit=3)

## API
### GET /search/:img
`GET /katz` will respond with
an array of results each containing

```javascript
[
  {
    url: "https://i.ytimg.com/vi/sw3phlvDmpA/maxresdefault.jpg"
    snippet "Last Name Katz (Music Video) ..."
    thumbnail: "https://encrypted-tbn3.gs…9-Slz8M1p91QnmHD-M_AawKQ"
    context: "https://www.youtube.com/watch?v=sw3phlvDmpA"
  }
  ...
]
```
### query ?offset=number (optional)
the offset query determines the number of results to skip over. by default the number is 0

### query &limit=count (optional)
by default the limit is to 10 results

### GET /recent
will return recent search queries in as a array

### install on your server
```$ npm install Lee182/image-search-wrapper-nodejs```
in server.js
```javascript
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const img_search = require('./index.js')({
  history_cap: 10, // the size of the recent path which stores search queries
  cors: true, // enable Cross Origin Requests
  gg_id: process.env.GG_ID || require('./keys').GG_ID,
  gg_key: process.env.GG_KEY || require('./keys').GG_KEY,
})

app.use('/',img_search)

app.listen(port, function(){
  console.log('server listening at http://localhost:'+port)
})
```
GG_ID and GG_KEY can be obtained from (google)[https://google.com]

## Author & Licence
Author: **[Jonathan T L Lee](https://github.com/Lee182)**

Licence: MIT

Repo: [https://github.com/Lee182/image-search-wrapper-nodejs]( https://github.com/Lee182/image-search-wrapper-nodejs)
