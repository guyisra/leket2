const express = require('express')
const api = express.Router()
const status = require('./handlers/status')

module.exports = (models) => {
  api.get('/status', status)
  api.post('/user', require('./handlers/user')(models))
  api.get('/warehouses', require('./handlers/warehouse')(models))
  api.get('/pending-pickups', require('./handlers/get-pending-pickups')(models))
  api.post('/pickups', require('./handlers/post-new-pickup')(models))
  api.get('/import', require('./handlers/import-new-pickups')(models))

  return api
}
