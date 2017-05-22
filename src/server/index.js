const bodyParser = require('body-parser')
const express = require('express')

const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000
const DEVELOPMENT = process.env.DEVELOPMENT || false
const DATABASE_URL = process.env.DATABASE_URL || 'localhost'

const { initializeDb } = require('./db')


app.use(express.static('src/public'))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../../src/public'))
app.get('/', (req, res) => {
  res.render('index', {bundleLocation: DEVELOPMENT ? `http://${req.hostname}:9000` : ''})
})

initializeDb(DATABASE_URL)
  .then(models => {
    app.use('/api/v1', (req, res, next) => {
      req.models = models
      next()
    })
    app.use('/api/v1', require('./api.js'))

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT} http://localhost:${PORT}`)
    })
  })