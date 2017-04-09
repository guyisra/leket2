const express = require('express')

const api = express.Router()

api.get('/status', (req, res) => res.send('ok1'))

module.exports = api