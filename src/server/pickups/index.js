const express = require('express');
const fs = require('fs')
const windows1255 = require('windows-1255')
const csv = require('csv')

const pickupsRouter = express.Router();

pickupsRouter.get('/', (req, res) => {
  res.json({
    locations: [
      {
        id: 1,
        name: 'Azrieli',
        suppliers: [
          {
            id: 1,
            name: 'Store 1',
            address: '1st floor'
          },
          {
            id: 2,
            name: 'Store 2',
            address: '1st floor'
          }
        ]
      }, 
      {
        id: 2,
        name: 'Osher Ad',
        suppliers: [
          {
            id: 3,
            name: 'Store 3',
            address: '1st floor'
          },
          {
            id: 4,
            name: 'Store 4',
            address: '1st floor'
          }
        ]
      }
    ]
  })
})

module.exports = pickupsRouter