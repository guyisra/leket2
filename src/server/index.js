const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const { pendingPickups, groupBySupplier } = require('./models/pending-pickups')

const app = express()
const PORT = process.env.PORT || 3000
const DEVELOPMENT = process.env.DEVELOPMENT || false
const DATABASE_URL = process.env.DATABASE_URL || 'localhost'

app.use(express.static('src/public'))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, '../../src/public'))
app.get('/', (req, res) => {
  res.render('index', {
    bundleLocation: DEVELOPMENT ? `http://${req.hostname}:9000` : ''
  })
})

const deps = {
  pendingPickups, groupBySupplier
}

app.use('/api/v1', require('./api.js')(deps))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} http://localhost:${PORT}`)
})
