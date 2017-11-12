const express = require('express')
const api = express.Router()
const status = require('./handlers/status')

module.exports = (models) => {
  api.get('/status', status)
  api.post('/user', require('./handlers/user')(models))
  api.get('/warehouses', require('./handlers/warehouse')(models))
  api.get('/pickups', require('./handlers/get-pending-pickups')(models))
  
  return api
}
