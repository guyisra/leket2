const {rejectEmpty} = require('./utils')

// TODO: Really map things from the presentation-domain to the database-domain (e.g.
// req.body.supplier should NOT be the ID from the database)
module.exports = {
  fromPostPickupRequest: (req) => {
    rejectEmpty(req.body.quantity, 'pickups.quantity_is_empty')

    return {
      date: Date.now(),
      userId: req.cookies.userId,
      supplierId: req.body.supplier,
      reasonId: req.body.reason,
      foodId: req.body.food,
      containerId: req.body.container,
      quantity: req.body.quantity
    }
  },

  toPostPickupResponse: (record) => {
    return {
      id: record.id,
      date: record.date,
      userId: record.userId,
      supplier: record.supplierId,
      reason: record.reasonId,
      food: record.foodId,
      container: record.containerId,
      quantity: record.quantity
    }
  }
}