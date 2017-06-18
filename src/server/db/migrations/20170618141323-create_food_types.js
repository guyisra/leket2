module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('FoodTypes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      priority_id: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
    })
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('FoodTypes')
  }
}
