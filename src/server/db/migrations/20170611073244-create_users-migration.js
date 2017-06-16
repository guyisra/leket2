
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      email: Sequelize.STRING,
      name: Sequelize.STRING
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("Users");
  }
};
