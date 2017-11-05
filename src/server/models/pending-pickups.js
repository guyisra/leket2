const _ = require('lodash')


const groupBySupplier = (pickups) => {

  const grouped = _.groupBy(pickups, obj => {
    return obj.mainSupplier.id
  });

  // it works, don't worry
  const withoutMainSupplier = x => _.omit(x, 'mainSupplier')

  const pullMainSuppliersUp = (arr) => Object.assign({},
      arr[0].mainSupplier,
      {
        suppliers: arr.map(withoutMainSupplier)
      }
  )

  const locations = Object.values(_.mapValues(grouped, pullMainSuppliersUp))

  return {
    locations
  }
}

const pendingPickups = (userId) => {
  const pendingPickupsPerUser =
    {
      "test": [
        {
          id: 1,
          name: 'ארומה',
          address: '1st floor',
          mainSupplier: {
            id: 1,
            name: 'עזריאלי',
          }
        },
        {
          id: 2,
          name: 'מקדונלדס',
          address: '1st floor',
          mainSupplier: {
            id: 1,
            name: 'עזריאלי',
          }
        },
        {
          id: 3,
          name: 'בהדונס',
          address: '1st floor',
          mainSupplier: {
            id: 2,
            name: 'איירפורט סיטי',
          }
        },
        {
          id: 4,
          name: 'פלאפל',
          address: '1st floor',
          mainSupplier: {
            id: 2,
            name: 'איירפורט סיטי',
          }
        }
      ]
    }

  return pendingPickupsPerUser[userId]    
}

module.exports = {
  pendingPickups, groupBySupplier
}