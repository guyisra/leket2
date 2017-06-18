const parse = require('csv-parse/lib/sync')
const fs = require('fs')
module.exports = {
  up: function(queryInterface, Sequelize) {
    const warehouses = fs
      .readFileSync('src/server/db/seeders/warehouses.csv')
      .toString()
    let rows
    output = parse(warehouses).slice(1)
    rows = output.map(warehouse => {
      return {
        priority_id: warehouse[0],
        name: warehouse[1],
        city: warehouse[2],
        address: warehouse[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    return queryInterface.bulkInsert('Warehouses', rows, {})
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Warehouses', null, {})
  }
}
