const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({ credentials: true, origin: true }))

let pageVisits = 0

app.get('/', (req, res) => {
  pageVisits += 1

  res.send({
    pageCount: pageVisits
  })
})

app.post('/reset', (req, res) => {
  pageVisits = 0
  res.send({
    success: pageVisits === 0
  })
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})

module.exports = { app }