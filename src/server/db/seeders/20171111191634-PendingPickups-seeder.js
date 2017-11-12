'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PendingPickups', [{
      pid: 'pickup-id-1',
      supplierId: 'supplier-id-1',
      userId: 'user-id-1',
      createdAt: '2013-09-18T21:23:09.711Z',
      updatedAt: '2013-09-18T21:23:09.711Z'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PendingPickups', null, {});
  }
};
