const express = require('express')
const api = express.Router()
const status = require('./handlers/status')

api.get('/status', status)
api.post('/user', require('./handlers/user'))
api.get('/warehouses', require('./handlers/warehouse'))
api.use('/pickups', require('./pickups'))

module.exports = api
