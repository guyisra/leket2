const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3001

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use(express.static(path.join(__dirname, 'src/public')))

app.get('/status', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})