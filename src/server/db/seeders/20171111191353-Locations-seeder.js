'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Locations', [{
      pid: 'location-id-1',
      name: 'Location 1',
      address: 'Address of location 1',
      createdAt: '2013-09-18T21:23:09.711Z',
      updatedAt: '2013-09-18T21:23:09.711Z'      
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
