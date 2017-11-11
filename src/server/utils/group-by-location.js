module.exports = function groupByLocation(pickups) {
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