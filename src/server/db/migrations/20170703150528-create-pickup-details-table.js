'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('PickupDetails', {
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
