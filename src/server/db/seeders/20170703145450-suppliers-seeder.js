'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    console.log(Sequelize)
    Sequelize.models.Supplier.create()
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Suppliers', null, {})
  }
};
