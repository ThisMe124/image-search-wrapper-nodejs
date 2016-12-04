# image-search-wrapper-nodejs
A Image search wrapper to google images, simply put in your appId and secret plugin as a route to expressjs

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
### query ?skip=number (optional)
the offset query determines the number of results to skip over. by default the number is 0

### query &limit=count (optional)
by default the limit is to 10 results

### GET /recent
will return recent search queries in as a array
