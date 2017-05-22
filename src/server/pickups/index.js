const express = require('express');
const fs = require('fs')
const windows1255 = require('windows-1255')

const pickupsRouter = express.Router();

pickupsRouter.get('/', (req, res) => {
  res.json({
    locations: [
      {
        id: 1,
        name: 'עזריאלי',
        suppliers: [
          {
            id: 1,
            name: 'ארומה',
            address: '1st floor'
          },
          {
            id: 2,
            name: 'מקדונלדס',
            address: '1st floor'
          }
        ]
      }, 
      {
        id: 2,
        name: 'איירפורט סיטי',
        suppliers: [
          {
            id: 3,
            name: 'בהדונס',
            address: '1st floor'
          },
          {
            id: 4,
            name: 'פלאפל',
            address: '1st floor'
          }
        ]
      }
    ]
  })
})

module.exports = pickupsRouter