const {toGetPendingPickupsResponse} = require('../data-mappers/pending-pickup')

module.exports = ({PendingPickup, Supplier, Location}) => async (req, res) => {
  const userId = req.cookies.userId

  const pending = await PendingPickup.findAll({
    where: {userId},
    include: [ {
      model: Supplier,
      include: [ Location ]
    }]
  })

  res.json(toGetPendingPickupsResponse(pending))
}
