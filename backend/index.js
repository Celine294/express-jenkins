const express = require('express')
const session = require('express-session')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({ credentials: true, origin: 'localhost:3210' }))

app.use(
  session({
    secret: 'secret string',
    resave: false,
    saveUninitialized: false,
    cookie: {},
  })
)

app.get('/', (req, res) => {
  if (!req.session.pageCount) {
    req.session.pageCount = 0
  }

  req.session.pageCount += 1

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3210')

  console.log('Returning', {
    pageCount: req.session.pageCount
  })

  res.send({
    pageCount: req.session.pageCount
  })
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})
