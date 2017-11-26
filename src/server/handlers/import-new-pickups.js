const parseIsufFile = require('../lib/parse-isuf-file')

const fs = require('fs')
const iconv = require('iconv-lite')
const moment = require('moment')

module.exports = ({PendingPickup, Supplier, Location, User}) => async (req, res) => {
  parseIsufFile(fs.createReadStream('./docs/isuf.txt').pipe(iconv.decodeStream('win1255')))
    .on('data', importPickup({PendingPickup, Supplier, Location, User}))
  res.sendStatus(200)
}

const importPickup = ({PendingPickup, Supplier, Location, User}) => async (data) => {
  try {
    await User.upsert({
      pid: data.userId,
      name: data.userName,
      phone: data.userPhone,
      email: data.userEmail
    })

    await Location.upsert({
      pid: data.locationId,
      name: data.locationName
    })

    for (curr of data.suppliers) {
      const res = await Supplier.upsert({
        pid: curr.id,
        name: curr.name,
        locationId: data.locationId
      })

      if (!res) {
        console.error('Error!', curr)
      }
    }

    for (curr of data.suppliers) {
      const res = await PendingPickup.upsert({
        pid: data.pickupId,
        date: moment(data.date, 'DD/MM/YY'),
        userId: data.userId,
        supplierId: curr.id
      })

      if (!res) {
        console.error('Error!', curr)
      }
    }
  }
  catch(e) {
    console.log(`Failed importing data: ${data}`, e)
  }
}