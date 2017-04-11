const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const DEVELOPMENT = process.env.DEVELOPMENT || false

app.use(express.static('src/public'))
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../../src/public'))
app.get('/', (req, res) => {
  res.render('index', {bundleLocation: DEVELOPMENT ? 'http://localhost:9000' : ''})
})
app.use('/api', require('./api.js'))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} http://localhost:${PORT}`)
})