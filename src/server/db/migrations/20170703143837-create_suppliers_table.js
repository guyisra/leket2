'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Suppliers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      priority_id: Sequelize.STRING,
      name: Sequelize.STRING,
      pickup_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pickups',
          key: 'id'
        },
      },
      parent_supplier_id:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Suppliers',
          key: 'id'
        }
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Suppliers');
  }
};
