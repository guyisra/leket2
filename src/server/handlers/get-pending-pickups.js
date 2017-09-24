const express = require('express')

module.exports = ({pendingPickups, groupBySupplier}) => (req, res) => {
  const userId = req.userId
  const pending = pendingPickups(userId)
  const grouped = groupBySupplier(pending)
  res.json(grouped)
}
