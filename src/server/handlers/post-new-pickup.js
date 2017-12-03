const {fromPostPickupRequest, toPostPickupResponse} = require('../data-mappers/pickup')
const {toErrorResponse} = require('../data-mappers/error')

module.exports = ({Pickup}) => async (req, res) => {
  let pickupDetails

  try {
    pickupDetails = fromPostPickupRequest(req)
  } catch (error) {
    return res.status(400).json(toErrorResponse({error}))
  }

  const pickupRecord = await Pickup.create(pickupDetails)
  res.status(200).json(toPostPickupResponse(pickupRecord))
}
