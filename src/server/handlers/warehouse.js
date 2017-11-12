
module.exports = ({Warehouses}) => (req, res) => {
  Warehouses.findAll().then(warehouses => {
    res.json(warehouses)
  })
}
