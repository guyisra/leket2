module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Warehouses', {
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
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      }
    })
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Warehouses')
  }
}
