module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('PickupReasons', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      code: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    })
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('PickupReasons')
  }
}
