const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const api = require('./api.js')

app.use(express.static('src/public'))

app.use('/api', api)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} http://localhost:${PORT}`)
})