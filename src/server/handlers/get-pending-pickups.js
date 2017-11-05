const express = require('express')

module.exports = ({pendingPickups, groupBySupplier}) => (req, res) => {
  const userId = 'test'
  const pending = pendingPickups(userId)
  const grouped = groupBySupplier(pending)
  res.json(grouped)
}
