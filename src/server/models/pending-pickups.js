const _ = require('lodash')

module.exports = ({db}) => {
  const groupBySupplier = (pickups) => {

    const grouped = _.groupBy(pickups, obj => {
      return obj.locationId
    });

    // it works, don't worry
    const withoutLocation = x => _.omit(x, ['locationId', 'locationName'])

    const pullLocationUp = (arr) => Object.assign({},
        {
          id: arr[0].locationId,
          name: arr[0].locationName,
          suppliers: arr.map(withoutLocation)
        }
    )

    const locations = Object.values(_.mapValues(grouped, pullLocationUp))

    return {
      locations
    }
  }

  const pendingPickups = (userId) => {
    const rows = db.query(`
      select
        suppliers.id as 'id',
        suppliers.name as 'name',
        suppliers.address as 'address',
        locations.id as 'locationId',
        locations.name as 'locationName'
      from pending_pickups
      join suppliers on pending_pickups.supplier_id = suppliers.id
      join locations on suppliers.location_id = locations.id
      where
        pending_pickups.user_id = ${userId};
    `)

    return rows
  }

  return {
    pendingPickups, groupBySupplier
  }
}