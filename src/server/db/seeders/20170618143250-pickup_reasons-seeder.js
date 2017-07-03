const parse = require('csv-parse/lib/sync')
const fs = require('fs')
module.exports = {
  up: function(queryInterface, Sequelize) {
    const pickupReasons = fs
      .readFileSync('src/server/db/seeders/pickup_reasons.csv')
      .toString()
    let rows
    output = parse(pickupReasons).slice(1)
    rows = output.map(reason => {
      return {
        code: reason[0],
        description: reason[1]
      }
    })
    return queryInterface.bulkInsert('PickupReasons', rows, {})
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PickupReasons', null, {})
  }
}
