const Warehouse = require('../db/models/warehouse')

module.exports = (req, res) => {
  Warehouse.findAll().then(warehouses => {
    res.json(warehouses)
  })
}
