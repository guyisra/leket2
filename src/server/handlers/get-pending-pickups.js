function toLocationsList(pickups) {
  const locations = {}

  pickups.forEach(pickup => {
    const loc = pickup.Supplier.Location

    if (!locations[loc.pid]) {
      locations[loc.pid] = { id: loc.pid, name: loc.name, suppliers: [] }
    }

    locations[loc.pid].suppliers.push({
      id: pickup.Supplier.pid,
      name: pickup.Supplier.name,
      address: pickup.Supplier.address
    })
  })

  return Object.values(locations)
}

module.exports = ({PendingPickup, Supplier, Location}) => async (req, res) => {
  const userId = req.cookies.userId

  const pending = await PendingPickup.findAll({
    where: {userId},
    include: [ {
      model: Supplier,
      include: [ Location ]
    }]
  })

  const locations = toLocationsList(pending)

  res.json({ userId, locations })
}
