const express = require('express')
const api = express.Router()
const status = require('./handlers/status')

api.get('/status', status)

module.exports = api