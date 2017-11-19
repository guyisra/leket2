const parseIsufFile = require('../lib/parse-isuf-file')
const fs = require('fs')

module.exports = ({PendingPickup, Supplier, Location, User}) => async (req, res) => {  
  parseIsufFile(fs.createReadStream('./docs/isuf.txt'))
    .on('data', importPickup)

  res.sendStatus(200)
}

const importPickup = ({PendingPickup, Supplier, Location, User}) => async (data) => {
  await User.upsert({
    id: data.userId,
    name: data.userName,
    phone: data.userPhone,
    email: data.userEmail
  })

  await Location.upsert({
    locationId: data.locationId,
    locationName: data.locationName
  })

  data.suppliers.forEach(async (curr) => {
    const res = await Supplier.upsert({
      pid: curr.supplierId,
      name: curr.supplierName,
      locationId: data.locationId
    })

    if (!res) console.error('Error!', curr)
  })

  data.suppliers.forEach(async (curr) => {
    const res = await PendingPickup.upsert({
      pid: data.pickupId,
      date: data.date,
      userId: data.userId,
      supplierId: curr.supplierId
    })

    if (!res) console.error('Error!', curr)
  })
}