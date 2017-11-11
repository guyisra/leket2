const express = require('express')

const groupByLocation = require('../utils/group-by-location')

module.exports = ({PendingPickups}) => (req, res) => {
  const userId = 'test'
  const pending = PendingPickups.findAll({
    where: {userId},
    include: [
      { model: 'Suppliers', as: 'Supplier' },
      { model: 'Locations', as: 'Location' }
    ]
  })

  console.log({pending})
  
  const grouped = groupBySupplier(pending)
  res.json(grouped)
}
