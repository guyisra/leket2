'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Suppliers', [{
      pid: 'supplier-id-1',
      locationId: 'location-id-1',
      name: 'Supplier 1',
      address: 'Address of supplier 1',
      createdAt: '2013-09-18T21:23:09.711Z',
      updatedAt: '2013-09-18T21:23:09.711Z'      
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Suppliers', null, {});
  }
};
