const express = require('express')
const api = express.Router()
const status = require('./handlers/status')

api.get('/status', status)
api.post('/user', require('./handlers/user'))
api.use('/pickups', require('./pickups'))

module.exports = api