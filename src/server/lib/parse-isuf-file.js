const csv = require('fast-csv')
const { Transform } = require('stream')

const NUM_OF_SUPPLIERS = 30

const suppliersColumnNames = n => {
  const names = []

  for (let i=1; i<=n; i++) {
    names.push(`supplierId${i}`)
    names.push(`supplierName${i}`)
  }

  return names
}

const parseCsv = csv.parse({
  delimiter: '\t',
  headers: true,
  renameHeaders: true,
  headers: [
    'pickupId',
    'date',
    'userId',
    'userName',
    'userPhone',
    'userEmail',
    'userEmail2',
    'locationId',
    'locationName',
    'status'
  ].concat(suppliersColumnNames(NUM_OF_SUPPLIERS))
})

var aggregateSuppliers = new Transform( { objectMode: true } )

aggregateSuppliers._transform = function (data, encoding, done) {
  const pickup = {
    pickupId: data.pickupId,
    date: data.date,
    userId: data.userId,
    userName: data.userName,
    userPhone: data.userPhone,
    userEmail: data.userEmail,
    userEmail2: data.userEmail2,
    locationId: data.locationId,
    locationName: data.locationName,
    status: data.status,
    suppliers: []
  }

  for (let i=1; i<=NUM_OF_SUPPLIERS; i++) {
    if (data[`supplierId${i}`]) {
      pickup.suppliers.push({
        id: data[`supplierId${i}`],
        name: data[`supplierName${i}`]
      })
    }
  }

  this.push(pickup)
  done()
}

module.exports = function parseIsufFile(inputStream) {
  return inputStream.pipe(parseCsv).pipe(aggregateSuppliers)
}