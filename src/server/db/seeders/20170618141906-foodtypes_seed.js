const parse = require('csv-parse/lib/sync')
const fs = require('fs')
module.exports = {
  up: function(queryInterface, Sequelize) {
    const foodTypes = fs
      .readFileSync('src/server/db/seeders/food_types.csv')
      .toString()
    let rows
    output = parse(foodTypes).slice(1)
    rows = output.map(foodType => {
      return {
        priority_id: foodType[0],
        name: foodType[1],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    return queryInterface.bulkInsert('FoodTypes', rows, {})
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('FoodTypes', null, {})
  }
}
