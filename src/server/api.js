const express = require('express')
const api = express.Router()
const status = require('./handlers/status')

module.exports = (models) => {
  api.get('/status', status)
  api.post('/user', require('./handlers/user'))
  api.get('/warehouses', require('./handlers/warehouse'))
  api.get('/pickups', require('./handlers/get-pending-pickups')(models))
  
  return api
}
